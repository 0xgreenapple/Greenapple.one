import Head from "next/head";
import Link from "next/link";

import Landing from "../components/Landing";
import Draggable from "react-draggable";
export default function test() {
    function verifylicencekey(){
        
    }
  return (
    <section>
      <div className="mian">
        <div className="container">
          <input className="input" />
          <a onClick={() => {
            verifylicencekey();
          }}>
            verify</a>
        </div>
      </div>
    </section>
  );
}
