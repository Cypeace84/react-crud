import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    // <Navbar className={'my-4 rounded'} bg='primary' variant='dark'>
    <Container>
      <Navbar
        collapseOnSelect
        expand='md'
        bg='primary'
        variant='dark'
        className={'my-4 rounded'}
      >
        <Navbar.Brand as={NavLink} to='/' className='ps-3'>
          Blog.app
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse
          className='justify-content-end'
          id='responsive-navbar-nav'
        >
          <Nav className='ml-auto px-3'>
            <Nav.Link as={NavLink} to='/'>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to='/categories'>
              Categories
            </Nav.Link>
            <Nav.Link as={NavLink} to='/about'>
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <Navbar.Brand href='/'>Blog.app</Navbar.Brand>
        <Nav className='justify-content-end'>
          <NavLink className={'nav-link'} to='/'>
            Home
          </NavLink>
          <NavLink className={'nav-link'} to='/about'>
            About
          </NavLink>
        </Nav> */}
    </Container>
  );
};

export default NavBar;
