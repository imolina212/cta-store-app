import { useState } from "react";
import { Container, Table } from "react-bootstrap"

function Cart({cart}) {
  
  let subtotal = cart.reduce((total, product) => total + product.price, 0);
    // const remove = (i) => {
    //     let updatedCart = [...cart]
    //     updatedCart.splice(i, 1)
    //     setCart(updatedCart);
    // }
  
    const formatPrice = (price) => `$${price.toFixed(2)}`;
    console.log('This is the cart', cart)

    
    return (
      <Container className="my-5">
        <h2>Cart</h2>
        <Table striped bordered className="my-4">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Price</th>
            </tr> 
          </thead>
          <tbody>
              {cart.map((product, i) => (
            <tr>
                <td>
                  {product.name}
                </td>
                <td>
                  {formatPrice(product.price)}
                </td>
            </tr>
            
              ))}
          </tbody>
        </Table>
        <h5>Subtotal: {formatPrice(subtotal)}</h5>
        <h5>Tax: {formatPrice(subtotal * 0.05)}</h5>
        <h5>Total: {formatPrice(subtotal * 1.05)}</h5>
      </Container>
    );
}

export default Cart;