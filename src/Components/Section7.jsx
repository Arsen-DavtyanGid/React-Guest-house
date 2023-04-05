import Line from "./Line";
import S7Section from "./S7Section";

function Section7(props) {
  return (
    <section className="Section7">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Line />
            <div className="section7-text1">{props.text1}</div>
            <div className="section7-text2">
              <div className="real-section7-text2">{props.text2}</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <S7Section
              star1={props.star1}
              s7line={props.s7line}
              text1="We had an amazing stay at the Guest House!"
              text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
              name="Nate Davidsson"
            />
          </div>
          <div className="col-lg-6">
            <S7Section
              star1={props.star1}
              s7line={props.s7line}
              text1="Beautiful little hideaway."
              text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet."
              name="Laura Paulie"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section7;
