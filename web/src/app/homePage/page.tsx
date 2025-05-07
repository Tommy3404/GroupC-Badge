import styles from "./homePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.h1}>
      <h1>Edu Badge</h1>
      <hr className={styles.line} />

      <div className={styles.sectionContainer}>
        <div className={styles.names}>
          <h2>Names</h2>
        </div>

        <div className={styles.badges}>
          <h2>Badges</h2>
        </div>

        <div className={styles.challenges}>
          <h2>Challenges</h2>
        </div>
      </div>
    </div>
  );
}
