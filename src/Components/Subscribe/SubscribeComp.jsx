import React from "react";
import FooterComp from "../Footer/FooterComp";

function SubscribeComp() {
  return (
    <div>
      <section className="newsletter_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="newsletter_inner">
                <h1>Subscribe Our Newsletter</h1>
                <p>We won’t send any kind of spam</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <aside className="newsletter_widget">
                <div id="mc_embed_signup">
                  <form
                    target="_blank"
                    action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                    method="get"
                    className="subscribe_form relative"
                  >
                    <div className="input-group d-flex flex-row">
                      <input
                        name="EMAIL"
                        placeholder="Enter email address"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Your email address'"
                        required=""
                        type="email"
                      ></input>
                      <button className="btn primary_btn">Subscribe</button>
                    </div>
                  </form>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
      <FooterComp />
    </div>
  );
}

export default SubscribeComp;
