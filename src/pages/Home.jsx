import React from "react";
import PropTypes from "prop-types";
import { Card } from "../components/Card";

export const Home = ({
  items = [],
  searchValue = "",
  setSearchValue = () => undefined,
  handleChangeSearchInput = () => undefined,
  onAddToCart = () => undefined,
  onAddToWishList = () => undefined,
}) => (
  <div>
    <div className="content">
      <div className="contentInfo">
        <h1 className="contentTitle">
          {searchValue ? `Вы ищете: "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className="search-block">
          <img src="/img/search.svg" alt="Search" />
          {searchValue && (
            <button type="button" onClick={() => setSearchValue("")}>
              <img className="clear" src="/img/btn-remove.svg" alt="close" />
            </button>
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

Home.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      imgUrl: PropTypes.string,
      price: PropTypes.number,
    }),
  ),
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func,
  handleChangeSearchInput: PropTypes.func,
  onAddToCart: PropTypes.func,
  onAddToWishList: PropTypes.func,
};
