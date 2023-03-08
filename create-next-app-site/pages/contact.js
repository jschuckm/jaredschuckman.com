import { Col, Container, Row } from "react-bootstrap";
import Title from "../components/Title";
import Header from "../components/Header";
import Script from "next/script";
import HeadSEO from "../components/HeadSEO";

function Contact() {
  return (
        <div class="App">
            <HeadSEO />
            <Header></Header>
            <Title text="Contact me" altText="." divHeight="25vh" fontSize="65px" />
            <Container style={{height:"65vh",display:"flex",justifyContent:"space-evenly",flexDirection: "column"}}>
                <Row>
                    <Col>
                        <p style={{fontFamily:"Montserrat",fontWeight:"300",letterSpacing:"0.02em",color:"#818181",fontSize:"22px",lineHeight:"30px"}}>
                        Jared Schuckman<br />
            ​            jaredschuckman@gmail.com<br />
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}} className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="jared-schuckman-05a250212" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/jared-schuckman-05a250212?trk=profile-badge"></a></div>
                    </Col>
                </Row>
            </Container>
        </div>
        
  );
}

export default Contact;
