import "./Cart.css";

import React, { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons.jsx";
import { useCart } from "../hooks/useCart.js";

function CartItem({ thumbnail, title, price, quantity, addToCart, revomeCuantity }) {
  return (
    <li>
      <img src={thumbnail} alt="Iphone" />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
      <button onClick={revomeCuantity }>-</button>

        <small>Qty: {quantity === 0 ? 0 : quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
}

export function Cart() {
  const { cart, clearCart, addToCart, revomeCuantity } = useCart();
  const cartCheckboxId = useId();
  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type="checkbox" hidden id={cartCheckboxId} />

      <aside className="cart">
        <ul>
          {
            cart.map(product => {
             return (
              <div key={product.id}>
                <CartItem
                  thumbnail={product.thumbnail}
                  title={product.title}
                  price={product.price}
                  quantity={product.quantity}
                  addToCart={() =>addToCart(product)}
                  revomeCuantity={() => revomeCuantity(product)}
                />
              </div>
             ) 
            })
          }
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
