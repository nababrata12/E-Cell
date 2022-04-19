import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog05, blog06, blog07, blog08, blog09, blog10, blog11, blog12, blog14, blog15 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="team">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Our Team</h1>
    </div>
    <div className="gpt3__blog-container">
      <h1 className="gradient__text">MENTOR & CO-ORDINATOR</h1>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog06} job="HOD CSE Dept., NIT Agartala" text="DR. SUMAN DEB, Chairman of Institute Innovation Cell & E-Cell" />
      </div>
    </div>
    <div className="gpt3__blog-container">
      <h1 className="gradient__text">LEADERSHIP</h1>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog05} job="President of E-Cell" text="RAJKHUSH KUMAR" />
        <Article imgUrl={blog07} job="Chief Coordinator" text="KARTIKEY SINGH" />
        <Article imgUrl={blog02} job="Head of Operations" text="RASHMITA CHAKRABORTY" />
      </div>
    </div>
    <div className="gpt3__blog-container">
      <h1 className="gradient__text">Senior Executives</h1>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog01} job="Head of Design" text="Bharat Sharma" />
        <Article imgUrl={blog03} job="Head of Media & Content" text="Aryan Vijaywargia" />
        <Article imgUrl={blog09} job="Head of Finance & Treasury" text="Abhijeet Patil" />
      </div>
    </div>
    <div className="gpt3__blog-container">
      <h1 className="gradient__text">WEB DESIGN</h1>
      <div className="gpt3__blog-container_groupB">
        <Article link="https://www.linkedin.com/in/nababratadeb/" imgUrl={blog08} text="NABABRATA DEB" />
        <Article imgUrl={blog15} text="Tanmay Shree" />
      </div>
    </div>
    <div className="gpt3__blog-container">
      <h1 className="gradient__text">MEDIA & CONTENT TEAM</h1>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog10} text="Hemant Shankar" />
        <Article imgUrl={blog11} text="Srija Das" />
      </div>
    </div>
    <div className="gpt3__blog-container">
      <h1 className="gradient__text">OUTREACH TEAM</h1>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog14} text="Deep Shikha" />
      </div>
    </div>
    <div className="gpt3__blog-container">
      <h1 className="gradient__text">DESIGN TEAM</h1>
      <div className="gpt3__blog-container_groupB">
        <Article link="https://www.linkedin.com/in/nababratadeb/" imgUrl={blog08} text="NABABRATA DEB" />
        <Article imgUrl={blog15} text="Tanmay Shree" />
      </div>
    </div>
    <div className="gpt3__blog-container">
      <h1 className="gradient__text">EVENTS TEAM</h1>
      <div className="gpt3__blog-container_groupB">
        <Article link="https://www.linkedin.com/in/pratnadeepbanik/" imgUrl={blog12} text="Pratnadeep Banik" />
        <Article imgUrl={blog15} text="Tanmay Shree" />
      </div>
    </div>
  </div>
);

export default Blog;
