import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form } from "react-bootstrap";

function ProductForm() {
    const { id } = useParams();
    const URL = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name = "",
        image = "",
        description = "",
        isFeatured = "false",
    })

    const isEdit = id ? true : false;

    useEffect(() => {
      const getProduct = async () => {
        const targetProduct = await axios.get(`${URL}/products/${id}`);
        setProduct(targetProduct.data);
      };
      isEdit && getProduct();
    }, [URL, id]);

    const handleInputChange = (event) => {
        setProduct({ ...product, [event.target.id]: event.target.value});
    };

    const handleNew = async (event) => {
      event.preventDefault();
      await axios.post(`${URL}/products`, product);
      navigate("/products");
    };

    const handleEdit = async (event) => {
        event.preventDefault();
        await axios.put(`${URL}/products/${id}`, product);
        navigate(`/products`);
    };
    console.log(product)



  return (
    <Form onSubmit={isEdit ? handleEdit : handleNew}>
        <Form.Group>
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control type="name" value={product.name} onChange={handleInputChange} placeholder="Enter Name" required />
            <Form.Text>

            </Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>Image</Form.Label>
            <Form.Control type="image" value={product.image} placeholder="Add Image" required />
            <Form.Text>

            </Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" value={product.description} placeholder="Enter Description" required />
            <Form.Text>

            </Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" value={product.price} placeholder="Enter Price" required />
            <Form.Text>

            </Form.Text>
        </Form.Group>
    </Form>
  )
}

export default ProductForm