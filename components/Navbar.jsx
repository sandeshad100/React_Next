"use client"

import Link from "next/link";
import {useRouter} from "next/navigation"


const Navbar = () => {
    const router = useRouter();
  return (
    <nav>
      <div className="logo">
        <h1>Logo</h1>
      </div>

      <div className="link-container">
        <Link className="link" href="/">
          Home
        </Link>
        {/* <Link className="link" href="/about">
          About
        </Link> */}
        <Link className="link" href="/portfolio">
          Portfolio
        </Link>
      </div>

      {/* <button className="border px-2 py-4" onClick={() => router.push("about")}>Go to about - useRouter</button> */}
    </nav>
  );
}

export default Navbar