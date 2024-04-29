    import React, { Component } from "react";

    const documentLink =
      "http://localhost:3001/static/media/sample-pdf2.94e2e832dc5c5c9ee17d.jpeg";
    export default class Guidelines extends Component {
      state = {
        activeSection: "requirements",
      };
      setActiveSection = (section) => {
        this.setState({ activeSection: section });
      };

      render() {
        const { activeSection } = this.state;

        return (
          <div className="guidelines">
            <div className="tab-buttons">
            <button
                className={`tab-button ${
                  activeSection === "requirements" ? "active" : ""
                }`}
                onClick={() => this.setActiveSection("requirements")}
              >
                REQUIREMENTS
              </button>
              <button
                className={`tab-button ${
                  activeSection === "howToSubmit" ? "active" : ""
                }`}
                onClick={() => this.setActiveSection("howToSubmit")}
              >
                HOW TO SUBMIT YOUR APPLICATION
              </button>
           
              <button
                className={`tab-button ${
                  activeSection === "renwal" ? "active" : ""
                }`}
                onClick={() => this.setActiveSection("renewal")}
              >
                RENEWAL
              </button>
            </div>
            <div className="tab-content">
              {activeSection === "howToSubmit" && (
              <div className="content-section">
              <h3>How to Apply for a Betting License</h3>
              <p>Follow these steps to apply for a betting license through the Ethiopian National Lottery Administration eGMS:</p>
          
              <div className="application-steps">
                <div className="step">
                  <h4>EGMS Registration Services</h4>
                  <p>Begin by registering your sports betting company on the eGMS registration portal. This portal allows for new applications, branch management, financial transaction management, and an overview of your companies.</p>
                </div>
          
                <div className="step">
                  <h4>Register Organization</h4>
                  <p>Accept the terms and conditions set by the NLA, then proceed to register your business entity. You'll need to upload your Business Proposal and wait for its approval. Once approved, fill in the registration form with your organization's details, which include information such as the organization name, TIN, legal form, manager name, and other pertinent details.</p>
                </div>
          
                <div className="step">
                  <h4>Upload Business Documents</h4>
                  <p>After your organization's details are approved, submit your Business License, Commercial Registration Certificate, Office Rent Contract, and Contract of Social Service for review.</p>
                </div>
          
                <div className="step">
                  <h4>Upload Finance Files</h4>
                  <p>Provide financial documents like your License Fee and Bank Guarantee Letter. Upon approval, you will be granted your betting license from the NLA.</p>
                </div>
              </div>
            </div>
              )}
              {activeSection === "requirements" && (
                <div className="content-section">
                  <h3>Supporting Documents Required by NLA</h3>
                  <p>
                    For all bookmakers applying for the registration of
                    the facility, further information is required regarding the
                    business proposal and related filings. The section below
                    summarizes the list of the additional information required.
                  </p>

                  <div className="document-cards">
                  <div className="document-card">
                      <div className="document-card-body">
                    

                        <h4>Business Documents</h4>
                        
                       
                        <ul>
                          {/* <li>Business Proposal</li> */}
                          <li>Business License</li>
                          <li>Commercial Registration Certificate</li>
                        </ul>
                      </div>
                   </div>
                    <div className="document-card">
                      <div className="document-card-body">
                       
                        <h4>Contract and Proof of Information</h4>
                        <ul>
                          <li>Office Rent Contract</li>
                          <li>Contract of Social Service</li>
                        </ul>
                      </div>
                    </div>
                    <div className="document-card">
                      <div className="document-card-body">
                        <h4>License Fee, Bank Guarantee Letter</h4>
                        <ul>
                          <li>License Fee</li>
                          <li>Bank Gaurantee Letter</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeSection === 'renewal' && (
  <div className="content-section">
    <h3>License Renewal Process</h3>
    <p>To renew your betting license through the Ethiopian National Lottery Administration eGMS, follow these steps:</p>

    <div className="renewal-steps">
      <div className="step">
        <h4>Access Your eGMS Account</h4>
        <p>Log in to your eGMS account and navigate to the 'My Companies' section to initiate the renewal process.</p>
      </div>

      <div className="step">
        <h4>Review Your Business Details</h4>
        <p>Ensure all your business details are current and update any information as necessary before proceeding with the renewal.</p>
      </div>

      <div className="step">
        <h4>Submit Renewal Application</h4>
        <p>Complete the renewal application form, and submit the required documents, which may include a recent Business License, Tax Compliance Certificate, and proof of continued operation.</p>
      </div>

      <div className="step">
        <h4>Pay Renewal Fees</h4>
        <p>Pay the necessary renewal fees as outlined by the NLA. Fees may vary based on your business size and type.</p>
      </div>

      <div className="step">
        <h4>Wait for Approval</h4>
        <p>After submission, your application will be reviewed. Once approved, you will receive a confirmation and your renewed license.</p>
      </div>
    </div>
  </div>
)}

            </div>
          </div>
        );
      }
    }
