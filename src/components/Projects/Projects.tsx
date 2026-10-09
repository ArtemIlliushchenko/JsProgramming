import { useState } from 'react';
import { projects, type Project } from '../../data/resume';
import styles from './Projects.module.css';

type Tab = 'frontend' | 'backend';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [tab, setTab] = useState<Tab>('frontend');
  const items = project[tab];

  return (
    <article className={styles.card}>
      <div className={styles.meta}>
        <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
        <span className={styles.codename}>{project.codename}</span>
      </div>

      <div className={styles.body}>
        <div className={styles.intro}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.role}>{project.role}</p>
          <p className={styles.description}>{project.description}</p>

          <ul className={styles.links}>
            {project.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label} <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.details}>
          <div className={styles.tabs} role="tablist" aria-label={`${project.title} work areas`}>
            {(['frontend', 'backend'] as const).map((t) => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={tab === t}
                className={`${styles.tab} ${tab === t ? styles.active : ''}`}
                onClick={() => setTab(t)}
              >
                {t === 'frontend' ? 'Frontend' : 'Backend'}
              </button>
            ))}
          </div>

          <ul className={styles.list} role="tabpanel">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <ul className={styles.stack}>
            {project.stack.map((s) => (
              <li key={s} className="chip">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="eyebrow">// 01 — project experience</p>
        <h2 className="section-title">Selected projects</h2>
        <div className={styles.grid}>
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
