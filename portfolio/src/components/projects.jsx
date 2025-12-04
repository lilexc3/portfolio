import { ExternalLink, Github } from "./icons";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Полнофункциональная платформа электронной коммерции с корзиной покупок, обработкой платежей и панелью администратора.",
    image: "https://i.imgur.com/U39oUR8.png",
    tags: ["Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://ogbudapc.netlify.app/",
    githubUrl: "https://github.com/lilexc3/OgBuda",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Интуитивное приложение для управления задачами с функциями перетаскивания, совместной работы в реальном времени.",
    image: "https://placehold.co/600x400/1e293b/63b3ed?text=Task+Manager",
    tags: ["React", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Красивая панель управления погодой с прогнозами в реальном времени, интерактивными картами и историческими данными.",
    image: "https://placehold.co/600x400/1e293b/63b3ed?text=Weather+App",
    tags: ["Vue.js", "API Integration"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description:
      "Комплексная аналитическая панель для отслеживания метрик социальных сетей и вовлеченности пользователей.",
    image: "https://placehold.co/600x400/1e293b/63b3ed?text=Analytics",
    tags: ["Next.js", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Portfolio Builder",
    description:
      "Конструктор портфолио с функцией перетаскивания, позволяющий пользователям создавать профессиональные портфолио без кода.",
    image: "https://placehold.co/600x400/1e293b/63b3ed?text=Portfolio+Builder",
    tags: ["React", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description:
      "Мобильное приложение для отслеживания тренировок, питания и целей в фитнесе с социальными функциями.",
    image: "https://placehold.co/600x400/1e293b/63b3ed?text=Fitness+Tracker",
    tags: ["React", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function Projects() {
  return (
    <section id="projects">
      <div className="projects-container">
        <h2 className="section-title">Мои Проекты</h2>
        <p className="section-subtitle">
          Некоторые из проектов, над которыми я работал
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.liveUrl}
                      className="project-link"
                      aria-label="Посмотреть проект"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="project-link"
                      aria-label="GitHub репозиторий"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
