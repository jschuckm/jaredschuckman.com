import Title from "./Title";
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Jared from "../assets/jared.jpg"
import Resume from "../assets/JaredSchuckmanResume.pdf"

function Body() {
  return (
        <div>
            <Title text="About me" altText="." divHeight="40vh" fontSize="65px"/>
            <Container style={{display:"flex",justifyContent:"center",flexDirection: "column", marginTop:"5em"}}>
                <Row>
                    <Col>
                        <p style={{fontFamily:"Montserrat",fontWeight:"300",letterSpacing:"0.02em",color:"#818181",fontSize:"22px",lineHeight:"30px",textAlign:"left"}}>
                          I am currently a senior at Iowa State University graduating in spring of 2021 with a major in Computer Engineering. I am planning to attend graduate school after graduating. I am interested in machine learning, natural language processing, blockchain and cybersecurity. I also enjoy cycling, running, and music.<br />
                          <br />
                          My career goals after graduating are to obtain a full time position as a software engineer working with blockchain, machine learning, or embedded systems. 
                        </p>
                        <a href={Resume}>Download Resume</a>
                    </Col>
                    <Col>
                      <img src={Jared} alt="Picture of Jared"></img>
                    </Col>
                </Row>
            </Container>
        </div>
  );
}

export default Body;
