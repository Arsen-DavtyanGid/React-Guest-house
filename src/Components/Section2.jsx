import Line from "./Line";

function Section2(props) {
  return (
    <section className="Section2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Line />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="section2-text1">
              <div className="real-section2-text1">{props.text1}</div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="section2-text2">
              <div className="real-section2-text2">{props.text2}</div>
            </div>
            <div className="section2-button">
              <button>Book now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section2;
