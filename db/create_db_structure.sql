-- create database structure
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

create table if not exists talent_aliases (
  talent_id int(10) not null,
  name varchar(50) not null,
  constraint talent_aliases_pk primary key(talent_id,name),
  constraint talent_aliases_to_talent_fk foreign key(talent_id) references talents(id) on update cascade on delete cascade
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
  constraint user_talents_to_user_fk foreign key(user_id) references users(id) on update cascade on delete cascade,
  constraint user_talents_to_talent_fk foreign key(talent_id) references talents(id) on update cascade on delete cascade
);

create table if not exists dialog_talents (
  dialog_id int(10) not null,
  talent_id int(10) not null,
  constraint dialog_talents_pk primary key(dialog_id,talent_id),
  constraint dialog_talents_to_dialog_fk foreign key(dialog_id) references dialogs(id) on update cascade on delete cascade,
  constraint dialog_talents_to_talent_fk foreign key(talent_id) references talents(id) on update cascade on delete cascade
);

create table if not exists messages (
  id int(10) not null auto_increment,
  content varchar(500) not null,
  date timestamp not null default current_timestamp,
  is_admin bool not null,
  dialog_id int(10) not null,
  constraint messages_pk primary key(id),
  constraint messages_to_dialog_fk foreign key(dialog_id) references dialogs(id) on update cascade on delete cascade
);

-- insert mock data
INSERT INTO `talents` (`id`, `name`, `info`) VALUES
(1, 'Expresión oral', 'La expresión oral es el conjunto de técnicas que determinan las pautas generales que deben seguirse para comunicarse oralmente con efectividad, es decir, es la forma de expresar sin barreras lo que se piensa.'),
(2, 'Expresión escrita', 'La expresión escrita consiste en exponer, por medio de signos convencionales y de forma ordenada, cualquier pensamiento o idea.'),
(3, 'Pensamiento creativo', 'Pensar creativamente hace referencia a la capacidad para idear algo nuevo, relacionar algo conocido de forma innovadora o apartarse de esquemas de pensamiento o conducta habituales.'),
(4, 'Empatía', 'La empatía es una capacidad innata de las personas que permite tender puentes hacia universos distintos al propio, para imaginar y sentir cómo es el mundo desde la perspectiva de la otra persona.'),
(5, 'Pensamiento crítico', 'El pensamiento crítico requiere la puesta en acción tanto de habilidades cognitivas (un proceso activo de pensamiento que permite llegar a conclusiones alternativas), como de competencias emocionales (relacionadas con las actitudes personales, ya que es necesario también querer pensar).'),
(6, 'Manejo de emociones y sentimientos', 'Esta habilidad propone aprender a navegar en el mundo de las emociones y sentimientos, logrando mayor sintonía con el propio mundo afectivo y el de las demás personas.'),
(7, 'Manejo de tensiones y estrés', 'Esta habilidad permite identificar las fuentes de tensión y estrés en la vida cotidiana, saber reconocer sus distintas manifestaciones y encontrar vías para eliminarlas o contrarrestarlas de manera saludable.'),
(8, 'Toma de decisiones', 'Esta habilidad ofrece herramientas para evaluar las diferentes posibilidades en juego, teniendo en cuenta necesidades, valores, motivaciones, influencias y posibles consecuencias presentes y futuras, tanto en la propia vida como en la de otras personas.'),
(9, 'Relaciones interpersonales', 'Establecer y conservar relaciones interpersonales significativas, así como ser capaz de terminar aquellas que bloqueen el crecimiento personal (relaciones tóxicas).'),
(10, 'Manejo de problemas y conflictos', 'manejarlos de forma creativa y flexible, identificando en ellos oportunidades de cambio y crecimiento personal y social.'),
(11, 'Comunicación asertiva', 'La persona que se comunica asertivamente expresa con claridad lo que piensa, siente o necesita, teniendo en cuenta los derechos, sentimientos y valores de sus interlocutores.'),
(12, 'Tratamiento de imágenes', 'Esta habilidad permite desarrollar trabajos enfocados al tratamiento de imágenes.'),
(13, 'Edición de imágenes ', 'Esta habilidad permite desarrollar trabajos enfocados a la creación y edición de imágenes.'),
(14, 'Edición de vídeos', 'Esta habilidad permite desarrollar trabajos enfocados a la edición de vídeos.'),
(15, 'Html', 'Esta habilidad permite desarrollar trabajos enfocados al diseño de páginas web.'),
(16, 'Expresión musical', 'La expresión musical es el conjunto de técnicas musicales que determinan las pautas generales que deben seguirse para comunicarse musicalmente, es decir, es la forma de expresar sin barreras lo que se piensa a través de la música.'),
(17, 'Labranza', 'Habilidad para cultivar el campo.');

