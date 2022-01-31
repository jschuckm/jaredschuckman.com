import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Header.css'
import '../AppVars.css'
import {Link} from "react-router-dom"
import {useState} from "react"

function Header() {

  const [expand, setExpand] = useState(false);

  return (
    <div class="w-screen h-[var(--headerheight)]">
      <Navbar bg="light" expand="lg" onToggle={()=>setExpand(!expand)} expanded={expand}>
          <div class="w-1/4 text-left">
            <Navbar.Brand href="#home">Jared Schuckman</Navbar.Brand>
          </div>
          <div class="lg:w-0 md:ml-[calc(25vw-154px)]" >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link onClick={()=>{setExpand(false)}} as={Link} to="/">Home</Nav.Link>
                    <Nav.Link onClick={()=>{setExpand(false)}} as={Link} to="projects">Projects</Nav.Link>
                    <Nav.Link onClick={()=>{setExpand(false)}} as={Link} to="about">About</Nav.Link>
                    <Nav.Link onClick={()=>{setExpand(false)}} as={Link} to="contact">Contact</Nav.Link>
                    <Nav.Link onClick={()=>{setExpand(false)}} as={Link} to="blog">Blog</Nav.Link>
                </Nav>
            </Navbar.Collapse>
          </div>
      </Navbar>
    </div>
  );
}

export default Header;
