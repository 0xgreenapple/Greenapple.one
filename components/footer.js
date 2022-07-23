import Link from "next/link";

export default function footer(){
    return (
       
      <div className="buttons">
        <Link href="/">
          <a className="footbtm">home</a>
        </Link>
        <Link href="/playground">
          <a className="playground">playground</a>
        </Link>
      </div>
    );
}