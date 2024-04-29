import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import { ReactComponent as CheckCircleIcon } from "../assets/images/icon/approved-file-svgrepo-com (1).svg";
import { ReactComponent as UserRegister } from "../assets/images/icon/registration-svgrepo-com.svg";
import { ReactComponent as BookmakerRegister } from "../assets/images/icon/agreement-contract-a4-paper-svgrepo-com.svg";
import TimelineFilled from "./TimelineFilled";


//import icon
import FeatherIcon from "feather-icons-react";
import SupplierSteps from './StepCircle'
import StepCircle from "./StepCircle";
import Guidelines from "../pages/Guidelines";
export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false, // initialize state variable to false
    };
  }

  handleShowMore = () => {
    this.setState({ showMore: true }); // set state variable to true when button is clicked
  };

  render() {
    return (
      <React.Fragment>
        <section className="section1" id="services">

          <Container>
        <section className="section1" id="services">

          {/* <Row className="justify-content-center mb-4">
            <Col lg={12} className="text-center">
              <h2 className="fw-bold">STEPS TO GET YOUR LICENSE</h2>
            </Col>
          </Row>
          <Row className="justify-content-center step-row">
            <Col lg={4} className="text-center">
              <StepCircle color="#6c757d" 
              icon={<UserRegister />}
              title="Sign Up" text="Create your account" />
            </Col>
            <Col lg={4} className="text-center step-arrow">
              <StepCircle color="#28a745" 
              title="Bookmaker "
              icon={<BookmakerRegister />}
              
               text="Register your organization" />
            </Col>
            <Col lg={4} className="text-center">
            <StepCircle
              color="#17a2b8"
              icon={<CheckCircleIcon />}
              title="Get Approved"
              text="Great! You are approved"
            />
          </Col>
          </Row> */}
          </section>
            <Row>
              <Col lg={4}>
                <div className="service-box text-center px-4 py-5 position-relative mb-4 ">
                  <div className="service-box-content p-4">
                    <div className="icon-mono service-icon avatar-md mx-auto mb-4">
                      <i>
                        <FeatherIcon icon="user-plus" />
                      </i>
                    </div>
                    <h4 className="mb-3 font-size-22 license-approval-title ">
                     License Registration
                    </h4>
                    <p className="text-muted mb-0">
                    EGMS makes it easy for sports betting companies to sign up and register for an account. Once an account is created, companies can start adding their business and services to the platform.
                    </p>
                  </div>
                </div>
              </Col>

          
              <Col lg={4}>
                <div className="service-box text-center px-4 py-5 position-relative mb-4 active">
                  <div className="service-box-content p-4">
                    <div className="icon-mono service-icon avatar-md mx-auto mb-4">
                      <i>
                        <FeatherIcon icon="check-circle" />
                      </i>
                    </div>
                    <h4 className="mb-3 font-size-22 license-approval-title">License Renewal</h4>
                    {/* <div className={this.state.showMore ? "" : "d-none"}> */}
                      <p className="text-muted mb-0">
                        EGMS allows sports betting companies to apply for and
                        receive license approval from the NLA. This process is
                        streamlined and efficient, and companies can track
                        their application status.
                      </p>
                    </div>
                    {/* <button
                      className="btn btn-link"
                      onClick={this.handleShowMore}
                    >
                      Read More
                    </button> */}
                  {/* </div> */}
                </div>
              </Col>

              
              <Col lg={4}>
                <div className="service-box text-center px-4 py-5 position-relative mb-4">
                  <div className="service-box-content p-4">
                    <div className="icon-mono service-icon avatar-md mx-auto mb-4">
                      <i>
                        <FeatherIcon icon="phone" />
                      </i>
                    </div>
                    <h4 className="mb-3 font-size-22 license-approval-title">Customer Support and Complaints </h4>
                    <p className="text-muted mb-0">
                      EGMS provides sports betting companies with 24/7 customer
                      support. This support is available via phone, email, and
                      chat. Complaints regarding a betting system are recived and processed by NLA{" "}
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
        <Guidelines />

          </Container>
        </section>
      </React.Fragment>
    );
  }
}