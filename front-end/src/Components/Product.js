import { Link } from "react-router-dom";
import { Card } from "react-bootstrap"
import "./Product.css"

function Product({product}) {
  return (
      <Card id="card">
        <Card.Body>
          <Link to={`/products/${product.id}`}>
            <Card.Img style={{width: '100%'}} src={product.image} alt="products" />
          </Link>
          <Card.Title className="my-2">{product.name}</Card.Title>
          <Card.Text className="me-auto">${product.price.toFixed(2)}</Card.Text>
        </Card.Body>
      </Card>
  )
}

export default Product