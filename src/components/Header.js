import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Header() {
  return (
    <div style={{width:"100%"}}>
    <Navbar bg="light" expand="lg">
        <div style={{width:"25%",textAlign:"left"}}>
        <Navbar.Brand href="#home">Jared Schuckman</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div style={{width:"50%"}}>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Projects</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </div>
    </Navbar>
    </div>
  );
}

export default Header;
