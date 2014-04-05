Talnet
=======

Repositorio general para el proyecto Talnet del Hack4Good 2014

Talnet es una plataforma online orientado a darle voz a personas con ganas de trabajar, formentar su experiencia y realizar proyectos.
Le da un enfoque a los talentos, no a los curricula!

Nuestro servidor está corriendo bajo node.js
Se puede obtener de manera gratuita bajo: http://nodejs.org/

Para obtener nuestro código hay dos maneras:
git clone https://github.com/cabul/H4G2014
...si todo esto te suena a chino, puedes descargar un .zip
Lo descomprimes y te mueves a la carpeta
(cd Descargas/H4G2014) por ejemplo
Estando en el directorio abres una terminal o un prompt de Windows y ejecutas
"node talnet.js" (sin las "")
Ahora ya tienes el servidor corriendo
Te vas a tu browser favorito y pones "localhost:3000" (sin las "")

Consideraciones:
- en la página web de node hay mucha documentación acerca de lo que permite hacer y como se usa
- lo mismo para github
- a lo mejor hace falta configurar tu Firewall para que te deje acceder

La parte interesante:
Aviso, solo pasar si consideras apto con el mundo de la informática.
Si lo anterior te pareció dificil y tenías que recurrir a tu gurú local para hacerlo, creete la magia!

...Vale...sigues leyendo...

Hemos creado una base de datos mysql en freemysqlhosting.net
Está página es de registro gratuito, pero tiene un tamaño limitado, por lo que solo hemos almacenados algunos datos ejemplares para poder implementar las querries.
Bajo del directorio db/ se encuentran los ficheros de sql que hemos utilizado.

El servidor está corriendo bajo nodejs.
Te recomiendo visitar nodejs.org, si aún no estás familiarizado con node.
talnet.js es el fichero principal del servidor.
Bajo app/ tenemos la estructura principal de nuestra applicación
 - views/ contiene las vistas provisionales (el frontend)
 - connections/ contiene el modulo que nos establece la conexión a nuestra BD
 - helpers/ contiene ficheros de uso génerico
 - controllers/ contiene los modulos que gestionan nuestra applicación web

Cabe añadir que la implementación es a base de ejemplo.
Hay implementados unas funcionalidades básicas.

Tenemos muchas ideas y ganas de extender la base aquí presente.
