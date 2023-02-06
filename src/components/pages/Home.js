import { Button, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../../redux/postRedux';
import Posts from '../features/Posts';

const Home = () => {
  const posts = useSelector(getAllPosts);
  return (
    <Container>
      <div className='d-flex justify-content-between align-items-center mb-4'>
        <h1 className='m-0'>All Posts </h1>
        <Link to='post/add'>
          <Button variant='outline-primary' size='lg'>
            Add post
          </Button>
        </Link>
      </div>
      <Row xs={1} md={2} lg={3}>
        {posts.map((post) => (
          <Posts
            key={post.id}
            title={post.title}
            author={post.author}
            publishedDate={post.publishedDate}
            shortDescription={post.shortDescription}
            id={post.id}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Home;
