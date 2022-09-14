/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
import PropTypes from "prop-types";
import classes from "./modules/Card.module.scss";

export const Card = ({
  title = "Title",
  price = null,
  imgUrl = "https://via.placeholder.com/50",
}) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <div className={classes.card}>
      <img
        className={classes.cardFavourite}
        onClick={() => setIsFavourite(!isFavourite)}
        src={isFavourite ? "/img/hear-favourite.svg" : "/img/heart-default.svg"}
        alt="Add to favourite"
      />
      <img src={imgUrl} alt="Sneakers" width={133} height={112} />
      <h5>{title}</h5>
      <div className={classes.cardBottom}>
        <div className={classes.cardInfo}>
          <p>Цена: </p>
          <b>{price} руб.</b>
        </div>
        <img
          onClick={() => setIsAdded(!isAdded)}
          className={classes.plus}
          src={isAdded ? "/img/btn-checked.svg" : "/img/btn-unchecked.svg"}
          alt="Add to cart"
        />
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  imgUrl: PropTypes.string,
  price: PropTypes.number,
};
