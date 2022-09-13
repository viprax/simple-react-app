import React from "react";

export const Header = () => {
    return(
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
    )
}