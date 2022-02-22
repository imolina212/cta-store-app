import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

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
    <div>
        ProductForm
    </div>
  )
}

export default ProductForm