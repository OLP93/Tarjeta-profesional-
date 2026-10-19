// Todos los textos de la tarjeta, en español e inglés.
// Los datos de contacto y los enlaces de proyectos se completan aquí abajo.

export const NAME = 'Oiane L.'

// Datos de contacto: sustituye cada marcador por el dato real y añade el enlace en `href`.
// Ejemplos de href: 'mailto:tu-correo@dominio.com', 'https://github.com/usuario'.
// Mientras `href` esté vacío, se muestra el marcador como texto sin enlace.
export const CONTACT = {
  email: { value: '[correo]', href: '' },
  github: { value: '[usuario de GitHub]', href: '' },
  linkedin: { value: '[LinkedIn]', href: '' },
}

// Enlaces al código de cada proyecto. Mientras estén vacíos, la tarjeta no muestra el botón.
export const PROJECT_LINKS = {
  contest: '',
  waitlist: '',
  returns: '',
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
      text: 'Creo webs y aplicaciones de gestión con un enfoque claro: entender lo que se necesita, acordar el alcance y cumplir lo prometido. Vengo del ámbito sanitario, donde aprendí a priorizar, resolver problemas bajo presión y cuidar cada detalle. Hoy aplico esa disciplina al desarrollo web, y aprendo rápido.',
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
      linkLabel: 'Ver el código',
      items: [
        {
          id: 'contest',
          title: 'Landing de concurso',
          text: 'Inscripción con doble validación y panel para gestionar el sorteo.',
          tags: ['Landing', 'Panel de gestión', 'Validación'],
        },
        {
          id: 'waitlist',
          title: 'Lista de espera con referidos',
          text: 'Registro con confirmación por correo, posición en la lista según los invitados confirmados y panel de gestión.',
          tags: ['Registro', 'Referidos', 'Panel de gestión'],
        },
        {
          id: 'returns',
          title: 'Control de devoluciones a proveedores',
          text: 'Aplicación para registrar y dar seguimiento a las devoluciones de mercancía a proveedores.',
          tags: ['Aplicación de gestión', 'Seguimiento'],
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
          title: 'Acordar y construir',
          text: 'Defino el alcance y construyo por fases, con tu aprobación en cada una.',
        },
        {
          title: 'Verificar y entregar',
          text: 'Reviso el resultado en móvil y en ordenador antes de entregar lo acordado.',
        },
      ],
    },
    contact: {
      title: 'Contacto',
      text: 'Si tienes un proyecto en mente, escríbeme y lo hablamos.',
      labels: { email: 'Correo', github: 'GitHub', linkedin: 'LinkedIn' },
    },
    footer: 'Todos los derechos reservados.',
  },
  en: {
    htmlTitle: 'Oiane L. · Web developer',
    skip: 'Skip to content',
    langLabel: 'Language',
    navLabel: 'Sections',
    nav: {
      about: 'About',
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
      title: 'About',
      text: "I build websites and management apps with a clear approach: understand what's needed, agree on scope, and deliver what I promise. I come from the healthcare field, where I learned to prioritize, solve problems under pressure and care for every detail. Today I bring that discipline to web development, and I learn fast.",
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
      linkLabel: 'View the code',
      items: [
        {
          id: 'contest',
          title: 'Contest landing page',
          text: 'Entry form with double validation and a dashboard to manage the prize draw.',
          tags: ['Landing page', 'Dashboard', 'Validation'],
        },
        {
          id: 'waitlist',
          title: 'Waitlist with referrals',
          text: 'Sign-up with email confirmation, list position based on confirmed invitees, and a management dashboard.',
          tags: ['Sign-up', 'Referrals', 'Dashboard'],
        },
        {
          id: 'returns',
          title: 'Supplier returns tracking',
          text: 'An app to record and follow up on merchandise returns to suppliers.',
          tags: ['Management app', 'Tracking'],
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
          title: 'Agree and build',
          text: 'I define the scope and build in phases, with your approval at each one.',
        },
        {
          title: 'Verify and deliver',
          text: 'I check the result on mobile and desktop before delivering what was agreed.',
        },
      ],
    },
    contact: {
      title: 'Contact',
      text: 'If you have a project in mind, get in touch and we will talk it through.',
      labels: { email: 'Email', github: 'GitHub', linkedin: 'LinkedIn' },
    },
    footer: 'All rights reserved.',
  },
}
