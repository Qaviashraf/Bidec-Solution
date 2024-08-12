
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../blogsData';
import { Articles } from '../components/Articles';

import AOS from "aos";
import 'aos/dist/aos.css';

const BlogDetail = () => {
  const { id } = useParams();
  const blogPost = blogPosts.find(post => post.id === parseInt(id));

  if (!blogPost) {
    return (
      <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6">
          <h1 className="text-2xl font-bold text-gray-900">Blog post not found</h1>
        </div>
      </div>
    );
  }

  
  useEffect(() => {
    AOS.init({ duration: "1000", delay: "0" });
  });
  
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={blogPost.imageSrc}
          alt={blogPost.imageAlt}
          className="w-full h-72 object-cover rounded-t-lg"
        />
        <div className="p-6">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{blogPost.title}</h1>
          <p className="text-sm font-sans text-gray-600 mb-4">{blogPost.date} by {blogPost.author}</p>
          <div className="mt-4 text-gray-800">
            <p className="text-lg font-sans leading-relaxed">{blogPost.content}</p>
          </div>
        </div>
        <div className="bg-gray-200 py-6 px-4 sm:px-6 lg:px-8 mt-6 rounded-b-lg">
          <Articles />
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
