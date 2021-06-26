import {
    Container,
    Row,
    Col,


} from 'reactstrap';
import back from './math.jpg'
import problem from './problem.jpg'
import fantasy from './fantasy.jpg'
import girls from './girls.jpg'
import germination from './germination.png'
import placeholder from './placeholder.png'
import section from './section.jpg'
import Footer from './components/footer';
import BottomFooter from './components/BottomFooter';
import ScrollAnimation from 'react-animate-on-scroll';

import './home.css'
const Home = () => {
    return (
        <>
            <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut'>
                <Container className="main " fluid="true" >
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
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut'>
                <Container className="bg-light  my-5" fluid >
                    <Row className="mt-5">
                        <Col md={6}>
                            <ScrollAnimation animateIn="bounceInLeft">
                                <h1 className="text-center mt-5 p-5">

                                    We Are A Solutions Outfit
                                </h1>
                            </ScrollAnimation>
                        </Col>
                        <Col md={6}>
                            <ScrollAnimation animateIn="bounceInRight">

                                <img className="img-fluid" src={problem} />
                            </ScrollAnimation>
                        </Col>
                    </Row>
                </Container>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut'>
                <Container className="bg-light  " fluid >
                    <Row className="mt-5">
                        <Col md={6} className="p-4">


                            <img className="img-fluid w-75" src={fantasy} />

                        </Col>
                        <Col md={6}>
                            <h1 className="text-center mt-5 p-5 ">
                                Creating Ideas...
                            </h1>
                        </Col>
                    </Row>
                </Container>

            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut'>
                <Container className="bg-light  my-5" fluid>
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
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut'>
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
                                <img src={germination} className="img-fluid w-75 rounded " />
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
                                <img src={placeholder} className="img-fluid w-75 rounded " />
                            </Col>
                        </Row>
                    </Container>

                </div>

            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut'>
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
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut'>

                <Footer />
            </ScrollAnimation>

            <BottomFooter />
        </>

    )
}

export default Home
