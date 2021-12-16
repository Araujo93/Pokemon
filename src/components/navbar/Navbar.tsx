import MobileNavigation from "./mobileNav/MobileNavigation";
import "./nav.css";
import Navigation from "./Navigation";

const Navbar = () => {
  return (
    <nav className="menu">
      <Navigation />
      <MobileNavigation />
    </nav>
  );
};

export default Navbar;
