function S6icons(props) {
  return (
    <div className="s6icons">
      <div className="s6icon">
        <img src={props.s6icon} alt="icons" />
      </div>
      <div className="s6texts">
        <div className="s6text1">{props.text1}</div>
        <div className="s6text2">{props.text2}</div>
      </div>
    </div>
  );
}
export default S6icons;
