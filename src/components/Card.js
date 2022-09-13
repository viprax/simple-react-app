import React from "react";

export const Card = ()=> {
    return(
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
    )
}