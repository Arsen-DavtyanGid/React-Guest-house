import Line2 from "./Line2";
import S6icons from "./S6icons";
function Section6(props) {
  return (
    <section className="Section6">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Line2 />
            <div className="section6-text1">{props.text1}</div>
            <div className="section6-text2">{props.text2}</div>
          </div>
          <div className="col-lg-6"></div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <S6icons
              s6icon={props.s6icon1}
              text1="Modern Kitchen Appliances"
              text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <S6icons
              s6icon={props.s6icon2}
              text1="Outdoor Paths"
              text2="Nulla rhoncus feugiat eros quis consectetur."
            />
            <S6icons
              s6icon={props.s6icon3}
              text1="Coffee Maker"
              text2="Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt."
            />
            <S6icons
              s6icon={props.s6icon4}
              text1="Natural Scenery"
              text2="Cras commodo consequat orci, in convallis risus egestas non."
            />
          </div>
          <div className="col-lg-6">
            <S6icons
              s6icon={props.s6icon5}
              text1="Air Conditioner"
              text2="Nullam scelerisque aliquam odio et faucibus."
            />
            <S6icons
              s6icon={props.s6icon6}
              text1="Storage Solutions"
              text2="Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula."
            />
            <S6icons
              s6icon={props.s6icon7}
              text1="Cutlery Selection"
              text2="Duis tristique sed lorem a vestibulum."
            />
            <S6icons
              s6icon={props.s6icon8}
              text1="Take-away Options"
              text2="Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section6;
