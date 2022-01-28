import Title from "./Title";
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import "./About.css"
import "../css/output.css"
import {v4 as uuidv4} from "uuid"

function BlogPosts({blogPosts}) {
  return (
        <div>
            <Title text="Blog" altText="." divHeight="25vh" fontSize="65px"/>
            <Container style={{display:"flex",justifyContent:"center",flexDirection: "column", marginTop:"5em",textAlign:"left"}}>
                <Row>
                    <Col>
                        {blogPosts.map((blogPost)=>{
                            return <div key={uuidv4()} class="p-16 max-w-4xl mx-auto bg-slate-100 rounded-xl shadow-lg flex items-center space-x-4">
                                <div>
                                    <div class="text-xl font-medium text-black">{blogPost.title}</div>
                                    <p class="text-slate-500">{blogPost.summary}</p>
                                </div>
                            </div>
                        })}
                   </Col>
                </Row>
            </Container>
        </div>
  );
}

export default BlogPosts;