INSERT INTO `users` (`id`, `email`, `name`, `info`, `contact`, `image`, `created`, `updated`, `tel`) VALUES
(4, 'andres.palacio@gmail.com', 'Andres Palacio', 'Lorem ipsum dolor sit amet', 'Facebook, LinkedIn, Twitter, ...', '/public/images/photo.jpg', '2014-04-05 02:01:21', '2014-04-05 02:03:50', '600 12 34 01'),
(5, 'calvin.bulla@gmail.com', 'Calvin Bulla', 'Lorem ipsum dolor sit amet', 'Facebook, LinkedIn, Twitter, ...', '/public/images/photo.jpg', '2014-04-05 02:01:21', '2014-04-05 02:03:50', '600 12 34 02'),
(6, 'lewis.noguera@gmail.com', 'Lewis Noguera', 'Lorem ipsum dolor sit amet', 'Facebook, LinkedIn, Twitter, ...', '/public/images/photo.jpg', '2014-04-05 02:01:21', '2014-04-05 02:03:50', '600 12 34 03'),
(7, 'misael.ojeda@gmail.com', 'Misael Ojeda', 'Lorem ipsum dolor sit amet', 'Facebook, LinkedIn, Twitter, ...', '/public/images/photo.jpg', '2014-04-05 02:01:21', '2014-04-05 02:03:50', '600 12 34 04'),
(8, 'isi.rodriguez@gmail.com', 'Isi Rodriguez', 'Lorem ipsum dolor sit amet', 'Facebook, LinkedIn, Twitter, ...', '/public/images/photo.jpg', '2014-04-05 02:01:21', '2014-04-05 02:03:50', '600 12 34 05'),
(9, 'jessica.naranjo@gmail.com', 'Jessica Naranjo', 'Lorem ipsum dolor sit amet', 'Facebook, etc.', NULL, '2014-04-05 02:43:59', '0000-00-00 00:00:00', '600 123456'),
(10, 'maria.lopez@gmail.com', 'María López', 'Lorem ipsum dolor sit amet', 'Facebook, Twitter, Linkedin, etc.', NULL, '2014-04-05 03:40:13', '0000-00-00 00:00:00', '698745215'),
(11, 'cristina.hernandez@gmail.com ', 'Cristina Hernández', 'Lorem ipsum dolor sit amet', 'Facebook, Twitter, Linkedin, etc.', NULL, '2014-04-05 03:51:47', '0000-00-00 00:00:00', '648219874'),
(12, 'ana.socas@gmail.com', 'Ana Socas', 'Lorem ipsum dolor sit amet', 'Facebook, Twitter, Linkedin, etc.', NULL, '2014-04-05 03:53:28', '0000-00-00 00:00:00', '677236841'),
(13, 'sara.rodriguez@gmail.com', 'Sara Rodríguez', 'Lorem ipsum dolor sit amet', 'Facebook, Twitter, Linkedin, etc.', NULL, '2014-04-05 03:55:46', '0000-00-00 00:00:00', '693578412'),
(14, 'juan.perez@gmail.com', 'Juan Pérez', 'Lorem ipsum dolor sit amet', 'Facebook, Twitter, Linkedin, etc.', NULL, '2014-04-05 03:57:23', '0000-00-00 00:00:00', '693574123'),
(15, 'josefa.navarro@gmail.com', 'Josefa Navarro', 'Lorem ipsum dolor sit amet', 'Facebook, Twitter, Linkedin, etc.', NULL, '2014-04-05 04:00:24', '0000-00-00 00:00:00', '655123456');


INSERT INTO `user_talents` (`user_id`, `talent_id`) VALUES
(4, 1),
(4, 3),
(4, 4),
(5, 2);

