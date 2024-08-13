// components
import Navigation from "./Navigation";
import MobileNavigation from "./mobileNav/MobileNavigation";

//css
import "./nav.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <Navigation />
      <MobileNavigation />
    </nav>
  );
};

export default Navbar;
