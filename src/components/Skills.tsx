import { hardSkills, softSkills } from '../data/resume';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="eyebrow">// 02 — skills</p>
        <h2 className="section-title">Tech stack &amp; strengths</h2>

        <div className={styles.layout}>
          <div className={styles.hard}>
            {hardSkills.map((g) => (
              <div key={g.group} className={styles.group}>
                <h3 className={styles.groupTitle}>{g.group}</h3>
                <ul className={styles.items}>
                  {g.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <aside className={styles.soft}>
            <h3 className={styles.softTitle}>Soft skills</h3>
            <ul>
              {softSkills.map((s, i) => (
                <li key={s}>
                  <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
                  {s}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
