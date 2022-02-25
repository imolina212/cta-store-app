import { Nav, Navbar, Container } from "react-bootstrap"

function NavBar() {
  return (
    <Navbar variant="light" bg="light" expand="lg" className="shadow">
      <Container>
        <Navbar.Brand href="/" className="d-flex justify-content-between align-items-baseline fw-normal">CTA-Store App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Collections</Nav.Link>
            <Nav.Link href="/products/new">New Form</Nav.Link>
            <Nav.Link href="/products/cart">Checkout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;
