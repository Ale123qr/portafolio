import { useState } from "react";
import { useI18n } from "../i18n";
import type { Project } from "../i18n/translations";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const { t } = useI18n();
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">{t.projects.title}</h2>
          <p className="section__subtitle">{t.projects.subtitle}</p>
        </div>

        <div className="projects__grid">
          {t.projectsData.map((project) => (
            <article
              key={project.id}
              className={`project-card project-card--${project.accent}`}
            >
              <div className="project-card__top">
                <span className="project-card__icon" aria-hidden="true">
                  {project.icon}
                </span>
                <span className="project-card__type">{project.type}</span>
              </div>

              <h3 className="project-card__name">{project.name}</h3>
              <p className="project-card__tagline">{project.tagline}</p>

              <ul className="project-card__stack">
                {project.stack.slice(0, 5).map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              <button
                type="button"
                className="btn btn--outline project-card__btn"
                onClick={() => setSelected(project)}
              >
                {t.projects.viewDetails}
              </button>
            </article>
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
