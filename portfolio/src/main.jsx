import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills.jsx";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
