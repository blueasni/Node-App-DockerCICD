import React, { useEffect, useState } from "react";
import FeatherIcon from "feather-icons-react";
import { Col, Container, Form, Input, Label, Row } from "reactstrap";
import contact from "../assets/images/contact.png";
import { Link } from "react-router-dom";

const Complaint = () => {
  const [organizationNames, setOrganizationNames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/OrganizationDetail/get-all")
      .then((response) => response.json())
      .then((data) => {
        const names = data.organizationDetails.map(
          (detail) => detail.organizationname
        );
        setOrganizationNames(names);
      })
      .catch((error) => {
        console.error("Error fetching organization details:", error);
      });
  }, []);

      return (
        <React.Fragment>
          <section className="section" id="contact">
            <Container>
              <Row>
                <Col lg={6}>
                  <div>
                    <Form method="post" name="myForm">
                      <p id="error-msg"></p>
                      <div id="simple-msg"></div>
                      <Row>
                        <Col md={120}>
                          <div className="mb-4">
                            <Label
                              htmlFor="complaintType"
                              className="text-muted form-label"
                            >
                              Complaint Type
                            </Label>
                            <Input
                              type="select"
                              name="complaintType"
                              id="complaintType"
                            >
                              <option>System Delay</option>
                              <option>Branch Opening</option>
                              <option>Branch VAT</option>
                              <option>Error Payment</option>
                              <option>Location Mismatch</option>
                            </Input>
                          </div>

                          <div className="mb-4">
                            <Label
                              htmlFor="complaintFor"
                              className="text-muted form-label"
                            >
                              Complaint For
                            </Label>
                            <Input
                              type="select"
                              name="complaintFor"
                              id="complaintFor"
                            >
                              {organizationNames.map((name) => (
                                <option key={name}>{name}</option>
                              ))}
                            </Input>
                          </div>

                          <div className="mb-4">
                            <Label
                              htmlFor="complaint"
                              className="text-muted form-label"
                            >
                              Complaint
                            </Label>
                            <textarea
                              name="complaint"
                              id="complaint"
                              rows="6"
                              className="form-control"
                              placeholder="Enter complaint..."
                            ></textarea>
                          </div>

                          <div className="mb-4">
                            <Label
                              htmlFor="complaintImage"
                              className="text-muted form-label"
                            >
                              Attach Image
                            </Label>
                            <Input
                              type="file"
                              name="complaintImage"
                              id="complaintImage"
                              className="form-control"
                            />
                          </div>
                          <Link to="#">
                            <button
                              type="submit"
                              name="send"
                              className="btn btn-primary"
                            >
                              Submit Complaint
                            </button>
                          </Link>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </Col>

                <Col lg={5} className="ms-lg-auto">
                  <div className="mt-5 mt-lg-0">
                    <img src={contact} alt="" className="img-fluid d-block" />
                    <p className="text-muted mt-5 mb-3">
                      <i>
                        <FeatherIcon
                          icon="mail"
                          className="me-2 text-muted icon icon-xs"
                        />
                      </i>{" "}
                      support@egms.nla.et
                    </p>
                    <p className="text-muted mb-3">
                      <i>
                        <FeatherIcon
                          icon="phone"
                          className="me-2 text-muted icon icon-xs"
                        />
                      </i>{" "}
                      +91 123 4556 789
                    </p>
                    <p className="text-muted mb-3">
                      <i>
                        <FeatherIcon
                          icon="map-pin"
                          className="me-2 text-muted icon icon-xs"
                        />
                      </i>{" "}
                      2976 Edwards Street Rocky Mount, NC 27804
                    </p>
                    <ul className="list-inline pt-4">
                      <li className="list-inline-item me-3">
                        <Link
                          to="#"
                          className="social-icon icon-mono avatar-xs rounded-circle"
                        >
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
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </React.Fragment>
      );
    }
  
  export default Complaint
