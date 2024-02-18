import './App.css';
import Blog from './Components/Blog';
import Home from './Components/Home';
import Card from './Components/Book';
// import {Route,Routes} from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogDetail from './Components/BlogDetail';
function App() {
  const books = [
    {
      id: 1,
      imageSrc: 'path/to/image1.jpg',
      year: 2022,
      title: 'Book Title 1',
      description: 'Description of Book 1',
      amazonLink: 'https://www.amazon.com/book1',
    },
    {
      id: 2,
      imageSrc: 'path/to/image2.jpg',
      year: 2023,
      title: 'Book Title 2',
      description: 'Description of Book 2',
      amazonLink: 'https://www.amazon.com/book2',
    },
    // Add more book objects as needed
  ];
  return (
    <Router>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element = {<Card
          imageSrc="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          year="2022"
          title="Product Title lorem ipsum how are you "
          description="A brief description of the product."
          amazonLink="https://www.amazon.com/your-product-link"
        />} />

        <Route path="/blog/blog-detail/:id" element={<BlogDetail />} />

        <Route path="/blog" element={<Blog />} />

        {/* <Route path="/blog-detail/:id" element={<BlogDetail />} /> */}
        {/* <Route path="/" element = {<Card
          imageSrc="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          year="2022"
          title="Product Title lorem ipsum how are you "
          description="A brief description of the product."
          amazonLink="https://www.amazon.com/your-product-link"
        />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
