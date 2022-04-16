import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog04, blog05, blog06, blog07 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Our Team</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog06} date="Mentor" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog05} date="President" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog02} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog07} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
    </div>
  </div>
);

export default Blog;
