export interface Experience {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  summary: string;
  contributions: string[];
  technologies: string[];
  link: { label: string; url: string };
}

export const profile = {
  name: 'Jhon Esau Pumachoque Choquenaira',
  shortName: 'Jhon Esau',
  focus: 'Backend y arquitectura de software',
  location: 'Cusco, Perú',
  email: 'jhonepc2003@gmail.com',
  github: 'https://github.com/jepcec/',
  linkedin: 'https://www.linkedin.com/in/jhon-esau-pumachoque-choquenaira-ab6570339/',
  cvFilename: 'pumachoque-choquenaira-jhon-esau-cv.pdf',
};

export const experiences: Experience[] = [
  {
    company: 'GLOBASOC S.A.C.', role: 'Full Stack Developer · Enfoque backend',
    period: 'Mayo 2026 — actualidad', current: true,
    summary: 'Una plataforma de aprendizaje preparada para crecer.',
    contributions: [
      'Planifiqué la arquitectura en NestJS y ejecuté la migración de datos desde WordPress para resolver problemas de escalabilidad del LMS.',
      'Desarrollé APIs REST e integré PayPal, autenticación JWT y control de acceso por roles con PostgreSQL y Prisma.',
      'Integré almacenamiento S3 para contenido multimedia y administré un VPS con Docker, Coolify y despliegues automatizados mediante GitHub Actions.',
    ],
    technologies: ['NestJS', 'PostgreSQL', 'Prisma', 'S3', 'Docker', 'CI/CD'],
    link: { label: 'Visitar plataforma', url: 'https://especializacionesglobal.net/' },
  },
  {
    company: 'Apolos Gym Cusco', role: 'Full Stack Developer', period: 'Mayo — junio 2026',
    summary: 'De cuadernos y tarjetas a una aplicación de escritorio.',
    contributions: [
      'Digitalicé la gestión del gimnasio con una aplicación de escritorio desarrollada con Electron, Next.js, React y TypeScript.',
      'Implementé membresías, asistencia y pagos con Prisma y SQLite, respaldos automáticos y una arquitectura estructurada para facilitar su mantenimiento.',
    ],
    technologies: ['Electron', 'Next.js', 'React', 'TypeScript', 'SQLite'],
    link: { label: 'Ver repositorio', url: 'https://github.com/jepcec/gym-apolos/' },
  },
  {
    company: 'Bambu Spa Cusco', role: 'Full Stack Developer', period: 'Enero — febrero 2026',
    summary: 'La primera presencia digital del negocio.',
    contributions: [
      'Diseñé y desarrollé una landing page adaptada a los servicios del spa.',
      'Gestioné y automaticé el despliegue en Vercel para mantener el sitio disponible en línea.',
    ],
    technologies: ['Desarrollo web', 'Diseño responsivo', 'Vercel'],
    link: { label: 'Visitar sitio', url: 'https://www.bambuspacusco.com/' },
  },
];

export const skillGroups = [
  { category: 'Backend y APIs', skills: ['Node.js', 'NestJS', 'Express.js', 'Gin', 'REST', 'JWT'] },
  { category: 'Datos', skills: ['PostgreSQL', 'MySQL', 'MariaDB', 'SQLite', 'Prisma ORM'] },
  { category: 'Frontend y escritorio', skills: ['React', 'Next.js', 'Vite', 'Electron'] },
  { category: 'Infraestructura', skills: ['Docker', 'Git / GitHub Actions', 'Linux', 'VPS', 'Coolify'] },
  { category: 'Lenguajes', skills: ['TypeScript', 'JavaScript', 'Go', 'Python', 'C#', 'SQL'] },
];
