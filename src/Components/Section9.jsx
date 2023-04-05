import Line2 from "./Line2";
import S9icons from "./S9icons";
function Section9(props) {
  return (
    <section className="Section9">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <Line2 />
            <div className="section9-text1">{props.text1}</div>
            <div className="section9-text2">{props.text2}</div>
          </div>
          <div className="col-lg-6 col-md-6 S9S9">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <S9icons
                  s9icon={props.s9icon1}
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
                <S9icons
                  s9icon={props.s9icon3}
                  text="Nulla rhoncus feugiat eros quis consectetur."
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <S9icons
                  s9icon={props.s9icon2}
                  text="Nullam scelerisque aliquam odio et faucibus."
                />
                <S9icons
                  s9icon={props.s9icon4}
                  text="Morbi neque ex, condimentum."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section9;
