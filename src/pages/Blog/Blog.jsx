import { Link } from "react-router-dom";
import {blogs} from "../../fake/data";
import "./Blog.css";


const Blog = () => {
  return (
    <>
      <div className="page-contain my-5">
        <div className="container">
          <h1 className="font-bold">Our Blogs</h1>
          <div className="blog-area w-3/4">
          
          {
            blogs.map((item) =>{
              return ( <div className="blog-item flex gap-3 mb-3 shadow-md p-3">
                <img src={item.photo} className="w-[200px] h-[200px] object-cover rounded-md my-3" alt="" />
                <div className="content">
                  <h1 className="font-bold text-xl">{item.title}</h1>
                  <p className="font-light">{item.content}</p>
                  <Link to={`/blog/${item.id}`} className="bg-sky-500 py-2 px-3 rounded-md text-white no-underline">Read More</Link>
                </div>
              </div>)
            })
          }      
          </div>
        </div>
       </div>
            

  
    </>
  )
}

export default Blog