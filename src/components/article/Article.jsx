import React from 'react';
import './article.css';

const Article = ({ imgUrl, job, text, link }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{job}</p>
        <h3>{text}</h3>
      </div>
      <div className="gpt3__fellow">
        <button type="button"><a href={link} target="blank" rel="null">LinkedIn</a>
        </button>
      </div>
    </div>
  </div>
);

export default Article;
