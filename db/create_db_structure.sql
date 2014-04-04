create table if not exists users(
  id int(10) not null auto_increment,
  email varchar(50) not null,
  name varchar(100) not null,
  info varchar(500),
  contact varchar(500),
  image varchar(100),
  created date,
  updated date,
  constraint users_pk primary key(id),
  constraint users_uk unique key(email)
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
  user_id int(10) not null,
  created date not null,
  updated date not null,
  constraint dialog_pk primary key(id)
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
  date date not null,
  is_admin bool not null,
  dialog_id int(10) not null,
  constraint messages_pk primary key(id),
  constraint messages_to_dialog_fk foreign key(dialog_id) references dialogs(id)
);
