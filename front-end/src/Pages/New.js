import ProductForm from "../Components/ProductForm"
import { Container } from "react-bootstrap"

const New = () => {
  return (
    <Container className="my-5">
        <h2 className="my-4">New Form</h2>
        <ProductForm />
    </Container>
  )
}

export default New