import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

// Import FeatherIcon
import FeatherIcon from "feather-icons-react";

// Import Feature Image
import Background from "../assets/images/demos.png";
import features_img1 from "../assets/images/img-3.png";
import dot_img from "../assets/images/dot-img.png";
import features_img2 from "../assets/images/features-img.png";

class Feature extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="features">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={7} className="text-center">
                <h2 className="fw-bold">EGMS Features</h2>
                <p className="text-muted">
                  EGMS is an electronic gaming management system owned and
                  managed by the Ethiopian National Lottery Administration
                  (NLA). It is a comprehensive platform that provides sports
                  betting companies with a variety of features to help them
                  manage their businesses effectively.
                </p>
              </Col>
            </Row>

            <Row className="align-items-center mb-5">
              <Col md={5} className="order-2 order-md-1 mt-md-0 mt-5">
                <h2 className="mb-4">
                  EGMS: Electronic Gaming Management System
                </h2>
                <p className="text-muted mb-5">
                  EGMS is a powerful and comprehensive platform that can help
                  sports betting companies to manage their businesses
                  effectively. If you are a sports betting company, then EGMS is
                  the perfect solution for you. Sign up to learn more about EGMS
                  and how it can help you grow your business.
                </p>
              </Col>
              <Col md={6} className="ms-md-auto order-1 order-md-2">
                <div className="position-relative">
                  <div className="ms-5 features-img">
                    <img
                      src={features_img1}
                      alt=""
                      className="img-fluid d-block mx-auto rounded shadow"
                    />
                  </div>
                  <img src={dot_img} alt="" className="dot-img-left" />
                </div>
              </Col>
            </Row>
            <Row className="align-items-center section pb-0">
              <Col md={6}>
                <div className="position-relative mb-md-0 mb-5">
                  <div className="me-5 features-img">
                    <img
                      src={features_img2}
                      alt=""
                      className="img-fluid d-block mx-auto rounded shadow"
                    />
                  </div>
                  <img src={dot_img} alt="" className="dot-img-right" />
                </div>
              </Col>
              <Col md={5} className="ms-md-auto">
                <h2 className="mb-4">
                  Sports Betting Branches Management
                </h2>
                <p className="text-muted mb-5">
                EGMS empowers sports betting companies to efficiently manage their branches. Companies can easily add new branches through the system, ensuring accurate and up-to-date information about their network of locations. This feature enables effective coordination and expansion of operations.
                
                To ensure data integrity and minimize the risk of data loss, EGMS offers multiple branch backup functionality. This means that the system automatically backs up data from all branches in real time, providing a secure and reliable backup solution. In the event of any unforeseen circumstances, this feature ensures that critical business information remains protected.
                </p>
                <Link to="/sign-up" className="btn btn-primary">
                  Learn more{" "}
                  <i>
                    <FeatherIcon icon="arrow-right" className="icon-xs ms-2" />
                  </i>
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section bg-gradient-primary">
          <div
            className="bg-overlay-img"
            style={{ background: `url(${Background})` }}
          ></div>
          <Container>
            <Row className="justify-content-center">
              <Col lg={8}>
                <div className="text-center">
                  <h1 className="text-white mb-4">
                    Register and Get your License
                  </h1>
                  <p className="text-white mb-5 font-size-16">
                    To obtain a betting license, interested parties must
                    typically submit an application , providing detailed
                    information about their business model, financial stability,
                    security measures, and responsible practices. Obtaining a
                    betting license demonstrates a commitment to operating
                    within the boundaries of the law, protecting customers, and
                    promoting a fair and transparent environment.
                  </p>
                  <Link to="#" className="btn btn-lg btn-light">
                    Ask for EGMS Demo
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Feature;
