// src/components/Menu/Menu.tsx
import styles from "./Menu.module.css";
import Card from "../Card/Card";

const menuItems = [
  { title: "Home", emoji: "🏠", code: "MENU-001" },
  { title: "Features", emoji: "✨", code: "MENU-002" },
  { title: "Pricing", emoji: "💰", code: "MENU-003" },
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