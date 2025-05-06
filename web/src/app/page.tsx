import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.logo}>
      <h1>🏅EduBadge🏅</h1>
      </div>
      <div className={styles.username}>
      <input type="text" id="login" />
      </div>
      <div className={styles.login}>
         <button>Login</button>
      </div>
    </div>
  );
}
