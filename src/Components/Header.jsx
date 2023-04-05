import HeaderLinks from "./HeaderLinks";

function Header(props) {
  function hiddenManu() {
    let el = document.querySelector(".manu-bar-mobile");
    el.classList.toggle("add");
  }

  const { logo } = props;
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-4">
            <div className="header-logo">
              <a href="#">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div className="manu-bar-mobile">
              <ul>
                <li>
                  <a href="#">
                    <img src={logo} alt="logo" />
                  </a>
                </li>
                <li>
                  <a href="#">Start</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Our history</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-4">
            <div className="headerlink">
              <HeaderLinks text="Start" />
              <HeaderLinks text="Contact" />
              <HeaderLinks text="Our history" />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-4">
            <div className="headerButton">
              <button>Book now</button>
              <div className="manu-bar">
                <a href="#" onClick={hiddenManu}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="24"
                    viewBox="0 0 28 24"
                  >
                    <path
                      fill="white"
                      d="M2.61 0h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22zm0 9.39h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22zm0 9.391h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
