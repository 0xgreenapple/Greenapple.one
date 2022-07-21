import Head from 'next/head'
import ThemeChanger from "../components/themechanger";

import Landing from '../components/Landing'

export default function Home() {
  return (
    <section>
      <Head>
        <title>green apple</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </section>
  );
}
