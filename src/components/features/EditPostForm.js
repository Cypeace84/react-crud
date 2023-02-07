import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { editPost, getPostById } from '../../redux/postRedux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import PostForm from './PostForm';

const EditPostForm = () => {
  // const [title, setTitle] = useState('');
  // const [author, setAuthor] = useState('');
  // const [publishedDate, setPublishedDate] = useState('');
  // const [shortDescription, setShortDescription] = useState('');
  // const [content, setContent] = useState('');

  const { id } = useParams();
  const post = useSelector((state) => getPostById(state, id));
  console.log('editPost:', post);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log('id', id);

  const handleSubmit = (post) => {
    dispatch(editPost({ ...post, id }));
    navigate('/');
  };

  if (!post) return <Navigate to='/' />;
  return (
    <Container>
      <div style={{ width: '70%', margin: '0 auto' }}>
        <h1> Edit post</h1>
        <PostForm
          action={handleSubmit}
          actionText='Edit post'
          title={post.title}
          author={post.author}
          publishedDate={post.publishedDate}
          shortDescription={post.shortDescription}
          content={post.content}
          id={id}
        />
      </div>
    </Container>
  );
};

export default EditPostForm;
