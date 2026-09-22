import Discription from "../Discription/Discription";
import Headline from "../Headline/Headline";
import Placeholder from "../Placeholder/Placeholder";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Headline/>
      </div>
      <Discription/>
    </header>
  );
}