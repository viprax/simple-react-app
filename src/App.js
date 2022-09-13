import React from "react";
import backgroundImage from "../src/img/sneakers/sneakers-1.png";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import {Drawer} from "./components/Drawer";

function App() {
  return (
    <div className="wrapper clear">
    <Drawer/>
        <Header/>
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
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  );
}

export default App;
