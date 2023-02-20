import Container from 'react-bootstrap/Container';

import {Link} from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/img/logo.png';
import CartWidget from '../Cart/CartWidget'




function ListadeMenues() {
  return (
    <>
   
      <Navbar bg="dark" variant="dark" className="hola" >
        <Container className="contenedorMenu">
          <Navbar.Brand href="#home"><img className="logo" src={Logo} alt="logo" /></Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/">INICIO</Nav.Link>

            <Nav.Link href="#CARRITO"> <CartWidget/> </Nav.Link>

<br/>
            <Link to='/categoria/gQbleZpL8H3lPptG62Tw'>Categoria 1</Link>
            <br/>
            <Link to='/categoria/Qf2VSognZeSGMVODMTMS'>Categoria 2</Link>
            
          </Nav>
        </Container>

      </Navbar>
      
    </>
  );
}

export default ListadeMenues;