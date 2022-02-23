import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap"

function Product({product}) {
  return (
      <Card className="Product">
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
      the card's content.
          </Card.Text>
          <Link to={`/products/${product.id}`}>
            <Card.Img className="img-fluid" src={product.image} alt="products" />
          </Link>
          <Button className="my-4" variant="outline-primary">Add to Cart</Button>
        </Card.Body>
      </Card>
  )
}

export default Product