import styles from "./Card.module.css";

type CardProps = {
  title: string;
  emoji: string;
  code: string;
};

export default function Card({ title, emoji, code }: CardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.emoji}>{emoji}</div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.code}>{code}</p>
      </div>
    </article>
  );
}