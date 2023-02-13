import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/postRedux';
import { useNavigate } from 'react-router-dom';
import PostForm from './PostForm';

const AddPostForm = () => {
  // const [title, setTitle] = useState('');
  // const [author, setAuthor] = useState('');
  // const [publishedDate, setPublishedDate] = useState('');
  // const [shortDescription, setShortDescription] = useState('');
  // const [content, setContent] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (post) => {
    console.log('post', post);
    dispatch(addPost(post));
    navigate('/');
  };

  return (
    <Container>
      <div style={{ width: '70%', margin: '0 auto' }}>
        <h1> Add post</h1>
        <PostForm action={handleSubmit} actionText='Add post' />
      </div>
    </Container>
  );
};

export default AddPostForm;
