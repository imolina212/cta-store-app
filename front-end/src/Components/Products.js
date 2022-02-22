import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";

function Products() {
  const [products, setProducts] = useState([]);
  const URL = process.env.REACT_APP_API_URL

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

  return (
    <main className='Products'>
      <section>
        <article>
          {products.map((product) => {
            return <Product key={product.id} product={product}/>
          })}
        </article>
      </section>
    </main>
  )
}

export default Products;