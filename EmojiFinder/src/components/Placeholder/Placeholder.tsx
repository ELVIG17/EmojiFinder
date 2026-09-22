import styles from "./Placeholder.module.css";

export default function Placeholder() {
  return (
    <form className={styles.form}>
      <input className={styles.input} placeholder="Search emoji..." />
    </form>
  );
}