import React from "react";
import styled from "styled-components";

import homeLeft from "../../assets/images/home-left.png";
import "./Home.css";
import Navbar from "../NavbarFolder/NavbarComponent";
import About from "../About/About";
export const MainHeader = styled.h1`
  color: red;
  font-weight: 700;
  letter-spacing: 1rem;
`;

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <section className="home_banner_area">
        <div className="banner_inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="home_left_img">
                  <img className="img-fluid" src={homeLeft} alt=""></img>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="banner_content">
                  <h2>
                    FOSSASIA <br />
                  </h2>
                  <h3 style={{ textAlign: "center" }}>
                    Presents
                    <br />
                  </h3>
                  <h2>
                    Flappy SVG <br />
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod temp or incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim.
                  </p>
                  <div className="d-flex align-items-center">
                    <a
                      id="play-home-video"
                      className="video-play-button"
                      href="https://www.youtube.com/watch?v=vParh5wE-tM"
                    >
                      <span></span>
                    </a>
                    <div className="watch_video text-uppercase">
                      watch the video
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
    </div>
  );
}
