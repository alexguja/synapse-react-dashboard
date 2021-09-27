import { Row, Col, Container } from "react-bootstrap";
import HeroSection from "../../components/Hero/Hero";
import { StyledTitle, StyledText, StyledBody } from "./HomeStyles";

const Home = () => {
    return (
        <>
          <HeroSection/>
          <Container>
             <Row xs={1} md={2} className="g-4 mb-4">
                
                <Col>
                    {/* <Card.Img variant="top" src="holder.js/20px20" /> */}
                    <StyledBody>
                      <StyledTitle>Hardware</StyledTitle>
                      <StyledText>
                      Highly accurate load-monitoring hardware for a wide range of applications. Our cells come integrated into North Sails, Future Fibres, Southern Spars and Hall Spars OEM parts, or as stand-alone additions to your rig.
                      </StyledText>
                    </StyledBody>
                </Col>

                <Col>
                    {/* <Card.Img variant="top" src="holder.js/20px20" /> */}
                    <StyledBody>
                      <StyledTitle>Hub</StyledTitle>
                      <StyledText>
                      The beating heart of the system, the hub is the compact on-board server which makes Synapse the most sophisticated, & reliable load sensing system available. Its advanced connective capacities drive Synapse systems to the forefront of sailing innovation.
                      </StyledText>
                    </StyledBody>
                </Col>

                <Col>
                    {/* <Card.Img variant="top" src="holder.js/20px20" /> */}
                    <StyledBody>
                      <StyledTitle>Dashboard</StyledTitle>
                      <StyledText>
                      Making professional level data accessible to all kinds of sailors, the dashboard is the user-friendly online console that allows you to monitor, log and analyse every pixel of useful information.
                      </StyledText>
                    </StyledBody>
                </Col>

                <Col>
                    {/* <Card.Img variant="top" src="holder.js/20px20" /> */}
                    <StyledBody>
                      <StyledTitle>Accessible Data</StyledTitle>
                      <StyledText>
                      Synapse Dashboard brings data once reserved for engineers or racing teams with a data professional to a much wider audience, presenting it in the simplest, most useful formats possible.
                      </StyledText>
                    </StyledBody>
                </Col>
 
              </Row>
          </Container>
        </>
    )
};

export default Home;
