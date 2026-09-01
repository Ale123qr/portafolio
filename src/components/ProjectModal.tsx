import { useEffect } from "react";
import { useI18n } from "../i18n";
import type { Project } from "../i18n/translations";

interface Props {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: Props) {
  const { t } = useI18n();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div
        className={`modal modal--${project.accent}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
          aria-label={t.projects.close}
        >
          ×
        </button>

        <header className="modal__header">
          <span className="modal__icon">{project.icon}</span>
          <div>
            <h3 id="modal-title" className="modal__title">
              {project.name}
            </h3>
            <p className="modal__tagline">{project.tagline}</p>
          </div>
        </header>

        <div className="modal__body">
          <section className="modal__section">
            <h4>{t.projects.problem}</h4>
            <p>{project.problem}</p>
          </section>

          <section className="modal__section">
            <h4>{t.projects.solution}</h4>
            <p>{project.solution}</p>
          </section>

          <section className="modal__section">
            <h4>{t.projects.role}</h4>
            <p>{project.role}</p>
          </section>

          <section className="modal__section">
            <h4>{t.projects.highlights}</h4>
            <ul className="modal__highlights">
              {project.highlights.map((h) => (
                <li key={h.title}>
                  <strong>{h.title}</strong>
                  <span>{h.description}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="modal__section">
            <h4>{t.projects.architecture}</h4>
            <ul className="modal__list">
              {project.architecture.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </section>

          <section className="modal__section">
            <h4>{t.projects.stack}</h4>
            <div className="modal__tags">
              {project.stack.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section className="modal__section modal__section--learnings">
            <h4>{t.projects.learnings}</h4>
            <p>{project.learnings}</p>
          </section>

          {project.images.length > 0 && (
            <section className="modal__section modal__section--gallery">
              <h4>{t.projects.gallery}</h4>
              <div className="modal__gallery">
                {project.images.map((img) => (
                  <figure key={img.src} className="modal__figure">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="modal__image"
                      loading="lazy"
                    />
                    <figcaption className="modal__caption">
                      {img.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
