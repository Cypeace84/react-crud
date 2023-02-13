import { useState } from 'react';
import { Button, Card, Col, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useParams } from 'react-router-dom';
import { getPostById, removePost } from '../../redux/postRedux';
import dateToString from '../../utils/dateToStr';

const Post = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const { id } = useParams();
  const postData = useSelector((state) => getPostById(state, id));

  const remove = (e) => {
    e.preventDefault();
    dispatch(removePost(id));
    handleClose();
  };
  // useEffect(() => {
  //   if (!postData) {
  //     <Navigate to='/' />;
  //   }
  // }, [postData]);

  if (!postData) return <Navigate to='/' />;
  return (
    <>
      <Card style={{ width: '70%' }} className='mx-auto border-0'>
        <Card.Body>
          <Row className='d-flex justify-content-between align-items-center mb-4'>
            <Col xs={12} md={8}>
              <Card.Title className='m-0'>{postData.title}</Card.Title>
            </Col>
            <Col xs={6} md={4} className='d-flex my-3'>
              <Link to={'/post/edit/' + id}>
                <Button variant='outline-info'>Edit</Button>
              </Link>
              <Button
                className='mx-2'
                variant='outline-danger'
                onClick={handleShow}
              >
                Delete
              </Button>
            </Col>
          </Row>
          <Card.Text className='mb-1'>
            <strong>Author: </strong>
            {postData.author}
          </Card.Text>
          <Card.Text className='mb-3'>
            <strong>Published: </strong>
            {dateToString(postData.publishedDate)}

            {/* {postData.publishedDate} */}
          </Card.Text>
          <Card.Text className='mb-4'>
            <p dangerouslySetInnerHTML={{ __html: postData.content }} />
          </Card.Text>
        </Card.Body>
      </Card>
      <div
        className='modal show'
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure? </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Are you sure to remove post?</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Cancel
            </Button>
            <Button variant='danger' onClick={remove}>
              Remove
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Post;
