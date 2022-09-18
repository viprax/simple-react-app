import React from "react";
import { Card } from "../components/Card";

export const Home = (
  items,
  searchValue,
  setSearchValue,
  handleChangeSearchInput,
  onAddToCart,
  onAddToWishList,
) => (
  <div>
    <div className="content">
      <div className="contentInfo">
        <h1 className="contentTitle">
          {searchValue ? `Вы ищете: "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className="search-block">
          <img src="/img/search.svg" alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear"
              src="/img/btn-remove.svg"
              alt="close"
            />
          )}
          <input
            onChange={handleChangeSearchInput}
            value={searchValue}
            placeholder="Поиск ... "
            type="text"
          />
        </div>
      </div>
    </div>
    <div className="sneakers">
      {items
        .filter((item) =>
          item.title.toLowerCase().includes(searchValue.toLowerCase()),
        )
        .map((obj) => (
          <Card
            id={obj.id}
            title={obj.title}
            imgUrl={obj.imgUrl}
            price={obj.price}
            onPlus={(product) => {
              onAddToCart(product);
            }}
            onFavourite={(wishListItem) => {
              onAddToWishList(wishListItem);
            }}
          />
        ))}
    </div>
  </div>
);
