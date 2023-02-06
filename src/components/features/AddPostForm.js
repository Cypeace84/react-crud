import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/postRedux';
import { useNavigate } from 'react-router-dom';

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addPost({ title, author, publishedDate, shortDescription, content })
    );
    navigate('/');
  };

  return (
    <Container>
      <div style={{ width: '70%', margin: '0 auto' }}>
        <h1> Add post</h1>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Form.Group
              as={Col}
              controlId='formTitle'
              className='col-sm-6 mb-3'
            >
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group
              className='mb-3 col-sm-6'
              as={Col}
              controlId='formAuthor'
            >
              <Form.Label>Author</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter author'
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group
              as={Col}
              controlId='formPublished'
              className='col-sm-6 mb-3'
            >
              <Form.Label>Published</Form.Label>
              <Form.Control
                type='text'
                placeholder='mm-dd-rr'
                value={publishedDate}
                onChange={(e) => setPublishedDate(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId='formDescription' className='mb-3'>
              <Form.Label>Short Description</Form.Label>
              <Form.Control
                type='text'
                as='textarea'
                rows='3'
                placeholder='Leave a comment here'
                value={shortDescription}
                onChange={(e) => setShortDescription(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} controlId='formContent' className='mb-3'>
              <Form.Label>Main content</Form.Label>
              <Form.Control
                type='text'
                as='textarea'
                rows='6'
                placeholder='Leave a comment here'
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Button variant='primary' type='submit'>
            Add post
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default AddPostForm;
