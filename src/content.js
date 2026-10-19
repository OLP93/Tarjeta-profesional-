// Todos los textos de la tarjeta, en español e inglés.
// Los datos de contacto y los enlaces de proyectos se completan aquí abajo.

export const NAME = 'Oiane L.'

// Datos de contacto. Cada entrada tiene el texto que se muestra (`value`) y su enlace (`href`).
// Si `href` está vacío, se muestra el texto sin enlace (marcador).
export const CONTACT = {
  github: { value: 'github.com/OLP93', href: 'https://github.com/OLP93' },
}

// Enlaces de cada proyecto: `project` (el proyecto publicado) y `repo` (su repositorio en GitHub).
// Si un enlace está vacío, la tarjeta no muestra ese botón.
export const PROJECT_LINKS = {
  contest: {
    project: 'https://concurso-salon.lovable.app',
    repo: 'https://github.com/OLP93/Landin-concurso-salon',
  },
  returns: {
    project: 'https://control-devol-ferre.lovable.app',
    repo: 'https://github.com/OLP93/control-devol-ferre',
  },
  menu: {
    project: 'https://cafeteria-esquina-32.lovable.app',
    repo: 'https://github.com/OLP93/Cafeteria-Esquina-32',
  },
}

// Tecnologías de cada proyecto (iguales en los dos idiomas).
export const PROJECT_TECH = {
  contest: [
    'React',
    'TypeScript',
    'TanStack Start',
    'Tailwind CSS',
    'shadcn/ui',
    'react-hook-form',
    'zod',
  ],
  returns: ['React', 'TypeScript', 'TanStack Start', 'Tailwind CSS', 'zod', 'Vitest'],
  menu: ['React', 'TypeScript', 'TanStack Router', 'Tailwind CSS'],
}

