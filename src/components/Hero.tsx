import { contacts, profile } from '../data/resume';
import styles from './Hero.module.css';

const avatar = `${import.meta.env.BASE_URL}avatar.jpg`;

const stats = [
  { value: '2', label: 'full-stack projects' },
  { value: 'MERN', label: '+ Next.js' },
  { value: 'Agile', label: 'team experience' },
];

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.text}>
          <p className={styles.status}>
            <span className={styles.dot} aria-hidden="true" />
            Open to work · {profile.location}
          </p>
          <h1 className={styles.name}>
            Artem
            <br />
            Illiushchenko
          </h1>
          <p className={styles.role}>
            <span className={styles.prompt}>$</span> {profile.role.toLowerCase()}
            <span className={styles.caret} aria-hidden="true" />
          </p>
          <p className={styles.summary}>{profile.summary}</p>

          <div className={styles.actions}>
            <a className={styles.primary} href="#projects">
              View projects
            </a>
            <a className={styles.secondary} href={contacts.github.href} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
        </div>

        <div className={styles.side}>
          <div className={styles.photoWrap}>
            <img className={styles.photo} src={avatar} alt="Artem Illiushchenko" width={250} height={250} />
          </div>
          <ul className={styles.stats}>
            {stats.map((s) => (
              <li key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
