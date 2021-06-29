import { Container, Row, Col } from "reactstrap";

import germination from "./germination.png";
import placeholder from "./placeholder.png";
import section from "./section.jpg";
import Footer from "./components/footer";
import BottomFooter from "./components/BottomFooter";
import ScrollAnimation from "react-animate-on-scroll";
import SolutionsOutFit from "./assets/SolutionsOutFit.jpg";
import CreatingIdeas from "./assets/CreatingIdeas.jpg";
import BuildingGreatProducts from "./assets/BuildingGreatProducts.jpg";
import Sprout from "./assets/Sprout.jpg";
import CustomerDriven from "./assets/CustomerDriven.jpg";

import "./home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <Container className="main " fluid="true">
          <Row className="overlay text-center d-flex align-items-center">
            <Col md="12">
              <h3 className="text-center  k">
                <span>K...is for</span> <br />
              </h3>
              <spna className="k2">Kuadratik</spna>
            </Col>
          </Row>
        </Container>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <Container
          className=" my-5  text-center "
          style={{ color: "#163bbd" }}
          fluid
        >
          <Row>
            <Col
              md={6}
              className="d-flex justify-content-center align-items-center"
            >
              <ScrollAnimation animateIn="bounceInLeft">
                <h1 className="">We Are A Solutions Outfit</h1>
              </ScrollAnimation>
            </Col>
            <Col md={6}>
              <ScrollAnimation animateIn="bounceInRight">
                <img className="img-fluid" src={SolutionsOutFit} />
              </ScrollAnimation>
            </Col>
          </Row>
        </Container>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <Container style={{ color: "#163bbd" }} fluid>
          <Row>
            <Col md={6}>
              <ScrollAnimation animateIn="bounceInRight">
                <img className="img-fluid" src={CreatingIdeas} />
              </ScrollAnimation>
            </Col>
            <Col
              md={6}
              className="d-flex justify-content-center align-items-center"
            >
              <ScrollAnimation animateIn="bounceInLeft">
                <h1 className="">Creating Ideas...</h1>
              </ScrollAnimation>
            </Col>
          </Row>
        </Container>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <Container className="  my-5" style={{ color: "#163bbd" }} fluid>
          <Row className="mt-5 ">
            <Col
              md={6}
              className="d-flex justify-content-center align-items-center "
            >
              <ScrollAnimation animateIn="bounceInLeft">
                <h1 className="">...Building Great Products</h1>
              </ScrollAnimation>
            </Col>
            <Col md={6}>
              <ScrollAnimation animateIn="bounceInRight">
                <img
                  className="img-fluid"
                  style={{
                    height: "450px",
                    width: "100%",
                    objectFit: "center",
                  }}
                  src={BuildingGreatProducts}
                />
              </ScrollAnimation>
            </Col>
          </Row>
        </Container>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <div style={{ backgroundColor: "white" }}>
          <Container className="my-5">
            <Row className="mt-5">
              <Col md={12} className="text-center">
                <ScrollAnimation animateIn="flipInX">
                  <h1 className=" playbook">
                    <span>Playbook</span>
                  </h1>
                </ScrollAnimation>
              </Col>
              <Col md={6}>
                <h2 style={{ color: "#163bbd" }}>Sprout</h2>
                <p className="text-danger">
                  Nurture ideas from inception to growth
                </p>
              </Col>
              <Col md={6}>
                <img src={Sprout} className="img-fluid w-75 rounded " />
              </Col>

              <Col md={6} className="mt-5">
                <h2 style={{ color: "#163bbd" }}>Agile</h2>
                <p className="text-danger">Customer-driven product</p>
              </Col>
              <Col md={6} className="mt-5">
                <img src={CustomerDriven} className="img-fluid w-75 rounded " />
              </Col>
            </Row>
          </Container>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" className="mb-5" animateOut="fadeOut">
        <div
          style={{
            backgroundImage: `url(${section})`,
            height: "100vh",
            width: "100%",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        >
          <Row
            style={{
              backgroundColor: "black",
              opacity: "0.55 ",
              color: "white",
              height: "100vh",
              width: "100%",
            }}
          >
            <Col md="6"></Col>
            <Col md="6" className="d-flex    align-items-center">
              <h1 className="">
                Explore Great Solutions
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "2",
                    marginTop: "20px",
                  }}
                >
                  See one of our great products
                </p>
                <Link to="/products">Learn More</Link>
              </h1>
            </Col>
          </Row>
        </div>
      </ScrollAnimation>
      {/* <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <Footer />
      </ScrollAnimation> */}

      <BottomFooter />
    </>
  );
};

export default Home;
