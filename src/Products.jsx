import {
    Container,
    Row,
    Col,


} from 'reactstrap';
import './css/products.css'
import Footer from './components/footer';
import BottomFooter from './components/BottomFooter';
import ScrollAnimation from 'react-animate-on-scroll';

const Products = () => {
    return (
        <>

            <Container className="bg2" fluid="true" >
                <Row className="overlay text-center d-flex align-items-center">
                    <Col md='12'>

                        <h1 className="text-center  who">
                            Our
                            <br />
                            Products

                        </h1>

                    </Col>
                </Row>
            </Container  >
            <Container className="my-5 ">
                <Row>
                    <ScrollAnimation animateIn="bounceInRight">
                        <Col md="12">

                            <p>
                                Digital Solution
                            </p>
                            <h3>
                                <a className="glow" href="https://www.reeveue.com">
                                    ReeVeue
                                </a>
                            </h3>
                            <p>
                                A solution to help consumers make informed non-bias choices, based on data
                            </p>
                        </Col>

                    </ScrollAnimation>
                </Row>
            </Container>
            <Container className="my-5">
                <Row>
                    <ScrollAnimation animateIn="bounceInRight">
                        <Col md="12">

                            <p>

                                Digital Solution



                            </p>
                            <h3>

                                <a className="glow" href="https://www.jolificate.com">
                                    Jolificate
                                </a>
                            </h3>
                            <p>
                                A platform where users can celebrate each other – create a theme with different boards, add friends/families to board, users can add messages, upload pictures/videos, save, edit, share and publish board with celebrant.
                            </p>
                        </Col>

                    </ScrollAnimation>
                </Row>
            </Container>
            <Container className="my-5">
                <Row>
                    <ScrollAnimation animateIn="bounceInRight">
                        <Col md="12">

                            <p>

                                eCommerce Marketplace



                            </p>
                            <h3>
                                <a className="glow" href="https://www.Eki.market">
                                    Eki
                                </a>

                            </h3>
                            <p>

                                This is an Online marketplace where food suppliers, shippers and food consumers meet to transact business. The consumer logs into the marketplace to buy food items from the supplier and picks a shipping agent to deliver the purchased items.

                            </p>
                        </Col>

                    </ScrollAnimation>

                </Row>
            </Container>

            <Container className="my-5">
                <Row>
                    <ScrollAnimation animateIn="bounceInRight">
                        <Col md="12">

                            <p>Social Media
                            </p>
                            <h3>
                                <a className="glow" href="https://www.fusedtube.com">
                                    Fusedtube
                                </a>

                            </h3>
                            <p>
                                Designed to mend broken homes and heal marriages
                            </p>
                        </Col>

                    </ScrollAnimation>
                </Row>
            </Container>
            <Container className="my-5">
                <Row>
                    <ScrollAnimation animateIn="bounceInRight">
                        <Col md="12">

                            <p>

                                Media

                            </p>
                            <h3>

                                <a className="glow" className="glow" href="">
                                    Face Of Diversity
                                </a>

                            </h3>
                            <p>
                                Using media technology to showcase and bring the Canadian cultural diversity, values and socio-political heritage to lime light
                            </p>
                        </Col>

                    </ScrollAnimation>
                </Row>
            </Container>
            <Footer />
            <BottomFooter />
        </>
    )
}
// 
// Eki
// This is an Online marketplace where food suppliers, shippers and food consumers meet to transact business. The consumer logs into the marketplace to buy food items from the supplier and picks a shipping agent to deliver the purchased items.

export default Products
