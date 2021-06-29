import {
  Container,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import "../css/bottomNav.css";
const BottomFooter = () => {
  return (
    <>
      {/* < Navbar className="pt-4" color="success" expand="xs" style={{ backgroundImage: 'linear-gradient(15deg, #13547a 0%, #80d0c7 100%)' }}> */}

      <Container
        className="py-4 center "
        style={{
          backgroundColor: "#2a2a72",
          backgroundImage: "linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)",
        }}
        fluid
      >
        <Row>
          <Col md="6 ">
            <span style={{ color: "white" }}>Copyright © 2021 kuadratik </span>
          </Col>

          <Col md="6">
            <Row>
              <Col md="2">
                {" "}
                <Link to="/" className="link">
                  Home
                </Link>
              </Col>
              <Col md="3">
                {" "}
                <Link to="/who-we-are" className="link">
                  Who We Are
                </Link>{" "}
              </Col>
              <Col md="3">
                {" "}
                <Link to="/products" className="link">
                  Our Products
                </Link>
              </Col>
              <Col md="3">
                {" "}
                <Link to="contact-us" className="link">
                  Contact Us
                </Link>
              </Col>
            </Row>
            {/* <Nav className="ml-auto" navbar>



                            <NavItem>
                                <NavLink href="/" >

                                    Home

                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/who-we-are">

                                    Who We Are
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Products">
                                    Our Products
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href=" ">
                                    Contact Us
                                </NavLink>
                            </NavItem>


                        </Nav> */}
          </Col>
        </Row>
      </Container>

      {/* </Navbar > */}
    </>
  );
};

export default BottomFooter;
