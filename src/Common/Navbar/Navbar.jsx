import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div>
        <span className={style.logo_left}>Food</span>
        <span className={style.logo_right}>Cart</span>
      </div>

      <div>
        <ul className={style.menu_bar}>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/reviews"}>
            <li>Reviews</li>
          </Link>
          <Link to={"/cart"}>
            <li>Cart</li>
          </Link>
        </ul>
      </div>

      <div className={style.right_menu_bar}>
        <Link to={'/signup'} >
          <button className={style.signupBtn} id="signupBtn">
            Sign up
          </button>
        </Link >

        <Link  to={'/login'} >
          <button className={style.signupBtn} id="LoginBtn">
            Log in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
