import Title from "./Title";
import "./About.css"
import "../css/output.css"
import {v4 as uuidv4} from "uuid"
import { Link } from "react-router-dom";

function BlogDetails({blogPosts}) {
    let id = window.location.pathname.substring(window.location.pathname.lastIndexOf('/')+1);
    let blogPost = <></>;
    
    blogPosts.forEach((element) => {
        if(element.id === id){
            console.log("in if");
            blogPost =(<div key={uuidv4()} class="p-6 max-w-xs sm:p-8 sm:max-w-md md:p-10 md:max-w-2xl lg:p-16 lg:max-w-4xl mx-auto bg-slate-100 rounded-xl shadow-sm items-center space-y-0.5">
                    <h1 class="text-3xl font-medium text-black">{element.title}</h1>
                    <div class="sm:flex sm:space-x-4 sm:justify-center text-slate-500">
                        <div>By: {element.author}</div>
                        <div>Last Updated: {element.updatedDate}</div>
                        <div>Created: {element.createdDate}</div>
                    </div>
                    <p class="mt-4 indent-5">{element.content}</p>
            </div>);
        }
    });

  return (
        <div class="bg-slate-700 h-[calc(100vh-var(--headerheight))] space-y-10 overflow-auto pb-5">
            <Title text="Blog" altText="." divHeight="25vh" fontSize="65px"/>
            {blogPost}
        </div>
  );
}

export default BlogDetails;
