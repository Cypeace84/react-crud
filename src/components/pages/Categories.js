import { Card, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAllCategories } from '../../redux/categoriesRedux';

const Categories = () => {
  // const { category } = useParams();
  // let posts = useSelector((state) => getPostsByCategories(state, category));
  // console.log('postsByCat', posts);
  const postsCategory = useSelector((state) => getAllCategories(state));

  return (
    <Container>
      <h1 className='m-2'>All categories </h1>
      {postsCategory.map((post) => (
        <Card key={post}>
          <Card.Body>
            <Link to={`/categories/${post}`}>{post}</Link>
          </Card.Body>
        </Card>
      ))}
      {/* <Card> */}
      {/* <Card.Body>
          <Link to='/categories/sports'>SPORTS</Link>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Link to='/categories/news'>NEWS</Link>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Link to='/categories/movies'>MOVIES</Link>
        </Card.Body>
      </Card> */}
      {/* <Category /> */}
      {/* <Row xs={1} md={2} lg={3}>
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
      </Row> */}
    </Container>
  );
};

export default Categories;
