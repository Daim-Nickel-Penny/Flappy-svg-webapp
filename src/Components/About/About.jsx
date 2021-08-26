import React from "react";
import Marquee from "react-fast-marquee";
import aboutImg from "../../assets/images/about_img.png";
import aboutRes from "../../res/aboutres";
import Contributions from "../Contributions/Contributions";

import SubscribeComp from "../Subscribe/SubscribeComp";

function About() {
  return (
    <div>
      <section className="about_us_area section_gap_top">
        <div className="container">
          <div className="row about_content align-items-center">
            <div className="col-lg-12">
              <div className="section_content">
                <div className="row">
                  <div className="col-lg-6">
                    <h6 style={{ fontSize: "1.5rem" }}>About</h6>
                    <h1>{aboutRes.headerText.text}</h1>
                    <p>{aboutRes.aboutText.text}</p>
                    <div>
                      <a
                        className="primary_btn"
                        href="#"
                        style={{ margin: "5px 7px" }}
                      >
                        Play Now
                      </a>
                      <a
                        className="primary_btn"
                        href="#"
                        style={{ margin: "5px 7px" }}
                      >
                        Contribute
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="about_us_image_box justify-content-center">
                      <img
                        className="img-fluid w-100"
                        src={aboutImg}
                        alt=""
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-6">
              <div className="about_us_image_box justify-content-center">
                <img className="img-fluid w-100" src={aboutImg} alt=""></img>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section className="section_gap_top">
        <div className="container">
          <div className="row  align-items-center">
            <div className="col-lg-12">
              <div className="section_content">
                <h6
                  style={{
                    fontSize: "1.5rem",
                    color: "black",
                  }}
                >
                  Contributions
                </h6>
                <div style={{ marginTop: "45px" }}>
                  <Marquee
                    pauseOnHover={true}
                    speed={60}
                    loop={0}
                    gradient={true}
                  >
                    <Contributions />
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SubscribeComp />
    </div>
  );
}

export default About;
/** <h6>Contributions</h6>

         */
