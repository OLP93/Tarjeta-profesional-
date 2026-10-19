# Tarjeta profesional

Página de presentación profesional de Oiane L., en español e inglés. Una sola página con las secciones: sobre mí, qué hago, proyectos, cómo trabajo y contacto.

Publicada en Vercel: https://tarjeta-profesional.vercel.app

## Tecnología

- React 18 + Vite 5.
- CSS propio, sin librerías de estilos.
- Tipografías de Google Fonts (Cormorant Garamond e Inter), con tipografías del sistema como respaldo.

## Estructura

```
index.html        Página base (título, descripción, tipografías)
public/           Icono de la página
src/content.js    Todos los textos (ES/EN), contacto, enlaces y tecnologías de los proyectos
src/App.jsx       Estructura de la página, barra fija y selector de idioma
src/styles.css    Colores, tipografía y diseño responsive
```

## Cómo editar

Todo el contenido está en `src/content.js`:

- **Textos:** dentro de `CONTENT.es` y `CONTENT.en`. Mantén ambos idiomas con la misma estructura.
- **Contacto:** objeto `CONTACT`. Cada entrada tiene `value` (texto visible) y `href` (enlace). Si `href` está vacío, se muestra solo el texto.
- **Enlaces de proyectos:** objeto `PROJECT_LINKS`. Cada proyecto tiene `project` (el proyecto publicado, botón "Ver proyecto") y `repo` (su repositorio en GitHub, botón "Ver repositorio"). Si un enlace está vacío, ese botón no se muestra.
- **Tecnologías de proyectos:** objeto `PROJECT_TECH`. Lista de tecnologías por proyecto, igual en los dos idiomas.
- **Colores:** variables al inicio de `src/styles.css`.

## Cómo ampliar la tarjeta

La página está pensada para crecer. Las tarjetas se reparten solas en la pantalla, así que añadir elementos no rompe el diseño.

### Añadir una capacidad nueva (sección "Qué hago")

En `src/content.js`, añade un bloque a la lista `what.items` de **los dos idiomas**:

```js
{
  title: 'Título corto de la capacidad',
  text: 'Una frase que explique qué aportas con ella.',
},
```

### Añadir un proyecto nuevo (sección "Proyectos")

1. En `PROJECT_LINKS`, añade una clave nueva con un identificador sencillo y sus dos enlaces (déjalos vacíos si todavía no existen):

   ```js
   reservas: { project: '', repo: '' },
   ```

2. En `PROJECT_TECH`, añade la misma clave con sus tecnologías:

   ```js
   reservas: ['React', 'TypeScript'],
   ```

3. En `projects.items` de **los dos idiomas**, añade un bloque con ese mismo `id`:

   ```js
   {
     id: 'reservas',
     title: 'Nombre del proyecto',
     text: 'Qué hace y para quién, en una o dos frases.',
     tags: ['Etiqueta 1', 'Etiqueta 2'],
   },
   ```

4. Cuando el proyecto esté terminado, publicado y revisado, rellena sus enlaces en `PROJECT_LINKS`. Hasta entonces la tarjeta no muestra botones.

### Quitar o reordenar

Borra el bloque correspondiente de los dos idiomas (y su entrada en `PROJECT_LINKS` y `PROJECT_TECH` si es un proyecto). El orden en pantalla es el orden de la lista.

### Cómo publicar los cambios

- Desde GitHub: abre el archivo, pulsa el icono del lápiz (editar), haz el cambio y guarda con *Commit changes* en la rama `main`. Funciona también desde el móvil.
- Desde un editor en el ordenador: `git add`, `git commit` y `git push` a `main`.

Vercel compila y publica solo en uno o dos minutos. Si algo falla en la compilación, la versión anterior sigue publicada.

### Revisión antes de guardar

- Cada bloque existe en español **y** en inglés.
- Las comas, llaves y comillas están bien cerradas (un olvido hace fallar la compilación).
- Después de publicar, abre la página en el móvil y comprueba ambos idiomas.

Si la lista de proyectos llega a ser muy larga, se puede añadir un filtro por tipo de proyecto.

## Comandos

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # genera la carpeta dist
npm run preview  # prueba local de la versión compilada
```

## Publicación

El repositorio está conectado a Vercel. Cada cambio que se sube a la rama `main` se compila y se publica automáticamente en producción.

## Límites del proyecto

- No tiene backend ni base de datos: es una página estática.
- El único dato que se guarda es el idioma elegido, en el navegador de cada visitante (localStorage). No se recogen datos personales.
- No hay formulario de contacto ni correo visible: el contacto es el enlace al perfil de GitHub.
- El plan Hobby de Vercel está pensado para uso personal y no comercial, lo que encaja con una tarjeta de presentación personal.
- La dirección pública es `tarjeta-profesional.vercel.app`. Las demás direcciones del proyecto en Vercel (por ejemplo, las que incluyen el nombre del equipo) están protegidas con inicio de sesión y no deben compartirse.

## Si en el futuro se necesita backend

Por ejemplo, para un formulario de contacto que guarde los mensajes:

1. Añadir una función de servidor (por ejemplo, una función de Vercel en una carpeta `api/`) que reciba el formulario y envíe el correo.
2. Guardar claves y datos privados como variables de entorno en Vercel, nunca en el código.
3. Añadir validación y protección contra spam, y actualizar la sección de privacidad de la página.

Hasta que haga falta, es mejor mantener la página sin backend: es más simple, rápida y segura.

## Accesibilidad y móvil

- Barra superior fija con el nombre, el menú de secciones y el selector de idioma, en móvil, tableta y ordenador.
- Enlace para saltar al contenido, navegación con etiquetas y foco visible.
- El selector de idioma indica cuál está activo y cambia el idioma declarado de la página.
- Los enlaces de cada proyecto indican a qué proyecto pertenecen para los lectores de pantalla.
- Diseño responsive pensado primero para móvil; respeta la preferencia de menos movimiento del dispositivo.
- Colores con contraste suficiente entre texto y fondo.
