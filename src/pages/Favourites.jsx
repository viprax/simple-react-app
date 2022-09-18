import React from "react";
import PropTypes from "prop-types";
import { Card } from "../components/Card";

export const Favourites = ({items = []}) => (
  <div>
    <div className="content">
      <div className="contentInfo">
        <h1 className="contentTitle">Список желаемого</h1>
      </div>
    </div>
    <div className="sneakers">
      {items.map((obj) => (
        <Card
          id={obj.id}
          title={obj.title}
          imgUrl={obj.imgUrl}
          price={obj.price}
        />
      ))}
    </div>
  </div>
);

Favourites.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    imgUrl: PropTypes.string,
    price: PropTypes.number,
  })),

}
