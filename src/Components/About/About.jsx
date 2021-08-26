import React from "react";
import aboutImg from "../../assets/images/about_img.png";
import SubscribeComp from "../Subscribe/SubscribeComp";

function About() {
  return (
    <div>
      <section class="about_us_area section_gap_top">
        <div class="container">
          <div class="row about_content align-items-center">
            <div class="col-lg-6">
              <div class="section_content">
                <h6>About Us</h6>
                <h1>
                  We Believe that <br />
                  Interior beauty Lasts Long
                </h1>
                <p>
                  inappropriate behavior is often laughed off as “boys will be
                  boys,” women face higher conduct standards especially in the
                  workplace. That’s why it’s crucial that as women.
                </p>
                <a class="primary_btn" href="#">
                  Learn More
                </a>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="about_us_image_box justify-content-center">
                <img class="img-fluid w-100" src={aboutImg} alt=""></img>
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
