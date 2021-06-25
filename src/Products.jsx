import {
    Container,
    Row,
    Col,


} from 'reactstrap';
import './css/products.css'
import Footer from './components/footer';
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
                    <Col md="12">

                        <p>
                            Digital Solution
                        </p>
                        <h3>

                            ReeVeue
                        </h3>
                        <p>
                            A solution to help consumers make informed non-bias choices, based on data
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container className="my-5">
                <Row>
                    <Col md="12">

                        <p>

                            Health Solution
                        </p>
                        <h3>


                            PhytoScience
                        </h3>
                        <p>
                            A natural health solution made from fruits, vegetables and spices to repair, rebuild and rejuvenate damaging cells
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container className="my-5">
                <Row>
                    <Col md="12">

                        <p>Social Media
                        </p>
                        <h3>


                            Fusedtube
                        </h3>
                        <p>
                            Designed to mend broken homes and heal marriages
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container className="my-5">
                <Row>
                    <Col md="12">

                        <p>

                            Media

                        </p>
                        <h3>


                            Face Of Diversity

                        </h3>
                        <p>
                            Using media technology to showcase and bring the Canadian cultural diversity, values and socio-political heritage to lime light
                        </p>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default Products
