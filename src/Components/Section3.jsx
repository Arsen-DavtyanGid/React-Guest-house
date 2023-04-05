import Line from "./Line";

function Section3(props) {
  return (
    <section className="Section3">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Line />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="section3-text">
              <div className="real-section3-text">{props.text}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section3;
