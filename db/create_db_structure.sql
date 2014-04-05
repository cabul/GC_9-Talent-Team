create table if not exists users(
  id int(10) not null auto_increment,
  email varchar(50),
  tel varchar(20),
  name varchar(100) not null,
  info varchar(500),
  contact varchar(500),
  image varchar(100),
  created timestamp not null default current_timestamp,
  updated timestamp not null,
  constraint users_pk primary key(id),
  constraint users_email_uk unique key(email),
  constraint users_tel_uk unique key(tel)
);

create table if not exists talents (
  id int(10) not null auto_increment,
  name varchar(50) not null,
  info varchar(500),
  constraint talents_pk primary key(id),
  constraint talents_uk unique key(name)
);

create table if not exists dialogs (
  id int(10) not null auto_increment,
  title varchar(50) not null,
  info varchar(500) not null,
  state bool not null,
  client_name varchar(100) not null,
  client_email varchar(50) not null,
  client_contact varchar(500),
  created timestamp not null default current_timestamp,
  updated timestamp not null,
  user_id int(10) not null,
  constraint dialogs_pk primary key(id)
);

create table if not exists user_talents (
  user_id int(10) not null,
  talent_id int(10) not null,
  constraint user_talents_pk primary key(user_id,talent_id),
  constraint user_talents_to_user_fk foreign key(user_id) references users(id),
  constraint user_talents_to_talent_fk foreign key(talent_id) references talents(id)
);

create table if not exists dialog_talents (
  dialog_id int(10) not null,
  talent_id int(10) not null,
  constraint dialog_talents_pk primary key(dialog_id,talent_id),
  constraint dialog_talents_to_dialog_fk foreign key(dialog_id) references dialogs(id),
  constraint dialog_talents_to_talent_fk foreign key(talent_id) references talents(id)
);

create table if not exists messages (
  id int(10) not null auto_increment,
  content varchar(500) not null,
  date timestamp not null default current_timestamp,
  is_admin bool not null,
  dialog_id int(10) not null,
  constraint messages_pk primary key(id),
  constraint messages_to_dialog_fk foreign key(dialog_id) references dialogs(id)
);
