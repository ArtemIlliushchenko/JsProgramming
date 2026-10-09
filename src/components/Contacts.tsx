import { contacts } from '../data/resume';
import styles from './Contacts.module.css';

const items = [
  { key: 'Email', ...contacts.email },
  { key: 'Phone', ...contacts.phone },
  { key: 'Telegram', ...contacts.telegram },
  { key: 'LinkedIn', ...contacts.linkedin },
  { key: 'GitHub', ...contacts.github },
];

export default function Contacts() {
  return (
    <section id="contacts" className="section">
      <div className={`container ${styles.layout}`}>
        <div>
          <p className="eyebrow">// 04 — contacts</p>
          <h2 className={styles.title}>
            Let&apos;s build something
            <br />
            <span>together.</span>
          </h2>
          <p className={styles.text}>
            Open to junior fullstack and frontend roles, internships and team projects. Based in Kyiv, Ukraine — happy
            to work remotely.
          </p>
        </div>

        <ul className={styles.list}>
          {items.map((c) => {
            const external = c.href.startsWith('http');
            return (
              <li key={c.key}>
                <a href={c.href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
                  <span className={styles.key}>{c.key}</span>
                  <span className={styles.value}>{c.label}</span>
                  <span className={styles.arrow} aria-hidden="true">
                    ↗
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
