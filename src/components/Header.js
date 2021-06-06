import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Header.css'

function Header() {
  return (
    <div style={{width:"100%"}}>
    <Navbar bg="light" expand="lg">
        <div className="brand">
        <Navbar.Brand href="#home">Jared Schuckman</Navbar.Brand>
        </div>
        <div className="navmenu">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="projects">Projects</Nav.Link>
                <Nav.Link href="about">About</Nav.Link>
                <Nav.Link href="contact">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </div>
    </Navbar>
    </div>
  );
}

export default Header;
