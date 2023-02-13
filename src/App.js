import { Route, Routes } from 'react-router-dom';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Post from './components/pages/Post';
import PostAdd from './components/pages/PostAdd';
import PostEdit from './components/pages/PostEdit';
import { Container } from 'react-bootstrap';
import Header from './components/views/Header';
import Footer from './components/views/Footer';
import Categories from './components/pages/Categories';
import Category from './components/pages/Category';

const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/categories/:category' element={<Category />} />
        <Route path='/about' element={<About />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='/post/add' element={<PostAdd />} />
        <Route path='/post/edit/:id' element={<PostEdit />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
