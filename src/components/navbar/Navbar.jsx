import "./navbar.css";
import { Link } from "react-router-dom";
// import { useContext } from "react";

const Navbar = () => {
  //   const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">my booking</span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
