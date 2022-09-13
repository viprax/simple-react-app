function App() {
  return (
    <div className="wrapper clear">
      <header>
          <div className='headerLeft'>
              <img src="/img/logo.png" height={40} width={40}/>
              <div>
                  <h3>React sneakers</h3>
                  <p>Магазин лучших кроссовок</p>
              </div>
          </div>
          <div>
              <ul className="headerRight">
                  <li>
                      <img src="/img/cart.svg" width={18} height={18}/>
                      <span>1205руб.</span>
                  </li>
                  <li>
                      <img src="/img/user.svg" width={18} height={18}/>
                  </li>
              </ul>
          </div>
      </header>
        <div className="content">
            <h1>Все кроссовки</h1>
        </div>
        <div className="sneakers">
            <div className="card">
                <img src="/img/sneakers/sneakers-1.png" width={133} height={112}/>
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
                <img src="/img/sneakers/sneakers-2.png" width={133} height={112}/>
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
                <img src="/img/sneakers/sneakers-3.png" width={133} height={112}/>
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
