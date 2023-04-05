function S7Section(props) {
  return (
    <div className="section7-parts">
      <div className="stars">
        <img src={props.star1} alt="star" />
        <img src={props.star1} alt="star" />
        <img src={props.star1} alt="star" />
        <img src={props.star1} alt="star" />
        <img src={props.star1} alt="star" />
      </div>
      <div className="section7-text11">{props.text1}</div>
      <div className="section7-text22">{props.text2}</div>
      <div className="nameAndicon">
        <div className="section7-icon">
          <img src={props.s7line} alt="nameicon" />
        </div>
        <div className="section7-name">{props.name}</div>
      </div>
    </div>
  );
}
export default S7Section;
