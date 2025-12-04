import { ArrowRight } from "./icons";

export function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Привет, я <span className="highlight">Веб-разработчик</span>
        </h1>
        <p className="hero-description">
          Создаю современные веб-приложения с фокусом на пользовательский опыт и
          производительность
        </p>
        <div className="hero-buttons">
          <a href="#skills" className="button button-primary">
            Посмотреть проекты
            <ArrowRight className="icon" />
          </a>
          <a href="#about" className="button button-outline">
            Обо мне
          </a>
        </div>
      </div>
    </section>
  );
}
