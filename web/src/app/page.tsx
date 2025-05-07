import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


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
         <Link style={{textDecoration: 'none', color: 'black'}} href="./homePage">Login</Link>
      </div>
    </div>
  );
}
