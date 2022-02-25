import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";
import { Stack , Button } from "react-bootstrap"
import Cart from "../Components/Cart"

function Products() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState([]);
  const URL = process.env.REACT_APP_API_URL;

  useEffect(()=> {
    axios.get(`${URL}/products`)
      .then((res) => {
        console.log(res.data)
        setProducts(res.data)
      })
      .catch((err) => {
        throw err
      })
  },[URL])

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    setSubtotal(subtotal + product.price);
  }
  
  
  return (
    <main className='Products'>
      <section>
        <Stack direction="vertical" gap="5" style={{display: "grid", gridTemplateColumns: "1fr 1fr", textAlign: "center"}}>
          {products.map((product) => {
            return(
              <div>
                <Product key={product.id} product={product}/>
                <Button className="my-3" onClick={()=>{handleAddToCart(product)}}>Add to cart</Button>
              </div>
            )
          })}
        </Stack>
      </section>
        <aside>
          <Cart cart={cart} subtotal={subtotal} />
        </aside>
    </main>
  )
}

export default Products; 