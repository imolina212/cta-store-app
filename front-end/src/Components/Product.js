import { Link } from "react-router-dom"

function Product({product}) {
  return (
    <div className="Product">
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt="products" />
      </Link>
    </div>
  )
}

export default Product