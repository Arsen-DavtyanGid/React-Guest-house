import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import logo from "./images/logo.png";
import logo2 from "./images/logo2.png";
import s5icon1 from "./images/section5-icon1.svg";
import s5icon2 from "./images/section5-icon2.svg";
import s5icon3 from "./images/section5-icon3.svg";
import s6icon1 from "./images/s6icon1.svg";
import s6icon2 from "./images/s6icon2.svg";
import s6icon3 from "./images/s6icon3.svg";
import s6icon4 from "./images/s6icon4.svg";
import s6icon5 from "./images/s6icon5.svg";
import s6icon6 from "./images/s6icon6.svg";
import s6icon7 from "./images/s6icon7.svg";
import s6icon8 from "./images/s6icon8.svg";
import starBlack from "./images/star-black.svg";
import s7line from "./images/s7-line.svg";
import s9icon1 from "./images/s9icon1.svg";
import s9icon2 from "./images/s9icon2.svg";
import s9icon3 from "./images/s9icon3.svg";
import s9icon4 from "./images/s9icon4.svg";
import socialMediaicon1 from "./images/socialMedia1.svg";
import socialMediaicon2 from "./images/socialMedia2.svg";
import socialMediaicon3 from "./images/socialMedia3.svg";
import logo3 from "./images/logo3.png";

function App() {
  return (
    <>
      <Header logo={logo} />
      <Main
        logo={logo2}
        s5icon1={s5icon1}
        s5icon2={s5icon2}
        s5icon3={s5icon3}
        s6icon1={s6icon1}
        s6icon2={s6icon2}
        s6icon3={s6icon3}
        s6icon4={s6icon4}
        s6icon5={s6icon5}
        s6icon6={s6icon6}
        s6icon7={s6icon7}
        s6icon8={s6icon8}
        star1={starBlack}
        s7line={s7line}
        s9icon1={s9icon1}
        s9icon2={s9icon2}
        s9icon3={s9icon3}
        s9icon4={s9icon4}
      />
      <Footer
        socialMediaicon1={socialMediaicon1}
        socialMediaicon2={socialMediaicon2}
        socialMediaicon3={socialMediaicon3}
        logo3={logo3}
        ftext1="© Guest House, LLC. All rights reserved. Powered by Webflow"
        ftext2="+47 (0) 702 88 12 34 — example@webflow.io — Klubbvika 12, 8310 Kabelvag, Norway"
      />
    </>
  );
}

export default App;
