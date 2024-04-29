import React, { Component } from "react";
import { Container } from "reactstrap";
import Footer from "../component/Footer/Footer";
class PrivacyPolicy extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
        <h1>Privacy Policy</h1>
        <p>
          1. Introduction
          <br />
          This Privacy Policy (the "Policy") describes how the Ethiopian National Lottery Administration (NLA) collects, uses, and shares your personal information when you use the EGMS web app (the "App").
        </p>
        <p>
          2. Collection of Personal Information
          <br />
          The NLA collects the following personal information from you when you use the App:
          <br />
          - Your name
          <br />
          - Your email address
          <br />
          - Your date of birth
          <br />
          - Your location
          <br />
          - Your IP address
          <br />
          - Your device information
          <br />
          - Your gameplay data
          <br />
          The NLA may also collect other personal information from you if you provide it to us voluntarily, such as your contact information or your financial information.
        </p>
        <p>
          3. Use of Personal Information
          <br />
          The NLA uses your personal information for the following purposes:
          <br />
          - To provide you with the App and its features
          <br />
          - To communicate with you about the App
          <br />
          - To improve the App
          <br />
          - To comply with applicable law
          <br />
          - To protect the security of the App
          <br />
          - To prevent fraud
          <br />
          - To enforce the terms of service for the App
          <br />
          The NLA may also use your personal information for other purposes with your consent.
        </p>
        <p>
          4. Sharing of Personal Information
          <br />
          The NLA may share your personal information with the following third parties:
          <br />
          - Our service providers, who help us operate and maintain the App
          <br />
          - Our partners, who help us promote or offer the App
          <br />
          - Law enforcement agencies, if required by law
          <br />
          The NLA will not sell your personal information to third parties.
        </p>
        <p>
          5. Your Rights
          <br />
          You have the following rights with respect to your personal information:
          <br />
          - The right to access your personal information
          <br />
          - The right to correct your personal information
          <br />
          - The right to delete your personal information
          <br />
          - The right to object to the processing of your personal information
          <br />
          - The right to restrict the processing of your personal information
          <br />
          - The right to port your personal information
          <br />
          - The right to withdraw your consent to the processing of your personal information
          <br />
          You can exercise these rights by contacting us at [email protected]
        </p>
        <p>
          6. Security of Personal Information
          <br />
          The NLA takes reasonable measures to protect your personal information from unauthorized access, use, disclosure, alteration, or destruction. These measures include:
          <br />
          - Using industry-standard security technologies
          <br />
          - Enforcing strict physical and logical access controls to our data centers
          <br />
          - Encrypting your personal information when it is stored or transmitted
        </p>
        <p>
          7. Children
          <br />
          The App is not intended for use by children under the age of 18. If you are under the age of 18, you should not use the App.
        </p>
        <p>
          8. Changes to this Policy
          <br />
          The NLA may update this Policy from time to time. If we make any material changes to this Policy, we will notify you by email or through the App.
        </p>
        <p>
          9. Contact Us
          <br />
          If you have any questions about this Policy, please contact us at [email protected]
        </p>
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default PrivacyPolicy;