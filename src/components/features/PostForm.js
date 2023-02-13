import { useState } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ''
  );
  const [content, setContent] = useState(props.content || '');

  console.log('props.title:', props.title);
  console.log('props:', props);

  const handleSubmit = (e) => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Form.Group as={Col} controlId='formTitle' className='col-sm-6 mb-3'>
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
        <Form.Group className='mb-3 col-sm-6' as={Col} controlId='formAuthor'>
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
          <DatePicker
            selected={publishedDate}
            onChange={(e) => setPublishedDate(e.target.value)}
          />
          {/* <Form.Control
            type='text'
            placeholder='mm-dd-rr'
            value={publishedDate}
            onChange={(e) => setPublishedDate(e.target.value)}
          /> */}
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
          <ReactQuill theme='snow' value={content} onChange={setContent} />

          {/* <Form.Control
            type='text'
            as='textarea'
            rows='6'
            placeholder='Leave a comment here'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          /> */}
        </Form.Group>
      </Row>

      <Button variant='primary' type='submit'>
        {/* Add post */}
        {actionText}
      </Button>
    </Form>
  );
};

export default PostForm;
