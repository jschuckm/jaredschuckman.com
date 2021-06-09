import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Header.css'
import {Link} from "react-router-dom"
import {useState} from "react"

function Header() {

  const [expand, setExpand] = useState(false);

  return (
    <div style={{width:"100%"}}>
    <Navbar bg="light" expand="lg" onToggle={()=>setExpand(!expand)} expanded={expand}>
        <div className="brand">
        <Navbar.Brand href="#home">Jared Schuckman</Navbar.Brand>
        </div>
        <div className="navmenu">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav>
                <Nav.Link onClick={()=>{setExpand(false)}} as={Link} to="/">Home</Nav.Link>
                <Nav.Link onClick={()=>{setExpand(false)}} as={Link} to="projects">Projects</Nav.Link>
                <Nav.Link onClick={()=>{setExpand(false)}} as={Link} to="about">About</Nav.Link>
                <Nav.Link onClick={()=>{setExpand(false)}} as={Link} to="contact">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </div>
    </Navbar>
    </div>
  );
}

export default Header;
