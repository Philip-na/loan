import "./nav.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  
  const links = [
    {
      title: "Home",
      url: "/home",
    },
    {
      title: "Get Loan",
      url: "/",
    },
    {
      title: "MY Loan",
      url: "/loan",
    },

    {
      title: "Services",
      url: "/services",
    },
    {
      title: "Contact Us",
      url: "/contact-us",
    },
  ];

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <header>
      <nav className="inner-width">
        <ul className="nav-links">
          {links.map((link) => (
            <li>
              <NavLink key={link.url} to={link.url} >
                {link.title}
              </NavLink>
            </li>
          ))}
          <li key='endBtn' className="end">
            <button onClick={logout} className="login-button" href="#">
              Logout
            </button>
          </li>
        
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
