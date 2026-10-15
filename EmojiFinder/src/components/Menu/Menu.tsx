// src/components/Menu/Menu.tsx
import styles from "./Menu.module.css";
import Card from "../Card/Card";

const menuItems = [
  { title: "100", emoji: "🏠", code: "Hundred, points, symbol, wow, win, perfect, parties" },
  { title: "1234", emoji: "✨", code: "input symbol for numbers symbol" },
  { title: "1234", emoji: "💰", code: "input symbol for numbers symbol" },
];

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.list}>
        {menuItems.map((item) => (
          <li key={item.code} className={styles.item}>
            <Card title={item.title} emoji={item.emoji} code={item.code} />
          </li>
        ))}
      </ul>
    </nav>
  );
}