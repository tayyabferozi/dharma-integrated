import React, { Component } from 'react';

import './index.css';
import Navbar from './Navbar/Navbar';
import Blog from './Blog/Blog';
import BlogBoxes from './BlogBoxes/BlogBoxes';
import Footer from './Footer/Footer';
import Subscribe from './Subscribe/Subscribe';

class BlogContainer extends Component {
  render() {
    return (
      <div className="BlogContainer TextCenter">
        <Navbar />
        <Blog />
        <BlogBoxes />
        <Subscribe />
        <Footer />
      </div>
    );
  }
}

export default BlogContainer;
