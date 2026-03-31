import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <img src="/favicon.ico" alt="Logo" className={styles.logo} />
        <div className={styles.textContainer}>
          <h1>ศูนย์พัฒนาการบริการทางวิชาชีพเภสัชกรรม</h1>
          <p>Center for Professional Development in Pharmacy</p>
        </div>
      </div>

    </header>
  );
}