/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
import PropTypes from "prop-types";
import classes from "./modules/Card.module.scss";

export const Card = ({
  title = "Title",
  price = 0,
  imgUrl = "https://via.placeholder.com/50",
  onPlus = () => undefined,
  onFavourite = () => undefined,
}) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const handleClickAdd = () => {
    onPlus({ title, price, imgUrl });
    setIsAdded(!isAdded);
  };
  const handleClickFavourite = () => {
    onFavourite({ title, price, imgUrl });
    setIsFavourite(!isFavourite);
  };
  return (
    <div className={classes.card}>
      <img
        className={classes.cardFavourite}
        onClick={handleClickFavourite}
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
          onClick={handleClickAdd}
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
  onPlus: PropTypes.func,
  onFavourite: PropTypes.func,
};
