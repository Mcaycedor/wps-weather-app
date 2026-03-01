import styles from "./SkylineFooter.module.css";

export default function SkylineFooter() {
  return (
    <footer className={styles.footer}>
      {/* Skyline layer */}
      <div className={styles.skyline} aria-hidden="true">
        <span className={styles.b1} />
        <span className={styles.b2} />
        <span className={styles.b3} />
        <span className={styles.b4} />
        <span className={styles.b5} />
        <span className={styles.b6} />
        <span className={styles.b7} />
        <span className={styles.b8} />
        <span className={styles.b9} />
        <span className={styles.b10} />
      </div>

      {/* Footer content */}
      <div className={styles.content}>
        <p>© {new Date().getFullYear()} Our Site. Humans did this.</p>
        <p>Monica 6397990, Ma Felisa 2129097, Reginaldo 6407255, Kevin 6398113</p>
      </div>
    </footer>
  );
}