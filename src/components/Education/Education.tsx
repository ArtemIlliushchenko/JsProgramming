import { education, languages } from '../../data/resume';
import styles from './Education.module.css';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <p className="eyebrow">// 03 — education &amp; languages</p>
        <h2 className="section-title">Education</h2>

        <div className={styles.layout}>
          <ol className={styles.timeline}>
            {education.map((e) => (
              <li key={e.place} className={styles.item}>
                <span className={styles.period}>{e.period}</span>
                <h3 className={styles.place}>{e.place}</h3>
                <p className={styles.program}>{e.program}</p>
              </li>
            ))}
          </ol>

          <div className={styles.languages}>
            <h3 className={styles.langTitle}>Languages</h3>
            <ul>
              {languages.map((l) => (
                <li key={l.name} className={styles.lang}>
                  <div className={styles.langRow}>
                    <span>{l.name}</span>
                    <span className={styles.level}>{l.level}</span>
                  </div>
                  <div className={styles.bar} aria-hidden="true">
                    <span style={{ width: `${l.value}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
