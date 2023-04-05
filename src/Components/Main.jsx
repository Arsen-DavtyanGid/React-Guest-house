import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";
import Section10 from "./Section10";

function Main(props) {
  return (
    <main>
      <Section1
        logo2={props.logo}
        text1="Experience the perfect combination of modern housing & natural scenery."
        text2="Located in Lofoten, norway"
      />
      <Section2
        text1="The Guest House is the perfect weekend get-away housing. Located in the Norwegian archipelago, Lofoten, it's a great escape from the hustle and bustle of the city. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula."
        text2="Below you'll find information about the accommodation and what's
        included in the price. Don't hesitate to reach out to us vi the contact
      page if you have any questions around your stay."
      />
      <Section3 text="The Guest House is the perfect weekend getaway cabin." />
      <Section4 />
      <Section5
        s5icon1={props.s5icon1}
        s5icon2={props.s5icon2}
        s5icon3={props.s5icon3}
      />
      <Section6
        text1="The perfect escape."
        text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur."
        s5icon1={props.s5icon1}
        s5icon2={props.s5icon2}
        s5icon3={props.s5icon3}
        s6icon1={props.s6icon1}
        s6icon2={props.s6icon2}
        s6icon3={props.s6icon3}
        s6icon4={props.s6icon4}
        s6icon5={props.s6icon5}
        s6icon6={props.s6icon6}
        s6icon7={props.s6icon7}
        s6icon8={props.s6icon8}
      />
      <Section7
        text1="Past guests."
        text2="Don't take our word for it! Have a look at what our previous guests say about their stay at the Guest House."
        star1={props.star1}
        s7line={props.s7line}
      />
      <Section8 />
      <Section9
        text1="Come together."
        text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus."
        s9icon1={props.s9icon1}
        s9icon2={props.s9icon2}
        s9icon3={props.s9icon3}
        s9icon4={props.s9icon4}
      />
      <Section10
        text1="We're already booked up for the spring — hurry up & secure your stay for the summer."
        text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus."
      />
    </main>
  );
}
export default Main;
