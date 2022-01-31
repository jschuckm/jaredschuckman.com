import Title from "./Title";
import "./About.css"
import "../css/output.css"
import {v4 as uuidv4} from "uuid"
import { Link } from "react-router-dom";

function BlogPosts({blogPosts}) {
  return (
        <div class="bg-slate-700 h-[calc(100vh-var(--headerheight))] space-y-10 overflow-auto pb-5">
            <Title text="Blog" altText="." divHeight="25vh" fontSize="65px"/>
            {blogPosts.map((blogPost)=>{
                return <div key={uuidv4()} class="p-6 max-w-xs  sm:p-8 sm:max-w-md md:p-10 md:max-w-2xl lg:p-16 lg:max-w-4xl mx-auto bg-slate-100 rounded-xl shadow-sm items-center space-y-0.5">
                        <h1 class="text-3xl font-medium text-black">{blogPost.title}</h1>
                        <div class="sm:flex sm:space-x-4 sm:justify-center text-slate-500">
                            <div>By: {blogPost.author}</div>
                            <div>Last Updated: {blogPost.updatedDate}</div>
                            <div>Created: {blogPost.createdDate}</div>
                        </div>
                        <Link to={"blog/details/"+blogPost.id}>Click to View</Link>
                </div>
            })}
        </div>
  );
}

export default BlogPosts;
