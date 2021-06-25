import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import Footer from './components/footer';
import BottomFooter from './components/BottomFooter';
import './css/about.css';
import office from './office.jpg';
import bathtub from './bathtub.jpg';
import wall from './wall.jpg';
const About = () => {
    return (
        <>
            <Container className="about " fluid="true" >
                <Row className="overlay_about   d-flex align-items-center ">
                    <Col md='6 ml-5'>
                        <h1 className="   who">
                            About Me
                        </h1>
                        <p>
                            You can use a few enticing words and flaunt your <br /> capabilities that will attract future clients and encourage <br />   them to hire you right away.
                        </p>

                    </Col>


                </Row>
            </Container  >
            <Container className="mt-5 mb-5">
                <Row className="mt-5">
                    <Col md="4">
                        <h2>Hi There! I'm Kyle <br /> Mills An Award <br />
                            Winning Interior Designer</h2>


                        <h3 className="mt-5">

                            Follow Me

                        </h3>



                        <p className="mt-5">
                            <i class=" pr-3 fa   fa-facebook-official" aria-hidden="true"></i>
                            <i class=" px-3 fa   fa-twitter" aria-hidden="true"></i>
                            <i class=" px-3 fa   fa-youtube-play" aria-hidden="true"></i>
                            <i class=" px-3 fa   fa-instagram" aria-hidden="true"></i>
                            <i class=" px-3 fa   fa-linkedin-square" aria-hidden="true"></i>


                        </p>

                    </Col>
                    <Col md="6">
                        <p>
                            A descriptive paragraph that tells clients how good you are and proves that you are the best choice that they’ve made. This paragraph is also for those who are looking out for a reliable interior designer.
                        </p>
                        <p>
                            You can use a few enticing words and flaunt your capabilities that will attract future clients and encourage them to hire you right away.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col md="7">

                        <h3>
                            <b>
                                Great Attention To Detail
                            </b>
                        </h3>
                        <h4>
                            <b>

                                I Innovate And Bring New Possibilities In The Interior Design Of Each House
                            </b>
                        </h4>
                        <p>

                            I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </Col>
                    <Col md="4">
                    </Col>
                    <Col md="4"> <img className="img-fluid mt-3" src={office} alt="" /></Col>
                    <Col md="4"> <img className="img-fluid mt-3" src={bathtub} alt="" /></Col>
                    <Col md="4"> <img className="img-fluid mt-3" src={wall} alt="" /></Col>
                    <Col md="4" className="mt-5">
                        <h3>
                            <b>
                                I'm Specialized In The Management Of Interior Design & Furniture Projects
                            </b>
                        </h3>
                    </Col>
                    <Col md="4" className="mt-5">
                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                        </p>
                    </Col>
                    <Col md="4" className="mt-5">
                        <p>
                            amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore.</p>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt
                        </p>
                    </Col>
                </Row>
            </Container>
            <Footer />
            <BottomFooter />
        </>
    )
}

export default About
