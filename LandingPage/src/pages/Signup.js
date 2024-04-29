import React, { Component, useState ,useEffect} from "react";
import { Link ,useHistory} from "react-router-dom";
import { Col, Container, Form, Input, Label, Row } from "reactstrap";
import FeatherIcon from "feather-icons-react";
import authBg from "../assets/images/auth-bg.png";
import logoDark from "../assets/images/newDark.png";
import Footer from "../component/Footer/Footer";
import axios from "axios";
import cors from "cors"; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'; 
import { supabase } from "./client"; 

const Signup = () => { 
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState('');
  const history = useHistory(); 
  const [error, setError] = useState(null);
  const [sent, setSent] = useState(false);
  
  const handleSignUp = async (event) => {
    event.preventDefault();
   
    try {
      const { user, error } = await supabase.auth.signUp({ email, password });
      if (error) {
        throw new Error(error.message);
      } else {
        // Verification email sent successfully
        await supabase.auth.sendVerificationEmail(email);
        toast.success('Verification email sent. Please check your inbox!');
      }
    } catch (error) {
      if (error.message === 'Email rate limit exceeded') {
        toast.error('Email sending limit exceeded. Please try again later.');
      } else {
        if (error.message.includes('unique constraint')) {
          toast.error('Email already exists. Please try a different email.');
        } 
        toast.error(error);
        console.log(error.message)
      }
    }
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to your backend server for signup
      const response = await axios.post('http://localhost:3002/register/signup', { email, password });
      console.log(response.data);
      // Handle success or show a success message
     /*  toast.success('Signup successful!'); 
      Swal.fire( {
        icon : 'success',
        title: response.data.message,
        text: response.data.message, 
    }) */
      window.location.href = 'http://localhost:3000/login/';
      // Show success toast
    } catch (error) {
      console.error(error.response.data.message);
      // Handle error or show an error message
      toast.error(error.response.data.message); // Show error toast
    }
  };


 
  const sendVerificationEmail = async (user) => {
    try { const { error } = await supabase.auth.sendVerificationEmail(user.email);
    if (error) {
      toast.error(error.message);
    } else {
      toast.info('A verification email has been sent to your email address.');
    }
  }
    catch (error) {
      console.log('1findmessage',error)
     /*  if (error.message === 'Email rate limit exceeded') {
        toast.error('Email sending limit exceeded. Please try again later.');
      } 
      else  { */
        if (error.TypeError === 'user is undefined') {
          toast.error('This email already exists');
        } 
        //toast.error(error.message);
        console.log('2findmessage',error.message)
      //}
    }
  }
 



  return (
    <React.Fragment>
      <ToastContainer />
      <section className="bg-account-pages vh-100 d-flex align-items-center bg-center position-relative" style={{ background: `url(${authBg})` }}>
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <div className="bg-white shadow" style={{ width: "100%" }}>
                <div className="p-4">
                  <div className="text-center mt-3">
                    <Link to="/">
                      <img src={logoDark} alt="" className="logo-dark" height="30" />
                    </Link>
                    <p className="text-muted mt-2">
                      Sign up for a new Account
                    </p>
                  </div>
                  <div className="p-3">
                    <Form method="post" className="av-invalid" onSubmit={handleSubmit} >
                      <div className="mb-3">
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
                          value={email}
                          onChange={(event) => setemail(event.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <Label htmlFor="userpassword" className="form-label">
                          Password
                        </Label>
                        <Input
                          name="password"
                          required=""
                          placeholder="Enter password"
                          id="password"
                          type="password"
                          className="form-control"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                        />
                      </div> 
                      <div className="d-grid mt-3">
                        <button
                          type="submit"
                          className="btn btn-primary btn-none"
                        >
                          Sign Up
                        </button>
                      </div>
                      <div className="mt-4 mb-0 text-center">
                        <p className="text-muted">
                          Already have an account?{" "}
                         {/*  <Link
                            to={"https://poe.com/"}
                            className="text-dark font-weight-bold"
                          > */}
                          <a href="http://localhost:3000/login/"
                          className="text-dark font-weight-bold">
                            Log in
                            </a>
                        {/*   </Link> */}
                        </p>
                      </div>
                    </Form> 
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="text-center mt-4">
                <h3>EGMS Platform</h3>
                <p className="text-muted">
                  EGMS is an electronic gaming management system owned and managed by the Ethiopian National Lottery Administration (NLA). It is a comprehensive platform that provides sports betting companies with a variety of features.
                </p>
                <h4>Features</h4>
                <p>

                  Signup and registration: EGMS allows sports betting companies to easily signup and register their businesses. The registration process is quick and easy, and companies can start using EGMS immediately after they are approved.
                  License approval: EGMS also allows sports betting companies to apply for and obtain licenses from the NLA. The license application process is transparent and efficient, and companies can be confident that their licenses are legitimate.
                  Branch management: EGMS allows sports betting companies to manage their branches. Companies can create new branches, update existing branches, and delete branches as needed.
                  Reporting: EGMS provides sports betting companies with comprehensive reports on their businesses. These reports can be used to track performance, identify trends, and make informed decisions.
                  Security: EGMS is a secure platform that protects the data of sports betting companies and their customers.</p>
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


export default Signup;
