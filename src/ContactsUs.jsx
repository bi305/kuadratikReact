import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import Footer from './components/footer';
import BottomFooter from './components/BottomFooter';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './css/contact.css';
const ContactsUs = () => {
    return (
        <>
            <Container className="contact_bg " fluid="true" >
                <Row className="overlay_contact   d-flex align-items-center ">
                    <Col md='12'>
                        <h1 className="text-center  who">

                            Contact Us
                        </h1>

                    </Col>
                </Row>
            </Container  >
            <Container className="mt-5">
                <Row>
                    <Col md="6">
                        <h1 className="my-5">  We're Ready, Let's Talk.</h1>
                        <Form>
                            <FormGroup>

                                <Input type="text" id="exampleEmail" placeholder="Name" />
                            </FormGroup>
                            <FormGroup>

                                <Input type="email" id="examplePassword" placeholder="E-mail" />
                            </FormGroup>
                            <FormGroup>

                                <Input type="text" id="examplePassword" placeholder="Subject" />
                            </FormGroup>
                            <FormGroup>

                                <Input type="textarea" id="exampleText" placeholder="Message" />
                            </FormGroup>

                            <Button>Submit</Button>
                        </Form>
                    </Col>
                    <Col md="6">
                        <h1 className="my-5">
                            Contact Details
                        </h1>
                        <p style={{ fontSize: '13px' }}>
                            <b>

                                Address
                            </b>
                        </p>
                        <p>

                            69-130 Ling Road, Toronto ON M1E 4V9
                        </p>
                        <p style={{ fontSize: '13px' }}>
                            <b>

                                Email Us
                            </b>
                        </p>
                        <p>
                            admin@kuadratik.com
                        </p>
                        <p style={{ fontSize: '13px' }}>
                            <b>

                                Call Us
                            </b>
                        </p>
                        <p>
                            +1 647-470-6922
                        </p>
                        <p>
                            <i class="mr-3 fa-2x fa fa-facebook-official" aria-hidden="true"></i>
                            <i class="mx-3 fa-2x fa fa-twitter-square" aria-hidden="true"></i>
                            <i class="mx-3 fa-2x fa fa-google-plus-square" aria-hidden="true"></i>

                        </p>
                    </Col>
                </Row>
            </Container>
            <Footer />
            <BottomFooter />

        </>
    )
}

export default ContactsUs
