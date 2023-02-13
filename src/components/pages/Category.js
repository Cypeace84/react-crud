import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostsByCategories } from '../../redux/postRedux';
import Posts from '../features/Posts';

const Category = () => {
  const { category } = useParams();
  let posts = useSelector((state) => getPostsByCategories(state, category));

  if (!posts.length)
    return (
      <div>
        <h1 className='m-2'>Category: {category} </h1>
        <p className='mx-2'>empty</p>
      </div>
    );

  return (
    <Container>
      <h1 className='m-2'>Category: {category} </h1>
      <Row xs={1} md={2} lg={3}>
        {posts.map((post) => (
          <Posts
            key={post.id}
            title={post.title}
            author={post.author}
            publishedDate={post.publishedDate}
            shortDescription={post.shortDescription}
            id={post.id}
            category={post.category}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Category;
