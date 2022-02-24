import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap"

function Product({product}) {
  return (
      <Card>
        <Card.Body>
          <Link to={`/products/${product.id}`}>
            <Card.Img style={{width: '250px'}} src={product.image} alt="products" />
          </Link>
          <Card.Title className="my-2">{product.name}</Card.Title>
          <Card.Text className="me-auto">${product.price.toFixed(2)}</Card.Text>
        </Card.Body>
        <Button className="me-auto m-3" variant="outline-primary">Add to Cart</Button>
      </Card>
  )
}

export default Product