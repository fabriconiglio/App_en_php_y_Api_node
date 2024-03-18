Guía de Instalación y Prueba
===========================
Este documento proporciona instrucciones sobre cómo configurar y probar la aplicación "Próxima Serie a Emitirse" tanto en entornos Windows como Linux.

Requisitos Previos
------------------
Para ejecutar este proyecto, necesitarás:

- Un servidor web como Apache o Nginx
- PHP (versión 8.0 o superior recomendada)
- MySQL o MariaDB
- Acceso a una terminal o línea de comandos

Configuración
-------------
1. Clona el repositorio en tu servidor web.

Base de Datos
-------------
1. Inicia sesión en tu sistema de gestión de base de datos MySQL/MariaDB.
2. Crea una nueva base de datos llamada `InnoDB`.
3. Selecciona la base de datos creada
4. Ejecuta los scripts SQL proporcionados para crear las tablas y poblarlas con datos iniciales.

Servidor Web
------------
1. Linux:
   - Instala Apache y PHP utilizando tu gestor de paquetes predilecto (apt, yum, etc.).
   - Ubica tus archivos del proyecto en el directorio predeterminado de Apache (/var/www/html/ o similar).

2. Windows:
   - Puedes utilizar XAMPP, WAMP, o similar para un entorno de desarrollo que incluya Apache, MySQL y PHP.
   - Coloca tus archivos del proyecto en el directorio htdocs dentro de tu carpeta de XAMPP o WAMP.

Configuración PHP
-----------------
- Asegúrate de que el archivo db.php contenga las credenciales correctas para conectarse a tu base de datos.

Pruebas
------
1. Abre tu navegador web preferido.
2. Navega a la ubicación donde se encuentra tu proyecto. Esto será algo así como http://localhost/ si estás utilizando el directorio predeterminado de Apache o XAMPP/WAMP.
3. Utiliza el formulario proporcionado para seleccionar una fecha y hora, y opcionalmente un título de serie, para buscar la próxima serie a emitirse.

Problemas Comunes
----------------
- Error 500 o pantalla en blanco: Verifica los logs de error de tu servidor web y habilita la visualización de errores en PHP para diagnóstico.
- Conexión a la base de datos fallida: Confirma que tus credenciales de base de datos en db.php son correctas y que tu servidor de base de datos está corriendo.

¡Listo! Ahora deberías tener una instalación funcional de la aplicación "Próxima Serie a Emitirse".
```