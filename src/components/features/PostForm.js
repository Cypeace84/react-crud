import { useState } from 'react';
import { Button, Form, FormControl, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import { useForm } from 'react-hook-form';

import 'react-datepicker/dist/react-datepicker.css';
import { useRoutes } from 'react-router-dom';
import { getAllCategories } from '../../redux/categoriesRedux';
import { useSelector } from 'react-redux';

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ''
  );
  const [content, setContent] = useState(props.content || '');
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [category, setCategory] = useState('');

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();
  console.log('category', category);
  const options = useSelector(getAllCategories);
  console.log('options', options);
  // console.log('props.title:', props.title);
  // console.log('props:', props);

  const handleSubmit = (e) => {
    // e.preventDefault(); validate ma wbudowany preventDefault
    setContentError(!content);
    setDateError(!publishedDate);
    if (!content || !publishedDate) {
      return;
    } else {
      action({
        title,
        author,
        publishedDate,
        shortDescription,
        content,
        category,
      });
    }
  };

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Row>
        <Form.Group as={Col} controlId='formTitle' className='col-sm-6 mb-3'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            {...register('title', { required: true, minLength: 3 })}
            type='text'
            placeholder='Enter title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {/* {errors.title && <span>This field is required</span>} */}
          {errors.title && (
            <small className='d-block form-text text-danger mt-2'>
              This field is required, min 3 characters
            </small>
          )}
        </Form.Group>
      </Row>
      <Row>
        <Form.Group className='mb-3 col-sm-6' as={Col} controlId='formAuthor'>
          <Form.Label>Author</Form.Label>
          <Form.Control
            {...register('author', { required: true, minLength: 3 })}
            type='text'
            placeholder='Enter author'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          {errors.author && (
            <small className='d-block form-text text-danger mt-2'>
              This field is required min 3 characters
            </small>
          )}
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
            onChange={(date) => setPublishedDate(date)}
          />
          {dateError && (
            <small className='d-block form-text text-danger mt-2'>
              Date is required
            </small>
          )}
          {/* <Form.Control
            type='text'
            placeholder='mm-dd-rr'
            value={publishedDate}
            onChange={(e) => setPublishedDate(e.target.value)}
          /> */}
        </Form.Group>
      </Row>
      {/* ////////////////////////////////////////// */}
      <Row>
        <Form.Group as={Col} controlId='formCategory' className='col-sm-6 mb-3'>
          <Form.Label>Category</Form.Label>
          <Form.Control
            as='select'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value='' disabled>
              Select Category...
            </option>
            {options.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </Form.Control>
        </Form.Group>
      </Row>
      {/* ///////////////////////////////////////// */}
      <Row>
        <Form.Group as={Col} controlId='formDescription' className='mb-3'>
          <Form.Label>Short Description</Form.Label>
          <Form.Control
            {...register('shortDescription', { required: true, minLength: 20 })}
            type='text'
            as='textarea'
            rows='3'
            placeholder='Leave a comment here'
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
          />
          {errors.shortDescription && (
            <small className='d-block form-text text-danger mt-2'>
              This field is required, min of 20 characters
            </small>
          )}
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} controlId='formContent' className='mb-3'>
          <Form.Label>Main content</Form.Label>
          <ReactQuill theme='snow' value={content} onChange={setContent} />
          {contentError && (
            <small className='d-block form-text text-danger mt-2'>
              Content can't be empty
            </small>
          )}
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
