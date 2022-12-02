import React from "react";
import img from "../images/logo.png";
import {
  PushpinOutlined,
  PhoneOutlined,
  MailOutlined,
  HomeOutlined,
  FacebookFilled,
  TwitterSquareFilled,
  LinkedinFilled,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="mt-5">
      <footer className="footer-section ">
        <div className="container">
          <div className="footer-cta pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <div className="cta-text">
                    <PushpinOutlined className="f-icons" />
                    <h4>Find us</h4>
                    <span>
                     Vijayawada,KLUNIVERSITY
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <PhoneOutlined className="f-icons" />
                <div className="single-cta">
                  <div className="cta-text">
                    <h4>Call us</h4>
                    <span>+7997038245</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <MailOutlined className="f-icons" />
                <div className="single-cta">
                  <div className="cta-text">
                    <h4>Mail us</h4>
                    <span>karthikeyaguruju@gmail.com</span>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="footer-content pt-5 pb-5">
            <div className="row">
            <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "400px",
                      }}
                    >
                </div>      

              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a href="/about">
                      <img
                        src={img}
                        className="img-fluid"
                        style={{ height: "80px", width: "80px" }}
                        alt="logo"
                      />
                      <h3 style={{ color: "#00ffffdf", fontFamily: "Barrio" }}>
                        NxtRider
                      </h3>
                    </a>
                  </div>
                  <div className="footer-text">
                    <p>
                      It is car service App
                    </p>
                  </div>
                  <div className="footer-social-icon">
                    <span>Follow us</span>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "9px",
                      }}
                    >
                      <a href="https://www.facebook.com/profile.php?id=100071345375225">
                        <FacebookFilled className="f-social-icons facebook " />
                      </a>
                      <a href="https://twitter.com/KarthikeyaGuru2">
                        <TwitterSquareFilled className="f-social-icons twitter" />
                      </a>
                      <a href="https://www.linkedin.com/in/karthikeya-guruju-67ab02225/">
                        <LinkedinFilled className="f-social-icons linkedIn" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
        
      </footer>
    </div>
  );
};

export default Footer;
