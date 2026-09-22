import "./App.css";
import Header from "../components/Header/Header";
import Placeholder from "../components/Placeholder/Placeholder";
import Menu from "../components/Menu/Menu";




const data = [
  { title: "Smiling Face", emoji: "🙂", code: "U+1F642" },
  { title: "Rocket", emoji: "🚀", code: "U+1F680" },
  { title: "Fire", emoji: "🔥", code: "U+1F525" },
  { title: "Party", emoji: "🥳", code: "U+1F973" },
];

export default function App() {
  return (
    <div className="page">
      <Header />
      <Placeholder/>

      <main className="container main">
        <Menu/>
      </main>
    </div>
  );
}