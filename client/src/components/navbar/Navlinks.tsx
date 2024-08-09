// next
import Link from "next/link";
import "./nav.css";

const Navlinks = ({ hamburger }: any) => {
  return (
    <ul className="nav">
      <li className="listItem">
        <Link href="/">Home</Link>
      </li>
      <li className="listItem">
        <Link href="/first-gen">Original</Link>
      </li>
      <li className="listItem">
        <Link href="/second-gen">Second Gen</Link>
      </li>
      <li className="listItem">
        <Link href="/third-gen">Third Gen</Link>
      </li>
    </ul>
  );
};

export default Navlinks;
