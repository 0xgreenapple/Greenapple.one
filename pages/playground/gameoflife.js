import GameOfLife from "../../components/gameoflife";
import Footer from "../../components/footer";
import Header from "../../components/header";


export default function gameoflife({setTheme}) {
  return (
    <main className="main_section">
      <Header setTheme={setTheme} />
      <GameOfLife />
      <Footer />
    </main>
  );
}
