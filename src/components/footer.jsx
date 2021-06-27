import { Container, Row, Col } from 'reactstrap'
import '../css/footer.css';

const footer = () => {
    return (
        <div>
            <Container className=" mt-5">
                <Row>
                    <Col md="12 my-5">
                        <h1 className="get">
                            New York address

                        </h1>
                    </Col>
                    <Col md="4">
                        <Row>

                            <Col md="12 my-5 ">
                                <p>You can use a few enticing words and flaunt your capabilities that will attract future clients and encourage them to hire you right away.</p>
                            </Col>
                            <Col md="12 ">
                                <b>
                                    <span className="border-bottom">

                                        Let's Talk <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                    </span>

                                </b>

                            </Col>
                        </Row>
                    </Col>
                    <Col md="4">
                        <Row>
                            <Col md="12 mt-5 mb-4">
                                <h3 className="pb-3">

                                    Contact Details
                                </h3>
                                <p>

                                    <b>

                                        Kyle Mills
                                    </b>
                                </p>


                            </Col>
                            <Col md="12">
                                <p>
                                    Phone:
                                </p>
                                <p>

                                    <b>

                                        +1 910-626-85255
                                    </b>
                                </p>


                            </Col>
                            <Col md="12">
                                <p>
                                    Email:

                                </p>
                                <p>
                                    <b>

                                        contact@hello.com
                                    </b>
                                </p>

                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col md="12 my-5 ">
                                <h3>
                                    My Location
                                </h3>
                            </Col>

                            <Col md="12 mt-5">

                                <p>
                                    123 Fifth Avenue,<br />
                                    New York, NY 10160

                                </p>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default footer
