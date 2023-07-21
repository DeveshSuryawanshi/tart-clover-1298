import React from "react";
import "./Footer.css";

import { ImInstagram,ImFacebook2 } from "react-icons/im";
import { BsLinkedin ,BsTwitter} from "react-icons/bs";
export const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <footer className="main">
          <div className="container">
            <div className="rowhidebelowtablet">
              <div className="six columns">
                <h3>About TaxTim</h3>

                <div>
                  <div className="col">
                    <div className="column">
                      <a href="about-taxtim">The TaxTim Story</a>
                      <a href="data-security">Security and Trust</a>
                      <a href="affiliate-signup">Become an Affiliate</a>
                    </div>

                    <div className="column">
                      <a href="how-tim-works">How TaxTim Works</a>
                      <a href="services">What TaxTim Costs</a>
                      <a href="tos#refunds">Refund Policy</a>
                      <a href="jobs">Jobs at TaxTim</a>
                    </div>

                    <div className="column">
                      <a href="services/clerk-assist">Clerk Assist</a>
                      <a href="services/mobile-vehicle-logbook">
                        Vehicle Logbook
                      </a>
                      <a href="services/expense-tracker-app">
                        Expense Tracker App
                      </a>
                      <a href="small-business">Small Business Tax</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="four columns offset-by-two">
                <h3>Tax Help</h3>

                <div className="col">
                  <div className="column">
                    <a href="help/ask-a-tax-question?source=footer">
                      Ask a Tax Question
                    </a>

                    <a href="calculators">Tax Calculators</a>
                    <a href="help">Step-by-step Guides</a>
                    <a href="answers/">Tax Q &amp; A</a>
                  </div>
                  <div className="column">
                    <a href="get-started?register">Register for TaxTim</a>
                    <a href="blog/">TaxTim Blog</a>
                    <a href="free-tax-season-reminders">Tax Season Alerts</a>
                    <a href="contact-us">Contact Us</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="social-container">
              <a href="" target="_blank">
              <a><BsTwitter/></a>
                <i class="social fab fa-twitter"></i>
              </a>{" "}
              &nbsp;
              <a href="" target="_blank">
              <a><ImFacebook2/></a>
                <i class="social fab fa-facebook"></i>
              </a>{" "}
              &nbsp;
              <a href="" target="_blank">
              <a><ImInstagram/></a>
                
                <i class="social fab fa-instagram"></i>
              </a>{" "}
              &nbsp;
              <a href="" target="_blank">
              <a><BsLinkedin/></a>
                <i class="social fab fa-linkedin"></i>
              </a>
            </div>

            <div className=" terms-container">
              <a href="tos">Terms of Service</a> |{" "}
              <a href="privacy">Privacy Policy</a> |{" "}
              <a href="sitemap">Sitemap</a>
              <br />
              Copyright ©️ 2023 TaxTim | Human Robot Pty Ltd. All Rights
              Reserved.
              <br />
              Supported by SARS Registered Tax Practitioner PR-0009352 | 32
              Kloof St, Gardens, Cape Town, South Africa | Site secured by
              Comodo Security.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};