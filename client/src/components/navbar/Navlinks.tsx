"use client";

// next
import Link from "next/link";
import "./nav.css";

import { usePathname } from "next/navigation";

const Navlinks = ({ hamburger }: any) => {
  const pathName = usePathname();

  return (
    <ul className="navbar-links">
      <li className={`listItem `}>
        <Link className={pathName === "/" ? "active" : ""} href="/">
          Home
        </Link>
      </li>
      <li className="listItem">
        <Link
          className={pathName === "/first-gen" ? "active" : ""}
          href="/first-gen"
        >
          Original
        </Link>
      </li>
      <li className="listItem">
        <Link
          className={pathName === "/second-gen" ? "active" : ""}
          href="/second-gen"
        >
          Second Gen
        </Link>
      </li>
      <li className="listItem">
        <Link
          className={pathName === "/third-gen" ? "active" : ""}
          href="/third-gen"
        >
          Third Gen
        </Link>
      </li>
    </ul>
  );
};

export default Navlinks;
