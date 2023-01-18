import Container from 'react-bootstrap/Container';

import {Link} from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';

import Navbar from 'react-bootstrap/Navbar';

import Logo from '../../assets/img/logo.jpg';

import CartWidget from '../Cart/CartWidget'




function Nabvar() {
  return (
    <>
   
      <Navbar bg="dark" variant="dark" className="hola" >
        <Container className="contenedorMenu">
          <Navbar.Brand href="#home"><img className="logo" src={Logo} alt="logo" /></Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#INICIO">INICIO</Nav.Link>
            <Nav.Link href="#TIENDA">TIENDA ONLINE</Nav.Link>
            <Nav.Link href="#OFERTAS">OFERTAS</Nav.Link>

         

            <Nav.Link href="#CARRITO"> <CartWidget/> </Nav.Link>

<br/>
            <Link to='/categoria/1'>Categoria 1</Link>
            <br /> 
            <Link to='/categoria/2'>Categoria 2</Link>
          </Nav>
          
        </Container> 

      </Navbar>
      
    </>
  );
}

export default Nabvar;