import Calc from "../../components/calc";
import Footer from "../../components/footer";
import Header from "../../components/header";

//calculator page
export default function calculator({setTheme}) {
  return (
    <>
      <main className="main_section">
        <Header setTheme={setTheme}/>
        <Calc />
        <Footer />
      </main>
    </>
  );
}
