const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
      "TailwindCSS",
      "Vue.js",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "REST API",
      "GraphQL",
      "Authentication",
    ],
  },
  {
    title: "Инструменты",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "Webpack",
      "Vite",
      "Docker",
      "AWS",
    ],
  },
  {
    title: "Другое",
    skills: [
      "UI/UX Design",
      "Responsive Web Design",
      "Performance Optimization",
      "SEO",
      "Agile/Scrum",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills">
      <div className="skills-container">
        <h2 className="section-title">Технологии и Навыки</h2>
        <p className="section-subtitle">
          Инструменты и технологии, с которыми я работаю
        </p>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
