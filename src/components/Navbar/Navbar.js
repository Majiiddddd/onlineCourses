import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import './Navbar.css';

function MyNavbar() {
  const expand = "md";
  return (
    <Navbar style={{backgroundColor:'rgb(186,182,253)'}} expand={expand} className="mb-3">
      <Container>
        <Navbar.Brand style={{fontFamily:'Poppins' , fontSize:'25px'}} href="#">MA Academy</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavLink to='/'  className='nav-link'>Home</NavLink>
              <NavLink to='/about' className='nav-link'>About</NavLink>
              <NavLink to='/article' className='nav-link'>Articles</NavLink>
              <NavLink to='/panel' className='nav-link'>My Account</NavLink>
              <NavLink to='/login' className='nav-link'>Login</NavLink>
              
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
export default MyNavbar;
