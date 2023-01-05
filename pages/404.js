import Head from "next/head";
import Link from "next/link";

import Landing from "../components/Landing";
import Draggable from "react-draggable";
import Header from "../components/header";
import Footer from "../components/footer";

// called when a page not found
export default function custom404({setTheme}) {
  return (
    <main className="main_section">
      <Header setTheme = {setTheme} />
      <div className="meta_section">
        <div className="container">
          <div className="main404">
            <Draggable>
              <h1 className="404">404</h1>
            </Draggable>
            <div className="buttons">
              <Link className="footbtm" href="/" passHref>
                home
              </Link>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  );
}
