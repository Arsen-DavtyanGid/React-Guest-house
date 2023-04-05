function Footer(props) {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer-ul">
              <ul>
                <p>Pages</p>
                <li>
                  <a href="#">Start</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Our history</a>
                </li>
                <li>
                  <a href="#">Licenses</a>
                </li>
                <li>
                  <a href="#">Instructions</a>
                </li>
                <li>
                  <a href="#">Style guide</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer-social-media">Social Media</div>
            <div className="footer-social-media-icons">
              <a href="#">
                <img src={props.socialMediaicon1} alt="icon" />
              </a>
              <a href="#">
                <img src={props.socialMediaicon2} alt="icon" />
              </a>
              <a href="#">
                <img src={props.socialMediaicon3} alt="icon" />
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="footer-gmail-text1">Newsletter</div>
            <div className="footer-gmail-text2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </div>
            <div className="footer-content-input">
              <form action="">
                <input
                  type="email"
                  name="gmail"
                  id="gmail"
                  placeholder="Email"
                />
                <input type="submit" value="Submit" id="click" />
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-logo">
              <img src={props.logo3} alt="logo" />
            </div>
            <div className="footer-ftext1">{props.ftext1}</div>
            <div className="footer-ftext2">{props.ftext2}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
