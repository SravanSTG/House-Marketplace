import { useNavigate, useLocation } from "react-router-dom";
import { FaRegCompass } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineLocalOffer } from "react-icons/md";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route: string) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={() => navigate("/")}>
            <FaRegCompass
              size="36px"
              style={{ color: pathMatchRoute("/") ? "#2c2c2c" : "#8f8f8f" }}
            />
            <p
              className={
                pathMatchRoute("/")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Explore
            </p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/offers")}>
            <MdOutlineLocalOffer
              size="36px"
              style={{
                color: pathMatchRoute("/offers") ? "#2c2c2c" : "#8f8f8f",
              }}
            />
            <p
              className={
                pathMatchRoute("/offers")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Offers
            </p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/profile")}>
            <FaRegUser
              size="36px"
              style={{
                color: pathMatchRoute("/profile") ? "#2c2c2c" : "#8f8f8f",
              }}
            />
            <p
              className={
                pathMatchRoute("/profile")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Profile
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Navbar;
