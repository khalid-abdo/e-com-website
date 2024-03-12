import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function Appnavbar() {
    const cart =useSelector(state=>state.Cart)
    return (
        <>
            <Navbar fixed='top' expand="lg" className="bg-body-tertiary">
                <Container>
                    <Link to={'/'} className='navbar-brand'>CartAppkkkkk</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to={'/'} className='nav-link'>Proudcts</Link>
                            <Link to={'/cart'} className='nav-link'>Carttt-{cart.length}</Link>
                           
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Appnavbar;