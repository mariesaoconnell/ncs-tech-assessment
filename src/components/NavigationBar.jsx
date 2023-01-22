import { Navbar, Nav, Container } from "react-bootstrap";

function NavigationBar(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav.Link>Home</Nav.Link>
        <Nav.Link>Home</Nav.Link>
        <Nav.Link>Home</Nav.Link>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
