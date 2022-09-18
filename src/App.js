import React, { useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Drawer } from "./components/Drawer";
import { Home } from "./pages/Home";
import { Favourites } from "./pages/Favourites";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [isCartOpened, setIsCartOpened] = useState(false);
  const [wishList, setWishList] = useState([]);
  React.useEffect(() => {
    axios
      .get("https://6322075efd698dfa29059061.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://6322075efd698dfa29059061.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
    axios
      .get("https://6322075efd698dfa29059061.mockapi.io/favourites")
      .then((res) => {
        setWishList(res.data);
      });
  }, []);

  const onAddToCart = (product) => {
    axios
      .post("https://6322075efd698dfa29059061.mockapi.io/cart", product)
      .then((r) => console.log(`${r} get`));
    setCartItems((prev) => [...prev, product]);
  };

  const onAddToWishList = (obj) => {
    axios.post("https://6322075efd698dfa29059061.mockapi.io/wishlist", obj);
    setWishList((prevState) => [...prevState, obj]);
  };

  const handleRemoveFromCart = (id) => {
    axios.delete(`https://6322075efd698dfa29059061.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="wrapper clear">
      {isCartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setIsCartOpened(false)}
          onRemove={handleRemoveFromCart}
        />
      )}
      <Header onCartOpen={() => setIsCartOpened(true)} />
      <Routes>
        <Route path="/" exact>
          <Home
            items={items}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            handleChangeSearchInput={handleChangeSearchInput}
            onAddToCart={onAddToCart}
            onAddToWishList={onAddToWishList}
          />
        </Route>
        <Route path="/favourites" exact>
          <Favourites items={wishList} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
