import React from "react";
import backgroundImage from "../src/img/sneakers/sneakers-1.png";

function App() {
  return (
    <div className="wrapper clear">
    <div className="overlay">
        <div className="drawer">
            <h2>Корзина <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/></h2>
            <div className="items">
                <div className="cartItem">
                    <div style={{backgroundImage: `url(${backgroundImage})`}}
                         className="cartItemImg">
                    </div>
                    <div className="cartInfo">
                        <p>Мужские Кроссовки Nike Air Max 270</p>
                        <b>12 999 руб.</b>
                    </div>
                    <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
                </div>
                <div className="cartItem">
                    <div style={{backgroundImage: `url(${backgroundImage})`}}
                         className="cartItemImg">
                    </div>
                    <div className="cartInfo">
                        <p>Мужские Кроссовки Nike Air Max 270</p>
                        <b>12 999 руб.</b>
                    </div>
                    <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
                </div>
            </div>
            <div className="cartPriceList">
                <ul>
                    <li>
                        <span>Итого: </span>
                        <div></div>
                        <b>21 498 руб. </b>
                    </li>
                    <li>
                        <span>Налог 5%: </span>
                        <div></div>
                        <b>1074 руб. </b>
                    </li>
                </ul>
                <button className="confirmButton">Оформить заказ <img src="/img/arrow.svg" alt="arrow"/> </button>
            </div>
        </div>
    </div>
      <header>
          <div className='headerLeft'>
              <img src="/img/logo.png" alt="Logo" height={40} width={40}/>
              <div>
                  <h3>React sneakers</h3>
                  <p>Магазин лучших кроссовок</p>
              </div>
          </div>
          <div>
              <ul className="headerRight">
                  <li>
                      <img src="/img/cart.svg" alt="Cart" width={18} height={18}/>
                      <span>1205руб.</span>
                  </li>
                  <li>
                      <img src="/img/user.svg" alt="Log in" width={18} height={18}/>
                  </li>
              </ul>
          </div>
      </header>
        <div className="content">
            <div className="contentInfo">
                <h1 className="contentTitle">Все кроссовки</h1>
                <div className="search-block">
                    <img src="/img/search.svg" alt="Search"/>
                    <input placeholder="Поиск ... " type="text"/>
                </div>
            </div>
        </div>
        <div className="sneakers">
            <div className="card">
                <div className="cardFavourite">
                    <img src="/img/heart-default.svg" alt="Unliked"/>
                </div>
                <img src="/img/sneakers/sneakers-1.png" alt="Sneakers" width={133} height={112}/>
                <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                <div className="cardBottom">
                    <div className="cardInfo">
                        <p>Цена: </p>
                        <b>12 999 руб.</b>
                    </div>
                    <button className="cardButton">
                        <img src="/img/plus.svg" width={11} height={11}/>
                    </button>
                </div>
            </div>
            <div className="card">
                <img src="/img/sneakers/sneakers-2.png" alt="Sneakers" width={133} height={112}/>
                <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                <div className="cardBottom">
                    <div className="cardInfo">
                        <p>Цена: </p>
                        <b>12 999 руб.</b>
                    </div>
                    <button className="cardButton">
                        <img src="/img/plus.svg" width={11} height={11}/>
                    </button>
                </div>
            </div>
            <div className="card">
                <img src="/img/sneakers/sneakers-3.png" alt="Sneakers" width={133} height={112}/>
                <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                <div className="cardBottom">
                    <div className="cardInfo">
                        <p>Цена: </p>
                        <b>12 999 руб.</b>
                    </div>
                    <button className="cardButton">
                        <img src="/img/plus.svg" width={11} height={11}/>
                    </button>
                </div>
            </div>
        </div>

    </div>
  );
}

export default App;
