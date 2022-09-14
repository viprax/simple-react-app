import React from "react";
import PropTypes from "prop-types";
import classes from "./modules/Drawer.module.scss";
import backgroundImage from "../img/sneakers/sneakers-1.png";

export const Drawer = ({onClose = () => undefined }) => (

    <div className={`${classes.overlay}`}>
      <div className={classes.drawer}>
        <h2>Корзина
          <img
            onClick={onClose}
            className={classes.drawerClose}
            src="/img/btn-remove.svg"
            alt="Close"/></h2>
        <div className={classes.items}>
          <div className={classes.cartItem}>
            <div style={{backgroundImage: `url(${backgroundImage})`}}
                 className={classes.cartItemImg}/>
            <div className={classes.cartInfo}>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className={classes.removeBtn} src="/img/btn-remove.svg" alt="Remove"/>
          </div>
          <div className={classes.cartItem}>
            <div style={{backgroundImage: `url(${backgroundImage})`}}
                 className={classes.cartItemImg}/>
            <div className={classes.cartInfo}>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className={classes.removeBtn} src="/img/btn-remove.svg" alt="Remove"/>
          </div>
        </div>
        <div className={classes.cartPriceList}>
          <ul>
            <li>
              <span>Итого: </span>
              <div/>
              <b>21 498 руб. </b>
            </li>
            <li>
              <span>Налог 5%: </span>
              <div/>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button type="button" className={classes.confirmButton}>Оформить заказ <img src="/img/arrow.svg" alt="arrow"/>
          </button>
        </div>
      </div>
    </div>
  );

Drawer.propTypes = {
  onClose: PropTypes.func
}