import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Input, Label, Row } from "reactstrap";
import FeatherIcon from "feather-icons-react";
import auth from "../assets/images/auth-bg.png";
import logoDark from "../assets/images/newDark.png";
import Footer from "../component/Footer/Footer";
export default class PswForget extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="bg-account-pages vh-100 d-flex align-items-center bg-center position-relative" style={{ background: `url(${auth})` }}>
          <Container>
            <Row className="justify-content-center">
              <Col md={6}>
                <div className="bg-white shadow" style={{ width: "100%" }}>
                  <div className="p-4">
                    <div className="text-center mt-3">
                      <Link to="/">
                        <img src={logoDark} alt="" className="logo-dark" height="30" />
                      </Link>
                      <p className="text-muted mt-2">Reset Password</p>
                    </div>
                    <div className="p-3">
                      <div className="alert alert-warning text-center" role="alert">
                        Enter your email address and we'll send you an email with instructions to reset your password.
                      </div>
                      <form action="#" method="get" className="av-invalid">
                        <div>
                          <Label htmlFor="email" className="form-label">
                            Email
                          </Label>
                          <Input
                            name="email"
                            required=""
                            placeholder="Enter Email"
                            id="email"
                            type="email"
                            className="form-control"
                            defaultValue=""
                          />
                        </div>
                        <div className="d-grid mt-3">
                          <button
                            type="submit"
                            className="btn btn-primary btn-sm"
                          >
                            Reset your Password
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="text-center mt-4">
                  <h3>EGMS Platform</h3>
                  <p className="text-muted"> What happens after you change your password
                    If you change or reset your password, you’ll be signed out everywhere except:

                    Devices you use to verify that it's you when you sign in.
                    Some devices with third-party apps that  <br></br>
                    Learn how to remove an app's access to your account.
                    Helpful home devices that you've given account access.
                    Learn how to unlink these devices from your Google Account.
                    Fix problems with your password
                    If you're having trouble resetting your password or can’t sign in to your account, get more help.</p>
                </div>
                <ul className="list-inline pt-4 ">
                  <li className="list-inline-item me-3">
                    <Link
                      to="#"
                      className="social-icon icon-mono avatar-xs rounded-circle">
                      <i>
                        <FeatherIcon icon="facebook" className="icon-xs" />
                      </i>{" "}
                    </Link>
                  </li>
                  <li className="list-inline-item me-3">
                    <Link
                      to="#"
                      className="social-icon icon-mono avatar-xs rounded-circle"
                    >
                      <i>
                        <FeatherIcon icon="twitter" className="icon-xs" />
                      </i>{" "}
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      to="#"
                      className="social-icon icon-mono avatar-xs rounded-circle"
                    >
                      <i>
                        <FeatherIcon icon="instagram" className="icon-xs" />
                      </i>{" "}
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}