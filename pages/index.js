import Head from 'next/head';
import Landing from "../components/Landing";
import Footer from "../components/footer";
import Header from '../components/header';
//landing page
export default function Home({ setTheme }) {
  return (
    <main className="main_section">
      <Header setTheme={setTheme} />
      <Landing />
      <Footer compacted = {true} />
    </main>
  );
}
