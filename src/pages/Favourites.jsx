import React from "react";
import { Card } from "../components/Card";

export const Favourites = (items) => (
  <div>
    <div className="content">
      <div className="contentInfo">
        <h1 className="contentTitle">Мои закладки</h1>
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
