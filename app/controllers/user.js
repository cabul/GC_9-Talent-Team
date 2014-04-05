var userController = function (server, db) {
  console.log('userController loaded');
  /*************************GET****************************/
  server.get('/talent/:talentList/users', function (req, res) {
    db.connect(function (err) {
      if (err){
        res.send(500, err);
        return;
      }
      var talentNames = (typeof(req.params.talentList) === 'string' && req.params.talentList !== '%20') ? req.params.talentList.split(" ") : [] ;
      var queryString = 'SELECT DISTINCT u.* ' +
                        'FROM users u, talents t, user_talents ut ' +
                        'WHERE (u.id = ut.user_id) AND (t.id = ut.talent_id)';
    if(talentNames.length > 0) queryString += ' AND (';
      talentNames.forEach(function (talent, index) {
        if(index > 0) queryString += ' OR ';
        queryString += '(LCASE(t.name) LIKE "%' + talent.toLowerCase() + '%")';
      });
      if(talentNames.length > 0) queryString += ')';
      queryString += ' LIMIT 12';
      db.connection.query(queryString, function (err, users, fields) {
        if (err){
          res.send(500, err);
          return;
        }
        var addTalentsToUser = function (userIndex, callBack) {
          if(userIndex >= users.length){
            callBack();
          }else{
            var talentQuery = 'SELECT t.name ' +
                              'FROM users u, talents t, user_talents ut ' +
                              'WHERE (u.id = ut.user_id) AND (t.id = ut.talent_id) AND (u.id = ' + users[userIndex].id + ') ' +
                              'LIMIT 3';
            db.connection.query(talentQuery, function (err, talents, fields) {
              if (err){
                res.send(500, err);
                return;
              }
              users[userIndex].talents = talents;
              addTalentsToUser((userIndex + 1), callBack);
            });
          }
        };
        addTalentsToUser(0, function () {
          res.render('users', {
            users : users
          });
        });
      });
    });
  });
  server.get('/home', function (req, res) {
    db.connect(function (err) {
      if (err){
        res.send(500, err);
        return;
      }
      var query = 'SELECT id, name, image ' +
                  'FROM users ' +
                  'LIMIT 4';
    db.connection.query(query, function (err, users, fields) {
      if (err){
        res.send(500, err);
        return;
      }
      var addTalentsToUser = function (userIndex, callBack) {
        if(userIndex >= users.length){
          callBack();
        }else{
          var talentQuery = 'SELECT t.name ' +
                            'FROM users u, talents t, user_talents ut ' +
                            'WHERE (u.id = ut.user_id) AND (t.id = ut.talent_id) AND (u.id = ' + users[userIndex].id + ') ' +
                            'LIMIT 3';
          db.connection.query(talentQuery, function (err, talents, fields) {
            if (err){
              res.send(500, err);
              return;
            }
            users[userIndex].talents = talents;
            addTalentsToUser((userIndex + 1), callBack);
          });
        }
      };
      addTalentsToUser(0, function () {
        res.render('home', {
          users : users
        });
      });
    });
    });
  });
  server.get('/profile/:userId', function (req, res) {
    db.connect(function (err) {
      if (err){
        res.send(500, err);
        return;
      }
      var userQuery = 'SELECT * '+
                      'FROM users '+
                      'WHERE id = '+parseInt(req.params.userId,10);
      db.connection.query(userQuery, function(err, users, fields) {
        if(err || !users){
          res.send(500, err);
          return;
        }
        if(users.length === 0){
          res.send(404, 'Error: User not found');
          return; 
        }
        var user = users[0],
            talentQuery = 'SELECT t.name ' +
                          'FROM talents t, user_talents ut ' +
                          'WHERE (ut.user_id = ' + user.id + ') AND (t.id = ut.talent_id) ' +
                          'LIMIT 9'
        db.connection.query(talentQuery, function(err, talents, fields){
          debugger;
          if(err){
            res.send(500, err);
            return;
          } 
          user.talents = talents;
          res.render('profile', {
            user: user
          });
        });
      });
    });
  });
};

module.exports = userController;
