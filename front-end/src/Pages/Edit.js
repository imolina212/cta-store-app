import ProductForm from "../Components/ProductForm"
import { Container } from "react-bootstrap"

const Edit = () => {
  return (
    <Container className="my-5">
        <h2 className="my-4">Edit</h2>
        <ProductForm />
    </Container>
  )
}

export default Edit