export const CONTENT = {
  es: {
    htmlTitle: 'Oiane L. · Desarrolladora web',
    skip: 'Saltar al contenido',
    langLabel: 'Idioma',
    navLabel: 'Secciones',
    nav: {
      about: 'Sobre mí',
      what: 'Qué hago',
      projects: 'Proyectos',
      how: 'Cómo trabajo',
      contact: 'Contacto',
    },
    hero: {
      role: 'Desarrolladora web',
      line: 'Webs y aplicaciones de gestión, publicadas en Lovable y Vercel.',
      cta: 'Contacto',
    },
    about: {
      title: 'Sobre mí',
      text: 'Vengo del ámbito sanitario, un entorno de alta responsabilidad donde resolver problemas con calma, seguir protocolos y cumplir plazos no es opcional. Ahora aplico esa forma de trabajar al desarrollo de software: soy ordenada, comunico con claridad y cumplo lo acordado, entregando lo que se pide y en fecha. Estoy en plena curva de aprendizaje y aprendo rápido; mis proyectos y mi GitHub muestran cómo trabajo. Busco proyectos en los que aportar valor y seguir creciendo.',
    },
    what: {
      title: 'Qué hago',
      items: [
        {
          title: 'Webs y landings',
          text: 'Páginas claras y rápidas, pensadas para que cada visitante encuentre lo que busca.',
        },
        {
          title: 'Paneles de gestión',
          text: 'Herramientas para registrar, consultar y dar seguimiento a la información de un negocio.',
        },
        {
          title: 'Registro y confirmación',
          text: 'Formularios con validación, confirmación por correo y un estado claro en cada paso.',
        },
        {
          title: 'Diseño responsive',
          text: 'Interfaces que se ven y funcionan bien en móvil, tableta y ordenador.',
        },
        {
          title: 'Publicación',
          text: 'Proyectos publicados en Lovable y en Vercel, con el código en GitHub.',
        },
      ],
    },
    projects: {
      title: 'Proyectos',
      projectLabel: 'Ver proyecto',
      repoLabel: 'Ver repositorio',
      techLabel: 'Tecnologías',
      items: [
        {
          id: 'contest',
          title: 'Landing de concurso',
          text: 'Inscripción con doble validación y panel para gestionar el sorteo.',
          tags: ['Landing', 'Panel de gestión', 'Validación'],
        },
        {
          id: 'returns',
          title: 'Control de devoluciones a proveedores',
          text: 'Aplicación para registrar y dar seguimiento a las devoluciones de mercancía a proveedores.',
          tags: ['Aplicación de gestión', 'Seguimiento'],
        },
        {
          id: 'menu',
          title: 'Carta digital con reservas',
          text: 'Carta digital para un local de restauración, con opción de reservar mesa desde la propia página.',
          tags: ['Carta digital', 'Reservas'],
        },
      ],
    },
    how: {
      title: 'Cómo trabajo',
      steps: [
        {
          title: 'Entender',
          text: 'Escucho lo que se necesita y lo dejo claro por escrito.',
        },
        {
          title: 'Acordar alcance y fecha',
          text: 'Defino qué se entrega, cómo se comprueba y cuándo, y construyo por fases con tu aprobación en cada una.',
        },
        {
          title: 'Verificar y entregar',
          text: 'Reviso el resultado en móvil y en ordenador antes de entregar lo acordado.',
        },
      ],
    },
    contact: {
      title: 'Contacto',
      text: 'Puedes ver mi código y mis proyectos en GitHub.',
      labels: { github: 'GitHub' },
    },
    footer: 'Todos los derechos reservados.',
  },
  en: {
    htmlTitle: 'Oiane L. · Web developer',
    skip: 'Skip to content',
    langLabel: 'Language',
    navLabel: 'Sections',
    nav: {
      about: 'About me',
      what: 'What I do',
      projects: 'Projects',
      how: 'How I work',
      contact: 'Contact',
    },
    hero: {
      role: 'Web developer',
      line: 'Websites and management apps, published on Lovable and Vercel.',
      cta: 'Contact',
    },
    about: {
      title: 'About me',
      text: "I come from the healthcare field, a high-responsibility environment where solving problems calmly, following protocols and meeting deadlines isn't optional. Now I apply that same approach to software development: I'm organized, communicate clearly and deliver what was agreed, on time. I'm on a steep learning curve and learn fast; my projects and my GitHub show how I work. I'm looking for projects where I can add value and keep growing.",
    },
    what: {
      title: 'What I do',
      items: [
        {
          title: 'Websites and landing pages',
          text: 'Clear, fast pages designed so every visitor finds what they are looking for.',
        },
        {
          title: 'Management dashboards',
          text: 'Tools to record, look up and follow up on a business’s information.',
        },
        {
          title: 'Sign-up and confirmation',
          text: 'Validated forms, email confirmation and a clear status at every step.',
        },
        {
          title: 'Responsive design',
          text: 'Interfaces that look and work well on phones, tablets and computers.',
        },
        {
          title: 'Publishing',
          text: 'Projects published on Lovable and Vercel, with the code on GitHub.',
        },
      ],
    },
    projects: {
      title: 'Projects',
      projectLabel: 'View project',
      repoLabel: 'View repository',
      techLabel: 'Technologies',
      items: [
        {
          id: 'contest',
          title: 'Contest landing page',
          text: 'Entry form with double validation and a dashboard to manage the prize draw.',
          tags: ['Landing page', 'Dashboard', 'Validation'],
        },
        {
          id: 'returns',
          title: 'Supplier returns tracking',
          text: 'An app to record and follow up on merchandise returns to suppliers.',
          tags: ['Management app', 'Tracking'],
        },
        {
          id: 'menu',
          title: 'Digital menu with bookings',
          text: 'A digital menu for a food and drink venue, with the option to book a table from the page itself.',
          tags: ['Digital menu', 'Bookings'],
        },
      ],
    },
    how: {
      title: 'How I work',
      steps: [
        {
          title: 'Understand',
          text: 'I listen to what is needed and put it clearly in writing.',
        },
        {
          title: 'Agree scope and date',
          text: 'I define what is delivered, how it is checked and when, and build in phases, with your approval at each one.',
        },
        {
          title: 'Verify and deliver',
          text: 'I check the result on mobile and desktop before delivering what was agreed.',
        },
      ],
    },
    contact: {
      title: 'Contact',
      text: 'You can see my code and projects on GitHub.',
      labels: { github: 'GitHub' },
    },
    footer: 'All rights reserved.',
  },
}
