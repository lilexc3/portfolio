import { Github, Linkedin, Mail, Twitter } from "./icons";

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Свяжитесь со мной</h3>
            <p className="text-muted-foreground">
              Открыт для новых проектов и сотрудничества
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="mailto:your.email@example.com"
              aria-label="Email"
              className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Все права защищены</p>
        </div>
      </div>
    </footer>
  );
}
