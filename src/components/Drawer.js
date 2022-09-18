import React from "react";
import PropTypes from "prop-types";
import classes from "./modules/Drawer.module.scss";

export const Drawer = ({
  onClose = () => undefined,
  items = [],
  onRemove = () => undefined,
}) => (
  <div className={`${classes.overlay}`}>
    <div className={classes.drawer}>
      <h2>
        Корзина
        <button type="button" onClick={onClose}>
          <img
            className={classes.drawerClose}
            src="/img/btn-remove.svg"
            alt="Close"
          />
        </button>
      </h2>

      {items.length > 0 ? (
        <div>
          <div className={classes.items}>
            {items.map((obj) => (
              <div className={classes.cartItem}>
                <div
                  style={{ backgroundImage: `url(${obj.imgUrl})` }}
                  className={classes.cartItemImg}
                />
                <div className={classes.cartInfo}>
                  <p>{obj.title}</p>
                  <b>{obj.price} руб.</b>
                </div>
                <button type="button" onClick={() => onRemove(obj.id)}>
                  <img
                    className={classes.removeBtn}
                    src="/img/btn-remove.svg"
                    alt="Remove"
                  />
                </button>

              </div>
            ))}
          </div>
          <div className={classes.cartPriceList}>
            <ul>
              <li>
                <span>Итого: </span>
                <div />
                <b>21 498 руб. </b>
              </li>
              <li>
                <span>Налог 5%: </span>
                <div />
                <b>1074 руб. </b>
              </li>
            </ul>
            <button type="button" className={classes.confirmButton}>
              Оформить заказ <img src="/img/arrow.svg" alt="arrow" />
            </button>
          </div>
        </div>
      ) : (
        <div className={classes.cartEmpty}>
          <img src="/img/empty-box.png" alt="Your cart is empty" />
          <h2>Корзина пустая</h2>
          <p>Добавьте хотя бы одну пару кроссовок, что бы сделать заказ.</p>
          <button
            onClick={onClose}
            type="button"
            className={classes.confirmButton}
          >
            <img src="/img/arrow.svg" alt="Arrow" />
            Вернуться назад
          </button>
        </div>
      )}
    </div>
  </div>
);

Drawer.propTypes = {
  onClose: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    imgUrl: PropTypes.string,
    price: PropTypes.number,
  })),
  onRemove: PropTypes.func,
};
