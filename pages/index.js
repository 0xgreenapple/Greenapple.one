import Head from 'next/head';
import Landing from "../components/Landing";
import Footer from "../components/footer";

//main page
export default function Home() {
  return (
    <section>
      <Landing />
      <Footer />
    </section>
  );
}
