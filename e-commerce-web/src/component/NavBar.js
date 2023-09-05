import { Link } from "react-router-dom";
import React from "react";
import { ShoppingCart } from "phosphor-react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
