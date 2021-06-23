import { Container, Row, Col } from 'reactstrap'

const footer = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md="4">
                        <Row>
                            <Col md="12">
                                <h1>
                                    Get In Touch
                                </h1>
                            </Col>
                            <Col md="12">
                                <p>You can use a few enticing words and flaunt your capabilities that will attract future clients and encourage them to hire you right away.</p>
                            </Col>
                            <Col md="12">
                                Let's Talk
                            </Col>
                        </Row>
                    </Col>
                    <Col md="4">
                        <Row>
                            <Col md="12">
                                <h3>

                                    Contact Details
                                </h3>
                                <p>

                                    Kyle Mills
                                </p>


                            </Col>
                            <Col md="12">
                                <p>
                                    Phone:
                                </p>
                                <p>

                                    +1 910-626-85255
                                </p>


                            </Col>
                            <Col md="12">
                                <p>
                                    Email:

                                </p>
                                <p>

                                    contact@hello.com
                                </p>

                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <h3>
                                My Location
                            </h3>
                            <p>
                                123 Fifth Avenue,
                                New York, NY 10160

                            </p>
                            <h3>

                                Follow Me

                            </h3>
                            <p></p>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default footer
