import Title from "./Title";
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

function Projects() {
  return (
        <div>
            <Title text="Projects" altText="." divHeight="25vh" fontSize="65px"/>
            <Container style={{display:"flex",justifyContent:"center",flexDirection: "column", marginTop:"5em",textAlign:"left"}}>
                <Row>
                    <Col>
                        <h2 style={{fontFamily:"Montserrat",fontWeight:"700",letterSpacing:"0px",fontSize:"x-large"}}>Google Analytics Dashboard</h2>
                        <p style={{fontFamily:"Montserrat",fontWeight:"300",letterSpacing:"0.02em",color:"#818181",fontSize:"22px",lineHeight:"30px",textAlign:"left"}}>
                        In the summer of 2019 I interned at John Deere within their group that works on the JDLink applications. These include applications for customers to monitor gas, location, maintenance and many other things for their machines as well as the yield and idle time. There are about 9 different applications within this suite. The usage statistics of these applications such as things like number of users online, users per week, users by device was being monitored using google analytics. Google analytics has a website where you can view the usage of your applications but there is no way to compare between 9 different applications. My task for the summer was to determine if it was possible to compare usage between all of these applications.
I did research and found three possible options. The first was to create a roll up property within google analytics which was most likely going to cost more money. Or I could use google data studio for free which can pull data from google analytics and graphs can be created from within google data studio. I ended up doing the free option and was able to create graphs and charts for all necessary historical data.<br /><br />
After creating the ability to compare across different applications for historical usage. I then created a live dashboard using html/css/javascript and the google analytics live reporting api. This dashboard showed the number of users on each application live as well as a chart displaying the users for each application throughout the work day. I then logged into the website on one of the tv’s next to some of the team’s desks so that they could see the live data throughout the work day.<br /><br />

This project allowed me to gain skills developing a product for a client as well as improve my skills with html/css/javascript. I was able to determine possible solutions to a problem. Decide on the best solution for the clients needs and then implement the solution and receive feedback from the client as I implemented the solution. And add features/changes to the product according to the client’s feedback. </p>
                    </Col>
                </Row>
            </Container>
        </div>
  );
}

export default Projects;
