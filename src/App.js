import { useState } from 'react'
import './app.css'
import back from './math.jpg'
import problem from './problem.jpg'
import fantasy from './fantasy.jpg'
import girls from './girls.jpg'
import germination from './germination.png'
import placeholder from './placeholder.png'
import section from './section.jpg'
import Footer from './components/footer'
import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div >
      < Navbar className="pt-4" expand="md" style={{
        backgroundColor: 'rgb(7 5 5)',
        opacity: '0.55 ',
        color: 'white',

      }} >
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href=" ">Who We Are</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href=" ">Our Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href=" ">Contact Us</NavLink>
            </NavItem>

          </Nav>

        </Collapse>
      </Navbar >


      <Container className="main" fluid="true" >
        <Row className="overlay text-center d-flex align-items-center">
          <Col md='12'>
            <h3 className="text-center  k">
              <span>K...is for</span>  <br />
            </h3>
            <spna className="k2">
              Kuadratik
            </spna>
          </Col>


        </Row>
      </Container  >
      <Container fluid>
        <Row className="mt-5">
          <Col md={6}>
            <h1 className="text-center mt-5 p-5">

              We Are A Solutions Outfit
            </h1>
          </Col>
          <Col md={6}>
            <img className="img-fluid" src={problem} />
          </Col>
        </Row>
      </Container>
      <Container  >
        <Row className="mt-5">
          <Col md={6}>


            <img className="img-fluid" src={fantasy} />

          </Col>
          <Col md={6}>
            <h1 className="text-center mt-5 p-5">
              Creating Ideas...
            </h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="mt-5">
          <Col md={6}>
            <h1 className="text-center mt-5 p-5">

              ...Building Great Products
            </h1>
          </Col>
          <Col md={6}>
            <img className="img-fluid" src={girls} />
          </Col>
        </Row>
      </Container>
      <div style={{ backgroundColor: 'white' }} >

        <Container className="my-5"  >
          <Row className="mt-5">
            <Col md={12} className="text-center">
              <h1 className=" playbook">
                <span>

                  Playbook
                </span>
              </h1>
            </Col>
            <Col md={6}>
              <h2>
                Sprout


              </h2>
              <p>

                Nurture ideas from inception to growth
              </p>
            </Col>
            <Col md={6}>
              <img src={germination} className="img-fluid" />
            </Col>

            <Col md={6} className="mt-5">
              <h2>
                Agile

              </h2>
              <p>

                Customer-driven product
              </p>
            </Col>
            <Col md={6} className="mt-5">
              <img src={placeholder} className="img-fluid" />
            </Col>
          </Row>
        </Container>

      </div>
      <div style={{
        backgroundImage: `url(${section})`,
        height: '100vh',
        width: '100%',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}>
        <Row style={{
          backgroundColor: 'black',
          opacity: '0.55 ',
          color: 'white',
          height: '100vh',
          width: '100%',
        }} >
          <Col md="6">
          </Col>
          <Col md="6" className="d-flex    align-items-center" >
            <h1 className="">

              Explore Great Solutions
              <p style={{ fontSize: '15px', lineHeight: '2', marginTop: '20px' }}>
                See one of our great products



              </p>
              <a href="">
                Learn More
              </a>

            </h1>



          </Col>

        </Row>
      </div >
      <Footer />

    </div>

  );
}

export default App;
