import { Col, Container, Row } from "react-bootstrap";
import Title from "./Title";

function Contact() {
  return (
        <div>
            <Title text="Contact me" altText="." divHeight="40vh" fontSize="65px" />
            <Container style={{height:"50vh",display:"flex",justifyContent:"center",flexDirection: "column"}}>
                <Row>
                    <Col>
                        <p style={{fontFamily:"Montserrat",fontWeight:"300",letterSpacing:"0.02em",color:"#818181",fontSize:"22px",lineHeight:"30px"}}>
                        Jared Schuckman<br />
                        309-830-4786<br />
            ​            jaredschuckman@gmail.com<br />
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
        
  );
}

export default Contact;
