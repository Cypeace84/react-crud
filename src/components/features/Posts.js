import { Button, Card } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const Posts = ({ title, author, publishedDate, shortDescription, id }) => {
  return (
    <div className='p-3'>
      <Card>
        <Card.Body>
          <Card.Title className='mb-3'>{title}</Card.Title>
          <Card.Text className='mb-1'>
            <strong>Author: </strong>
            {author}
          </Card.Text>
          <Card.Text className='mb-3'>
            <strong>Published: </strong>
            {publishedDate}
          </Card.Text>
          <Card.Text className='mb-4'>{shortDescription}</Card.Text>
          <Link to={'/post/' + id}>
            <Button variant='primary'>Read more</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Posts;
