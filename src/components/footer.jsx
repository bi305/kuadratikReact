import { Container, Row, Col } from "reactstrap";
import "../css/footer.css";

const Footer = () => {
  return (
    <div>
      <Container
        className=" mt-5 mb-5 p-3"
        style={{
          border: "4px solid #13547a",
          borderRadius: "20px",
        }}
      >
        <h1 className="get">New York Address</h1>
        <Row className="pt-1 pb-3">
          <Col md="4" className=" justify-content-center d-flex flex-column">
            <p>
              You can use a few enticing words and flaunt your capabilities that
              will attract future clients and encourage them to hire you right
              away.
            </p>
            <b>
              <span className="border-bottom" style={{ color: "#13547a" }}>
                Let's Talk <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </span>
            </b>
          </Col>

          <Col md="4 mb-1">
            <h4 style={{ color: "#13547a" }}>Contact Details</h4>
            <div>
              <b>Kyle Mills</b>
            </div>

            <div className="mt-1">
              Phone:<b>+16474706922</b>
            </div>
            <div className="mt-1">
              Email:<b>admin@kuadratik.com</b>
            </div>
          </Col>
          <Col md="4">
            <h3 className="h4  mb-1" style={{ color: "#13547a" }}>
              My Location
            </h3>

            <p>123 Fifth Avenue, New York, NY 10160</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
