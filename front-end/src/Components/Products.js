import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";
import { Stack } from "react-bootstrap"

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
        <Stack direction="vertical" gap="5" style={{display: "grid", gridTemplateColumns: "1fr 1fr", textAlign: "center"}}>
          {products.map((product) => {
            return <Product key={product.id} product={product}/>
          })}
        </Stack>
      </section>
    </main>
  )
}

export default Products; 