import Title from "../components/Title";
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Header from "../components/Header"
import styles from "./About.module.css"
import HeadSEO from "../components/HeadSEO";

export default function About() {
  return (
        <div class="App">
          <HeadSEO />
          <Header></Header>
            <Title text="About me" altText="." divHeight="25vh" fontSize="65px"/>
            <Container style={{display:"flex",justifyContent:"center",flexDirection: "column", marginTop:"5em"}}>
                <Row>
                    <Col>
                        <p style={{fontFamily:"Montserrat",fontWeight:"300",letterSpacing:"0.02em",color:"#818181",fontSize:"22px",lineHeight:"30px",textAlign:"left"}}>
                          I graduated with a Bachelor of Science in Computer Engineering from Iowa State University in spring of 2021. I was originally planning to attend graduate school Fall 2021 and Spring 2022 which is why I was interning at John Deere over the summer of 2021. I am now not planning to go back in the fall for graduate school and am seeking a full-time position as a software engineer. I am interested in web development, machine learning, blockchain and cybersecurity. I also enjoy cycling, running, and disc golf.
                          <br />
                        </p>
                        <a href='JaredSchuckmanResume.pdf' download>Download Resume</a>
                    </Col>
                    <Col>
                      <img style={{marginBottom: "10px"}} className={styles.aboutimg} src="jared.jpg" alt="Picture of Jared"></img>
                    </Col>
                </Row>
            </Container>
        </div>
  );
}
