import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import './css/WhoWEAre.css'
import paper from './paper.jpg';
import Footer from './components/footer';
import ScrollAnimation from 'react-animate-on-scroll';
import BottomFooter from './components/BottomFooter';
const WhoWeAre = () => {
    return (
        <>
            <Container className="bg  " fluid="true" >
                <Row className="overlay text-center d-flex align-items-center ">
                    <Col md='12'>
                        <ScrollAnimation animateIn='fadeIn'
                            animateOut='fadeOut'>

                            <h1 className="text-center  who">
                                Who
                                <br />
                                We
                                Are
                            </h1>
                        </ScrollAnimation>

                    </Col>


                </Row>
            </Container  >
            <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut'>
                <Container  >
                    <Row className="my-5 bg-white" >
                        <Col md="6" >
                            <h1 className="mt-5" style={{ color: 'linear-gradient(15deg, #13547a 0%, #80d0c7 100%)' }}>

                                Our Mission
                            </h1>

                            <p className="mt-5 " >
                                We are united by a single goal: to create digital solutions that will <br /> elevate the customer experience, shape the cultural landscape and <br /> get people connected
                            </p>
                        </Col>
                        <Col md="6" >

                            <img src={paper} className="img-fluid rounded " />
                        </Col>
                    </Row>
                </Container>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut'>
                <Container>
                    <Row className="my-5 " >
                        <Col md="6 my-5" >
                            <h1 className="my-5">
                                Extraordinary Experiences
                            </h1>
                            <p>
                                We are a curated team of brilliant experts driven by passion,<br /> enthusiasm, innovation and determination
                            </p>
                        </Col>
                        <Col md="6 my-5" >

                            <h1 className="my-5">
                                Our Core Values
                            </h1>
                            <ul>
                                <li> Delivering Value</li>
                                <li> Creative Solution</li>
                                <li> Solving Problems</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>

            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut'>
                <Footer />
            </ScrollAnimation>
            <BottomFooter />
        </>

    )
}

export default WhoWeAre
