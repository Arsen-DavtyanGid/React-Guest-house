import Line from "./Line";
function Section10(props) {
  return (
    <section className="Section10">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Line />
            <div className="section10-text1">
              <div className="real-section10-text1">{props.text1}</div>
            </div>
            <div className="section10-text2">
              <div className="real-section10-text2">{props.text2}</div>
            </div>
            <div className="section10-buttons">
              <button className="section10-button1">Contact</button>
              <button className="section10-button2">Book now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section10;
