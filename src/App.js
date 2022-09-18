import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Drawer } from "./components/Drawer";
import { Home } from "./pages/Home";
import { Favourites } from "./pages/Favourites";
import { addToCart, getCartItems, getItems, getWishList } from "./api";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isCartOpened, setIsCartOpened] = useState(false);
  const [wishList, setWishList] = useState([]);
  useEffect(() => {
    getItems().then((res) => {
      setItems(res.data);
    });
    getCartItems().then((res) => {
      setCartItems(res.data);
    });
    getWishList().then((res) => {
      setWishList(res.data);
    });
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product).then((r) => console.log(`${r} get`));
    setCartItems((prev) => [...prev, product]);
  };

  const handleSidebarOpen = () => {
    setIsCartOpened(true);
    document.body.style.overflow = "hidden";
  };
  const handleSidebarClose = () => {
    setIsCartOpened(false);
    document.body.style.overflow = "auto";
  };

  const onAddToWishList = (obj) => {
    axios
      .post("https://6322075efd698dfa29059061.mockapi.io/wishlist", obj)
      .then();
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
          onClose={handleSidebarClose}
          onRemove={handleRemoveFromCart}
        />
      )}
      <Header onCartOpen={handleSidebarOpen} />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              handleChangeSearchInput={handleChangeSearchInput}
              onAddToCart={handleAddToCart}
              onAddToWishList={onAddToWishList}
            />
          }
        />
        <Route
          path="/favourites"
          exact
          element={<Favourites items={wishList} />}
        />
      </Routes>
    </div>
  );
}

export default App;
