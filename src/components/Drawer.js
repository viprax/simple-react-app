import React from "react";
import backgroundImage from "../img/sneakers/sneakers-1.png";

export const Drawer = () => (
        <div  className="overlay">
            <div className="drawer">
                <h2>Корзина <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/></h2>
                <div className="items">
                    <div className="cartItem">
                        <div style={{backgroundImage: `url(${backgroundImage})`}}
                             className="cartItemImg" />
                        <div className="cartInfo">
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
                    </div>
                    <div className="cartItem">
                        <div style={{backgroundImage: `url(${backgroundImage})`}}
                             className="cartItemImg" />
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
                            <div />
                            <b>21 498 руб. </b>
                        </li>
                        <li>
                            <span>Налог 5%: </span>
                            <div />
                            <b>1074 руб. </b>
                        </li>
                    </ul>
                    <button type="button" className="confirmButton">Оформить заказ <img src="/img/arrow.svg" alt="arrow"/></button>
                </div>
            </div>
        </div>
    )