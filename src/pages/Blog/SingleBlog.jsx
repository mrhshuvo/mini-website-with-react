import React from 'react'
import { useParams } from 'react-router-dom'
import { blogs } from '../../fake/data';

const SingleBlog = () => {

    const {postId} = useParams();
     
    const blog = blogs.find((data) => data.id == postId);
    
  return (
    <>
    <div className="container">
        <h1 className='font-light text-3xl py-4'>{blog.title}</h1>
        <img src={blog.photo} className="rounded-md py-3" alt="" />
        <p className='italic font-thin'>{blog.content}</p>
    </div>
    </>
  )
}

export default SingleBlog