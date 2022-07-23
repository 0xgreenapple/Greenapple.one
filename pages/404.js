import Head from "next/head";
import Link from "next/link";

import Landing from "../components/Landing";
export default function custom404() {
  return (
    <section>
      <div className="mian">
        <div className="container">
          <div className="main404">
            <h1 className="404">SUS</h1>
            <div className="buttons">
              <Link href="/">
                <a className="footbtm">home</a>
              </Link>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
