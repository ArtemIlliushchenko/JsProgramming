import { useEffect, useState } from 'react';
import styles from './Header.module.css';

const nav = [
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contacts', label: 'Contacts' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.logo} onClick={() => setOpen(false)}>
          <span className={styles.bracket}>&lt;</span>AI<span className={styles.bracket}> /&gt;</span>
        </a>

        <button
          type="button"
          className={styles.burger}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>

        <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className={styles.cta} href="mailto:artemillushchenko30@gmail.com">
            Hire me
          </a>
        </nav>
      </div>
    </header>
  );
}
