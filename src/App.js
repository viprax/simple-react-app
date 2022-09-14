import React from 'react';

import { Card } from './components/Card';
import { Header } from './components/Header';
import { Drawer } from './components/Drawer';

 const cards = [
   { title: 'Мужские кроссовки Nike Blazer Mid Suede',
     price: 12999,
     imgUrl: "/img/sneakers/sneakers-1.png"},

   { title: 'Мужские Кроссовки Nike Air Max 270',
     price: 12999,
     imgUrl: "/img/sneakers/sneakers-2.png"}
 ]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content">
        <div className="contentInfo">
          <h1 className="contentTitle">Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск ... " type="text" />
          </div>
        </div>
      </div>
      <div className="sneakers">
        {
          cards.map((obj) => (
            <Card
              title={obj.title}
              imgUrl={obj.imgUrl}
              price={obj.price}
              handleCLickAdd={() => console.log("Added to card")}
              handleCLickFavourite={() => console.log("Added to favourite")}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
