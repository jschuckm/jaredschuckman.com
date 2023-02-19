import Title from "./Title";
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import gitIcon from "../assets/GitHub-Mark.png"

function Projects() {
  return (
        <div>
            <Title text="Projects" altText="." divHeight="25vh" fontSize="65px"/>
            <Container style={{display:"flex",justifyContent:"center",flexDirection: "column", marginTop:"5em",textAlign:"left"}}>
                <Row>
                    <Col>
                        <h2 style={{fontFamily:"Montserrat",fontWeight:"700",letterSpacing:"0px",fontSize:"x-large"}}><a style={{color:"black",}}href="https://github.com/jschuckm?tab=repositories">Github Profile<img style={{width:"30px",height:"30px"}} src={gitIcon}></img></a></h2>
                        <h2 style={{fontFamily:"Montserrat",fontWeight:"700",letterSpacing:"0px",fontSize:"x-large"}}><a style={{color:"black"}} href="https://github.com/jschuckm/CowChips4Charity">CowChips4Charity Senior Design Project   <img style={{width:"30px",height:"30px"}} src={gitIcon}></img></a></h2>
                        <p style={{fontFamily:"Montserrat",fontWeight:"300",letterSpacing:"0.02em",color:"#818181",fontSize:"22px",lineHeight:"30px",textAlign:"left"}}>
                            The senior design project that I worked on was an online game for the BooRadleyFoundation that was made in order to replace a fundraising event where donors would pick a square they believed a cow would poop on in a field and if the cow pooped on that square the donor would win a prize. Our application has this functionality but virtually. The application allows a user to sign up and donate to a game and then after donating they are able to watch an animation with the cow. 
                            <br /><br />
                            In this project I worked as a full stack developer and was the lead on the administration panel and made significant contributions to the front end flow of the application. I also implemented google analytics on the application in order to track users. Through this project I gained experience working with Node.js, MongoDB, and Vue.js. 
                            <br /><br />
                            Our project earned second place among ECPE Senior Design Projects. You can view the application at www.cowchips4charity.com and can view our senior design documents at https://sdmay21-08.sd.ece.iastate.edu/.  And if you want to learn more about the BooRadleyFoundation there website can be found here https://www.booradleyfoundation.org/. 
                            <br /><br />
                        </p>

                        <h2 style={{fontFamily:"Montserrat",fontWeight:"700",letterSpacing:"0px",fontSize:"x-large"}}><a style={{color:"black"}} href="https://github.com/jschuckm/EthereumTravelInsurance">Ethereum Travel Insurance Smart Contract<img style={{width:"30px",height:"30px"}} src={gitIcon}></img></a></h2>
                        <p style={{fontFamily:"Montserrat",fontWeight:"300",letterSpacing:"0.02em",color:"#818181",fontSize:"22px",lineHeight:"30px",textAlign:"left"}}>
                            During my distributed systems class I developed a smart contract on the ethereum test network using solidity. This smart contract was tasked to provide travel insurance. A user would pay for travel insurance and if their flight was cancelled due to weather they would be refunded an amount based on the insurance. Web3 was utilized in order to interact with the smart contract and make calls to the national weather service’s weather API in order to automate the process of determining which flights had been cancelled and which users were to be paid. 
                            <br /><br />
                        </p>

                        <h2 style={{fontFamily:"Montserrat",fontWeight:"700",letterSpacing:"0px",fontSize:"x-large"}}>Provisioning Tool For Microsoft Azure Service Bus Queues</h2>
                        <p style={{fontFamily:"Montserrat",fontWeight:"300",letterSpacing:"0.02em",color:"#818181",fontSize:"22px",lineHeight:"30px",textAlign:"left"}}>
                            In the Summer of 2020, I interned with John Deere. My project for the summer was to create an API in order to provision Microsoft Azure Service Bus Queues. These queues are used within John Deere dealer business systems which track orders, inventory, sales, etc. and these queues enable the dealer business systems to communicate with John Deere systems. The reason the api was needed was because these queues were provisioned every time a dealer changes owners or opens. This happens frequently so the api would enable these queues to be created programmatically and eventually automated. During this project I learned a lot about Spring Boot and API development. I also used my previous project the OpenAPI linter in order to lint my OpenAPI specification for this API. 
                            <br /><br />
                        </p>

                        <h2 style={{fontFamily:"Montserrat",fontWeight:"700",letterSpacing:"0px",fontSize:"x-large"}}>Rules For OpenAPI Linter</h2>
                        <p style={{fontFamily:"Montserrat",fontWeight:"300",letterSpacing:"0.02em",color:"#818181",fontSize:"22px",lineHeight:"30px",textAlign:"left"}}>
                            In the Fall of 2019, I worked at the Iowa State University Research Park for John Deere as a part time software developer. I was working on a project which was an OpenAPI specification linter. This linter was needed in order to lint OpenAPI specifications before automated tests were run on the APIs. The tests were based on the OpenAPI specification written by the developer of the API. If the specifications were incorrect it would require modifications in the specification or the test in order for the tests to work. With the linter, a developer creating the specification can see the errors thrown by the rules that I created within the linter and could fix the specification before the tests were run against the API. 
                            <br /><br />
                        </p>
                        
                        <h2 style={{fontFamily:"Montserrat",fontWeight:"700",letterSpacing:"0px",fontSize:"x-large"}}>Google Analytics Dashboard</h2>
                        <p style={{fontFamily:"Montserrat",fontWeight:"300",letterSpacing:"0.02em",color:"#818181",fontSize:"22px",lineHeight:"30px",textAlign:"left"}}>
                            In the summer of 2019, I interned at John Deere within a team working on JDLink applications. These include applications for customers to monitor gas, location, maintenance and many other things for their machines as well as the yield and idle time. There are about 9 different applications within this suite. The usage statistics of these applications such as things like number of users online, users per week, users by device were being monitored using Google Analytics. Google Analytics has a website where you can view the usage of your applications but there is no way to compare between 9 different applications. My task for the summer was to determine if it was possible to compare usage between all of these applications. 
                            <br /><br />
                            I did research and found three possible options. The first was to create a roll up property within Google Analytics which was going to cost more money. Or I could use Google Data Studio for free which can pull data from google analytics and graphs can be created from within Google Data Studio. I ended up doing the free option and was able to create graphs and charts for all necessary historical data.
                            <br /><br />
                            After creating the ability to compare across different applications for historical usage. I then created a live dashboard using html/css/javascript and the Google Analytics live reporting api. This dashboard showed the number of users on each application live as well as a chart displaying the users for each application throughout the work day. I then logged into the website on one of the tv’s next to some of the team’s desks so that they could see the live data throughout the work day. 
                            <br /><br />
                            This project allowed me to gain skills developing a product for a client as well as improve my skills with html/css/javascript. I was able to determine possible solutions to a problem. Decide on the best solution for the clients needs and then implement the solution and receive feedback from the client as I implemented the solution. And add features/changes to the product according to the client’s feedback.      
                            <br /><br />
                        </p>
                   </Col>
                </Row>
            </Container>
        </div>
  );
}

export default Projects;
