import Section5Sleeping from "./Section5Sleeping";
import Line from "./Line";

function Section5(props) {
  return (
    <section className="Section5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Line />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="section5-text1">Sleeping arrangements.</div>
            <div className="section5-text2">
              <div className="real-section5-text2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros
                quis consectetur.
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <Section5Sleeping
              s5icon1={props.s5icon2}
              text1="Beds"
              text2="The cabin is equipped with 12 beds, 4 of which are in bunk. The rent includes linens for all beds."
            />
          </div>
          <div className="col-lg-4 col-md-4">
            <Section5Sleeping
              s5icon1={props.s5icon1}
              text1="Bedrooms"
              text2="Spread out over two floors, the cabin offers 4 bedrooms. Ranging from 2 to 4 beds per room."
            />
          </div>
          <div className="col-lg-4 col-md-4">
            <Section5Sleeping
              s5icon1={props.s5icon3}
              text1="Bathrooms"
              text2="The cabin has three bathrooms, all equipped with showers and one with a bath tub,"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section5;
