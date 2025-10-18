export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveLink?: string
  githubLink?: string
}

export interface Portfolio {
  id: string
  name: string
  title: string
  bio: string
  about: {
    description: string
    interests: string[]
    skills: string[]
    goals: string[]
  }
  carouselImages: {
    url: string
    caption: string
  }[]
  specialties: string[]
  projects: Project[]
  contact: {
    email: string
    phone: string
    whatsapp: string
    instagram: string
    github: string
    linkedin?: string
  }
  avatar: string
}

export const portfolios: Portfolio[] = [
  {
    id: "javier-guerra",
    name: "Javier Guerra",
    title: "Full Stack Developer",
    bio: "Desarrollador apasionado por crear soluciones innovadoras",
    avatar: "/javier-portafolio.jpg",
    carouselImages: [
      {
        url: "/javier-portafolio.jpg",
        caption: "Mi presentación profesional",
      },
      {
        url: "/coding-on-laptop.png",
        caption: "Desarrollando soluciones",
      },
      {
        url: "/team-collaboration.png",
        caption: "Trabajo en equipo",
      },
    ],
    specialties: ["Desarrollo Web", "Aplicaciones Móviles", "Cloud Computing"],
    about: {
      description:
        "Soy un desarrollador full stack con más de 5 años de experiencia en la creación de aplicaciones web y móviles. Me apasiona aprender nuevas tecnologías y resolver problemas complejos.",
      interests: ["Inteligencia Artificial", "Desarrollo de Videojuegos", "Open Source"],
      skills: ["React", "Node.js", "TypeScript", "Python", "AWS", "Docker"],
      goals: [
        "Contribuir a proyectos open source",
        "Crear mi propia startup tecnológica",
        "Mentorear a nuevos desarrolladores",
      ],
    },
    projects: [
      {
        id: "schoolumg",
        title: "SchoolUMG",
        description:
          "Sistema de gestión académica completo con módulos de alumnos, profesores, calificaciones y reportes estadísticos",
        image: "/schoolumg-project.png",
        technologies: ["React (Vite)", "C#"],
        liveLink: "https://app.schoolumg.com",
      },
      {
        id: "casagv",
        title: "CasaG&V",
        description:
          "Plataforma de reservas de apartamentos modernos y acogedores en Flores, Petén. Ubicación privilegiada cerca de las maravillas arqueológicas de Tikal y Yaxha.",
        image: "/casagv-project.png",
        technologies: ["React"],
        liveLink: "https://ambitious-beach-0c4075410.3.azurestaticapps.net/",
      },
      {
        id: "mipelis",
        title: "MiPelis",
        description:
          "Aplicación web para gestión de películas favoritas. Permite agregar, editar, eliminar y buscar películas con una interfaz intuitiva y moderna.",
        image: "/mipelis-project.png",
        technologies: ["HTML", "CSS", "JavaScript"],
        liveLink: "https://lively-plant-0c9914e1e.3.azurestaticapps.net/",
      },
    ],
    contact: {
      email: "javier.guerra294@gmail.com",
      phone: "+502 5485-3063",
      whatsapp: "+50254853063",
      instagram: "javiguerra04",
      github: "javiwar04",
    },
  },
  {
    id: "victor-madrid",
    name: "Victor Madrid",
    title: "UI/UX Designer & Frontend Developer",
    bio: "Diseñador y desarrollador enfocado en experiencias de usuario excepcionales",
    avatar: "/victor-portafolio.png",
    carouselImages: [
      {
        url: "/victor-portafolio.png",
        caption: "Mi perfil profesional",
      },
      {
        url: "/ui-design-process.jpg",
        caption: "Proceso de diseño",
      },
      {
        url: "/creative-brainstorming.jpg",
        caption: "Sesión creativa",
      },
    ],
    specialties: ["Diseño de Interfaces", "Experiencia de Usuario", "Desarrollo Frontend"],
    about: {
      description:
        "Diseñador UI/UX y desarrollador frontend con un enfoque en crear experiencias digitales memorables. Combino creatividad con código para dar vida a diseños innovadores.",
      interests: ["Design Systems", "Animaciones Web", "Accesibilidad"],
      skills: ["Figma", "React", "CSS/SASS", "JavaScript", "Adobe XD", "Framer Motion"],
      goals: [
        "Crear un design system reconocido",
        "Escribir un libro sobre UX",
        "Hablar en conferencias internacionales",
      ],
    },
    projects: [
      {
        id: "schoolumg",
        title: "SchoolUMG",
        description:
          "Sistema de gestión académica completo con módulos de alumnos, profesores, calificaciones y reportes estadísticos",
        image: "/schoolumg-project.png",
        technologies: ["React (Vite)", "C#"],
        liveLink: "https://app.schoolumg.com",
      },
      {
        id: "mispelisv2",
        title: "MisPelis",
        description:
          "Aplicación web para gestión de películas favoritas. Permite agregar, editar, eliminar y buscar películas con una interfaz intuitiva y moderna.",
        image: "/mispelisv2-project.png",
        technologies: ["HTML", "CSS", "JavaScript"],
        liveLink: "https://mango-ocean-0cce91e0f.3.azurestaticapps.net/",
      },
      {
        id: "agro-vida-sostenible",
        title: "Agro Vida Sostenible",
        description:
          "Plataforma web dedicada a la agricultura sostenible, con información sobre cultivos, ganadería, tecnología agrícola y capacitaciones para agricultores.",
        image: "/agro-vida-sostenible.png",
        technologies: ["HTML", "CSS", "JavaScript"],
        liveLink: "https://wonderful-mud-05c33090f.3.azurestaticapps.net/",
      },
    ],
    contact: {
      email: "vgbm123456@gmail.com",
      phone: "+502 5835-5665",
      whatsapp: "+50258355665",
      instagram: "v1ctor_barr1os",
      github: "victormadrid",
    },
  },
  {
    id: "aldo-yax",
    name: "Aldo Yax",
    title: "Backend Developer & DevOps Engineer",
    bio: "Especialista en arquitectura de sistemas y automatización",
    avatar: "/aldo-portafolio.jpg",
    carouselImages: [
      {
        url: "/aldo-portafolio.jpg",
        caption: "Mi espacio de trabajo",
      },
      {
        url: "/devops-monitoring-dashboard.png",
        caption: "Monitoreo de sistemas",
      },
      {
        url: "/code-deployment.jpg",
        caption: "Despliegue continuo",
      },
    ],
    specialties: ["Arquitectura de Software", "DevOps", "Microservicios"],
    about: {
      description:
        "Ingeniero backend y DevOps con experiencia en diseño de sistemas escalables y automatización de infraestructura. Me especializo en crear soluciones robustas y eficientes.",
      interests: ["Kubernetes", "Arquitectura Cloud", "Seguridad Informática"],
      skills: ["Python", "Go", "Docker", "Kubernetes", "AWS", "Terraform"],
      goals: [
        "Obtener certificación AWS Solutions Architect",
        "Contribuir a proyectos de infraestructura open source",
        "Crear herramientas DevOps innovadoras",
      ],
    },
    projects: [
      {
        id: "schoolumg",
        title: "SchoolUMG",
        description:
          "Sistema de gestión académica completo con módulos de alumnos, profesores, calificaciones y reportes estadísticos",
        image: "/schoolumg-project.png",
        technologies: ["React (Vite)", "C#"],
        liveLink: "https://app.schoolumg.com",
      },
      {
        id: "mispelisv2",
        title: "MisPelis",
        description:
          "Aplicación web para gestión de películas favoritas. Permite agregar, editar, eliminar y buscar películas con una interfaz intuitiva y moderna.",
        image: "/mispelisv2-project.png",
        technologies: ["HTML", "CSS", "JavaScript"],
        liveLink: "https://happy-glacier-022d6541e.3.azurestaticapps.net/",
      },
      {
        id: "musica-actual",
        title: "Música Actual",
        description:
          "Plataforma web de música actual con secciones de top hits, artistas, nuevos lanzamientos, festivales y playlists personalizadas.",
        image: "/musica-actual.png",
        technologies: ["HTML", "CSS", "JavaScript"],
        liveLink: "https://jolly-tree-06a19af10.3.azurestaticapps.net/",
      },
    ],
    contact: {
      email: "aldoyagu@miumg.edu.gt",
      phone: "+502 4080-5837",
      whatsapp: "+50240805837",
      instagram: "a___mgz19",
      github: "aldoyax",
      linkedin: "masaldotergt",
    },
  },
  {
    id: "susan-ixcamparij",
    name: "Susan Ixcamparij",
    title: "Mobile Developer & Tech Lead",
    bio: "Líder técnica especializada en desarrollo móvil multiplataforma",
    avatar: "/susan-portafolio.png",
    carouselImages: [
      {
        url: "/susan-portafolio.png",
        caption: "Mi presentación profesional",
      },
      {
        url: "/team-leadership-meeting.jpg",
        caption: "Liderazgo de equipo",
      },
      {
        url: "/tech-conference-speaking.jpg",
        caption: "Compartiendo conocimiento",
      },
    ],
    specialties: ["Desarrollo Móvil", "Liderazgo Técnico", "Arquitectura de Apps"],
    about: {
      description:
        "Tech Lead con amplia experiencia en desarrollo de aplicaciones móviles nativas y multiplataforma. Apasionada por crear equipos de alto rendimiento y aplicaciones que impactan positivamente a los usuarios.",
      interests: ["Flutter", "React Native", "Gestión de Equipos", "Mentoría"],
      skills: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "GraphQL"],
      goals: [
        "Publicar apps con más de 1M de descargas",
        "Crear una comunidad de mujeres en tech",
        "Escribir artículos técnicos regularmente",
      ],
    },
    projects: [
      {
        id: "schoolumg",
        title: "SchoolUMG",
        description:
          "Sistema de gestión académica completo con módulos de alumnos, profesores, calificaciones y reportes estadísticos",
        image: "/schoolumg-project.png",
        technologies: ["React (Vite)", "C#"],
        liveLink: "https://app.schoolumg.com",
      },
      {
        id: "mispelisv2",
        title: "MisPelis",
        description:
          "Aplicación web para gestión de películas favoritas. Permite agregar, editar, eliminar y buscar películas con una interfaz intuitiva y moderna.",
        image: "/mispelisv2-project.png",
        technologies: ["HTML", "CSS", "JavaScript"],
        liveLink: "https://happy-glacier-022d6541e.3.azurestaticapps.net/",
      },
    ],
    contact: {
      email: "suselixcam10@gmail.com",
      phone: "+502 5563-8614",
      whatsapp: "+50255638614",
      instagram: "susan_ixchop",
      github: "susanixcamparij",
    },
  },
  {
    id: "juan-marcos-castro",
    name: "Juan Marcos Castro",
    title: "Data Scientist & ML Engineer",
    bio: "Científico de datos especializado en machine learning e IA",
    avatar: "/juanmarcos-portafolio.jpg",
    carouselImages: [
      {
        url: "/juanmarcos-portafolio.jpg",
        caption: "Mi perfil profesional",
      },
      {
        url: "/machine-learning-models.png",
        caption: "Modelos de ML",
      },
      {
        url: "/ai-research-lab.png",
        caption: "Investigación en IA",
      },
    ],
    specialties: ["Machine Learning", "Data Science", "Inteligencia Artificial"],
    about: {
      description:
        "Científico de datos con experiencia en desarrollo de modelos de machine learning y análisis predictivo. Me apasiona usar datos para resolver problemas complejos y crear soluciones inteligentes.",
      interests: ["Deep Learning", "NLP", "Computer Vision", "Big Data"],
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "SQL", "Spark"],
      goals: [
        "Publicar papers en conferencias de IA",
        "Desarrollar modelos de IA de impacto social",
        "Crear cursos de machine learning",
      ],
    },
    projects: [
      {
        id: "schoolumg",
        title: "SchoolUMG",
        description:
          "Sistema de gestión académica completo con módulos de alumnos, profesores, calificaciones y reportes estadísticos",
        image: "/schoolumg-project.png",
        technologies: ["React (Vite)", "C#"],
        liveLink: "https://app.schoolumg.com",
      },
      {
        id: "cristo-vive",
        title: "CRISTO VIVE",
        description:
          "Sitio web religioso dedicado a compartir el mensaje de salvación por fe. Incluye versículos bíblicos, recursos espirituales y contenido inspirador para fortalecer la fe cristiana.",
        image: "/cristo-vive-project.png",
        technologies: ["HTML", "CSS"],
        liveLink: "https://polite-bush-095763510.3.azurestaticapps.net/",
      },
      {
        id: "mispelisv2",
        title: "MisPelis",
        description:
          "Aplicación web para gestión de películas favoritas. Permite agregar, editar, eliminar y buscar películas con una interfaz intuitiva y moderna.",
        image: "/mispelisv2-project.png",
        technologies: ["HTML", "CSS", "JavaScript"],
        liveLink: "https://happy-glacier-022d6541e.3.azurestaticapps.net/",
      },
    ],
    contact: {
      email: "jmarcosc@miumg.edu.gt",
      phone: "+502 4293-0034",
      whatsapp: "+50242930034",
      instagram: "juanmarcoscastro",
      github: "juanmarcoscastro",
    },
  },
]

export function getPortfolios(): Portfolio[] {
  return portfolios
}

export function getPortfolioById(id: string): Portfolio | null {
  return portfolios.find((p) => p.id === id) || null
}
