import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span>© {new Date().getFullYear()} Artem Illiushchenko</span>
        <span className={styles.made}>Built with React + TypeScript</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
