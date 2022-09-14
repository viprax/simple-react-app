/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
import PropTypes from "prop-types";
import classes from "./modules/Card.module.scss";


const [isAdded, setIsAdded] = useState(false)

export const Card = (props) => (

  <div className={classes.card}>
    <button
      type="button"
      className={classes.cardFavourite}
      onClick={props.handleCLickFavourite}
    >
      <img src="/img/heart-default.svg" alt="Add to favourite"/>
    </button>
    <img src={props.imgUrl} alt="Sneakers" width={133} height={112}/>
    <h5>{props.title}</h5>
    <div className={classes.cardBottom}>
      <div className={classes.cardInfo}>
          <p>Цена: </p>
          <b>{props.price} руб.</b>
      </div>
      <button
      type="button"
      className={classes.plus}
      onClick={() => setIsAdded(!isAdded)}
      ><img src={isAdded ? "/img/btn-unchecked.svg" : "/img/btn-checked.svg"} alt="Add to cart"/></button>
    </div>
  </div>
);

Card.defaultProps = {
  title: 'Title',
  imgUrl: 'https://via.placeholder.com/50',
  price: null,
  handleCLickAdd: null,
  handleCLickFavourite: null
}

Card.propTypes = {
  title: PropTypes.string,
  imgUrl: PropTypes.string,
  price: PropTypes.number,
  handleCLickAdd: PropTypes.func,
  handleCLickFavourite: PropTypes.func
};