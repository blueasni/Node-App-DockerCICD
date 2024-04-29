import React, { Component } from "react";
import { Container } from "reactstrap";
import Footer from "../component/Footer/Footer";
import NavbarPage from "../component/Navbar/NavBar";

class TermsOfService extends Component {
    render() {
      return (
        <React.Fragment>
        <Container>
          <h1>Terms of Service</h1>
          <p>
            1. Introduction
            <br />
            <br />
            This Terms of Service (TOS) agreement governs your use of the EGMS web app (the "App"). The App is owned and operated by the Ethiopian National Lottery Administration (NLA). By using the App, you agree to be bound by this TOS.
            <br />
            <br />
            2. Eligibility
            <br />
            <br />
            The App is only available to individuals who are at least 18 years of age and who are located in Ethiopia. You may not use the App if you are prohibited from doing so under applicable law.
            <br />
            <br />
            3. Account Creation and Use
            <br />
            <br />
            In order to use the App, you must create an account. You must provide accurate and complete information when creating your account. You are responsible for maintaining the security of your account and password. You are also responsible for all activity that occurs on your account.
            <br />
            <br />
            4. Content
            <br />
            <br />
            The App may contain content that is owned or licensed by the NLA or by third parties. You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any content without the prior written permission of the NLA or the applicable third party.
            <br />
            <br />
            5. Restrictions
            <br />
            <br />
            You may not use the App for any illegal or unauthorized purpose. You may not use the App in any way that could damage, disable, overburden, or impair the App or the servers or networks connected to the App. You may not attempt to gain unauthorized access to the App or to any of its features, systems, or networks.
            <br />
            <br />
            6. Termination
            <br />
            <br />
            The NLA may terminate your access to the App at any time for any reason. You may also terminate your use of the App at any time.
            <br />
            <br />
            7. Disclaimer of Warranties
            <br />
            <br />
            The NLA makes no representations or warranties about the App, including but not limited to its accuracy, reliability, completeness, or timeliness. The NLA also does not warrant that the App will be uninterrupted or error-free.
            <br />
            <br />
            8. Limitation of Liability
            <br />
            <br />
            In no event will the NLA be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of the App, whether based on contract, tort, or any other legal theory.
            <br />
            <br />
            9. Governing Law
            <br />
            <br />
            This TOS will be governed by and construed in accordance with the laws of the Federal Democratic Republic of Ethiopia.
            <br />
            <br />
            10. Entire Agreement
            <br />
            <br />
            This TOS constitutes the entire agreement between you and the NLA with respect to your use of the App. This TOS supersedes all prior or contemporaneous communications, representations, or agreements, whether oral or written.
          </p>
          </Container>
        <Footer />
      </React.Fragment>
      );
    }
  }

  export default TermsOfService;