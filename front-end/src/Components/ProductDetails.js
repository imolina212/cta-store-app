import axios from "axios"
import { Card, Button, Stack , Container , ListGroup} from "react-bootstrap"
import { useState, useEffect } from "react";
import { useParams , useNavigate, Link} from "react-router-dom";

function ProductDetails() {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
      axios.get(URL+"/products/"+id)
      .then((response) => {return setProduct(response.data)})
      .catch(() => { navigate("/not-found")})
  }, [URL, id, navigate])

  const deleteProduct = () => {
      axios.delete(`${URL}/products/${id}`)
      .then(() => navigate("/products"))
      .catch((e) => console.error(e));
  };

  
  return (
    <Container className="mt-5 p-5">
      <Card>
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Link to={`/products/${product.id}`}>
              <Card.Img className="p-3" src={product.image} alt="products" />
            </Link>
            <ListGroup className="mt-4" variant="flush">
              <ListGroup.Item>Description: {product.description}</ListGroup.Item>
              <ListGroup.Item>Rating:{product.rating}</ListGroup.Item>
              <ListGroup.Item>${product.price}</ListGroup.Item>
            </ListGroup>
            <Stack direction="horizontal" gap="3">
              <Button href="/products" className="my-4" variant="outline-secondary">Back</Button>
              <Button className="my-4" variant="outline-danger" onClick={deleteProduct}>Delete</Button>
              <Button href={`/products/${id}/edit`} className="my-4" variant="outline-primary">Edit</Button>
              <Button className="my-4" variant="outline-primary">Add to Cart</Button>
            </Stack>
          </Card.Body>
        </Card>
    </Container>
    
  )
}

export default ProductDetails