import "./nav.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const links = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Loan",
      url: "loan",
    },

    {
      title: "Services",
      url: "services",
    },
    {
      title: "Contact Us",
      url: "contact-us",
    },
  ];
  return (
    <header>
      <nav className="inner-width">
        <ul class="nav-links">
          {links.map((link) => (
            <li>
              <NavLink to={link.url} activeClassName="active">
                {link.title}
              </NavLink>
            </li>
          ))}
          <li className="end">
            <button class="login-button" href="#">
              Logout
            </button>
          </li>
        
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
