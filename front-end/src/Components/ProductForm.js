import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Form , Stack } from "react-bootstrap";

function ProductForm() {
    const { id } = useParams();
    const URL = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: "",
        image: "",
        description: "",
        rating: "",
        price: "",
        isFeatured: "false",
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
    const handleNumberChange = (event) => {
      setProduct({ ...product, [event.target.id]: Number(event.target.value)});
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
        <Form.Group className="my-2">
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control type="name" id="name" value={product.name} onChange={handleInputChange} placeholder="Enter Name" required />
        </Form.Group>
        <Form.Group className="my-2">
            <Form.Label htmlFor="image">Image</Form.Label>
            <Form.Control type="url" id="image" value={product.image} onChange={handleInputChange}  placeholder="Add Image URL" required />
        </Form.Group>
        <Form.Group className="my-2">
            <Form.Label htmlFor="description">Description</Form.Label>
            <Form.Control type="text" id="description" value={product.description} onChange={handleInputChange}  placeholder="Enter Description" required />
        </Form.Group>
        <Form.Group className="my-2">
            <Form.Label htmlFor="price">Price</Form.Label>
            <Form.Control type="number" id="price" value={product.price} onChange={handleNumberChange}  placeholder="Enter Price" required />
        </Form.Group>
        <Stack direction="horizontal" gap="3">
          <Button href={`/products/${id}`} className="mt-4" variant="outline-primary">Back</Button>
          <Button type='submit' className="mt-4" variant="primary">Submit</Button>
        </Stack>
    </Form>
  )
}

export default ProductForm