  import React, { useState, useEffect } from "react";
  import { Link } from "react-router-dom";
  import FeatherIcon from "feather-icons-react";
  import { Col, Container, Form, Input, Label, Row } from "reactstrap";
  import contact from "../assets/images/contact.png";
  import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
  import "react-phone-number-input/style.css";
  import { toast, ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  import Announcements from "../pages/Announcement";
  import FaqSection from "./FaqSection";
  const Contact = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [complaintType, setComplaintType] = useState("");
    // const [organizationName, setComplaintFor] = useState("");
    const [complaint, setComplaint] = useState("");
    const [file, setComplaintImage] = useState(null);

    const complaintTypes = [
      "Odds Mismatch",
      "Betting Branch Location is Prohibited",
      "Cash Stolen",
      "Cash Register Not working",
      "Reporting Frauds",
    ];

    const handleComplaintTypeChange = (event) => {
      setComplaintType(event.target.value);
    };
    const [organizationName, setOrganizationName] = useState([]);
    const [areaCode, setAreaCode] = useState("+251");

    useEffect(() => {
      fetch("http://localhost:3002/OrganizationDetail/get-all")
        .then((response) => response.json())
        .then((data) => {
          const names = data.organizationDetails.map(
            (detail) => detail.organizationname
          );
          setOrganizationName(names);
          console.log(names);
        })

        .catch((error) => {
          console.error("Error fetching organization details:", error);
        });
    }, []);

    const handleSubmit = async (event) => {
      event.preventDefault();

      if (!isValidPhoneNumber(phoneNumber)) {
        // Display an error message to the user
        alert("Please enter a valid phone number");
        // return;
      }
      try {
        const formData = new FormData();
        formData.append("phoneNumber", phoneNumber);
        formData.append("complaintType", complaintType);
        formData.append("organizationName", organizationName);
        formData.append("complaint", complaint);
        formData.append("file", file);

        const response = await fetch("http://localhost:3002/complaint/submit", {
          method: "POST",
          body: formData,
        });
        console.log("Response is ", response);

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message);
        }
        toast.success("Complaint submitted successfully"); // Display success toast notification

        console.log("Complaint submitted successfully");
      } catch (error) {
        console.error("Error submitting complaint:", error);

        console.error("Error submitting complaint:", error);
      }
    };

    return (
      <React.Fragment>
        <ToastContainer />

        <section className="section" id="contact">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={7} className="text-center">
                <h2 className="fw-bold">Contact Us</h2>
                <p className="text-muted">
                  For any inquiries, feedback, or complaints regarding the EGMS
                  (Electronic Gaming Management System) or sports betting
                  companies, we encourage you to reach out to us. The Ethiopian
                  National Lottery Administration (NLA) is dedicated to providing
                  a reliable and secure gaming environment, and we value your
                  input and concerns.
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <div>
                  <Form method="post" name="myForm" onSubmit={handleSubmit}>
                    <p id="error-msg"></p>
                    <div id="simple-msg"></div>
                    <Row>
                      <Col md={120}>
                        {/* Enter Phon number */}
                        <div className="mb-4">
                          <Label
                            htmlFor="areaCode"
                            className="text-muted form-label"
                          >
                            Phone Number
                          </Label>
                          <PhoneInput
                            defaultCountry="ET"
                            value={phoneNumber}
                            onChange={setPhoneNumber}
                            className="phone-input"
                            placeholder="Enter Phone Number"
                          />
                        </div>

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
                            value={complaintType}
                            onChange={handleComplaintTypeChange}
                          >
                            <option value="">Select Complaint Type</option>
                            {complaintTypes.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
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
                            name="organizationName"
                            value={organizationName}
                            onChange={(e) =>
                              setOrganizationName([e.target.value])
                            }
                            id="complaintFor"
                          >
                            {organizationName.map((names) => (
                              <option key={names}>{names}</option>
                            ))}
                          </Input>
                        </div>
                        <div className="mb-4">
                          <Label
                            htmlFor="complaint"
                            className="text-muted form-label"
                          >
                            Your Complaint
                          </Label>
                          <div className="mb-4">
                            <textarea
                              name="complaint"
                              id="complaint"
                              value={complaint}
                              onChange={(e) => setComplaint(e.target.value)}
                              rows="6"
                              className="form-control1 styled-textarea"
                              placeholder="Enter your complaint..."
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
                              name="file"
                              value={file}
                              onChange={(e) => setComplaintImage(e.target.value)}
                              id="complaintImage"
                              className="form-control"
                            />
                          </div>

                          <button
                            type="submit"
                            name="send"
                            className="btn btn-primary"
                            onSubmit={handleSubmit}
                          >
                            Submit Complaint
                          </button>
                        </div>
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
                    +251 123 4556 789
                  </p>
                  <p className="text-muted mb-3">
                    <i>
                      <FeatherIcon
                        icon="map-pin"
                        className="me-2 text-muted icon icon-xs"
                      />
                    </i>{" "}
                    Piasa office next to Tailtu Hotel
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
          <Row className="justify-content-center mb-5">
            <Col lg={7} className="text-center">
              <h2 className="fw-bold"> Latest Announcements</h2>
              <p className="text-muted">Our latest announcements</p>
            </Col>
            <Announcements />
          </Row>

          <FaqSection />
        </section>
      </React.Fragment>
    );
  };

  export default Contact;
