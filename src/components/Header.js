import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classes from "./modules/Header.module.scss";

export const Header = ({ onCartOpen = () => undefined }) => (
  <header>
    <Link to="/">
      <div className={classes.headerLeft}>
        <img src="/img/logo.png" alt="Logo" height={40} width={40} />
        <div>
          <h3>React sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
    </Link>
    <div>
      <ul className={classes.headerRight}>
        <li onClick={onCartOpen} className={classes.headerCart}>
          <img src="/img/cart.svg" alt="Cart" width={18} height={18} />
          <span>1205руб.</span>
        </li>
        <li className={classes.headerWishlist}>
          <Link to="/favourites">
            <img
              src="/img/wishlist.svg"
              alt="Wishlist"
              width={18}
              height={18}
            />
          </Link>
        </li>
        <li>
          <img src="/img/user.svg" alt="Log in" width={18} height={18} />
        </li>
      </ul>
    </div>
  </header>
);

Header.propTypes = {
  onCartOpen: PropTypes.func,
};
