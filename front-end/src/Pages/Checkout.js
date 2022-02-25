import React from "react"
import Cart from "../Components/Cart"
import { useState } from "react"

function Checkout() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart({
    cart: [...cart, product],
  });


//   const remove = (i) => {
//     let updatedCart = [...cart];
//     updatedCart.splice(i, 1)
//     setCart({
//       cart: updatedCart,
//     });
// }
console.log('this is cart inside Checkout', cart)

  return (
    <div>
        <h2>Checkout</h2>
        <Cart 
            cart={cart}
            // remove={remove}
            addToCart={addToCart}
          />
    </div>
  )
}

export default Checkout