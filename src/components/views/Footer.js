import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
  return (
    <footer>
      <Container fluid className='py-3'>
        <Row className='justify-content-center text-muted'>
          <Col xs='auto'>Copyright &copy; BlogApp 2022</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
