function S9icons(props) {
  return (
    <div className="s9icons">
      <div className="s9-icon-img">
        <img src={props.s9icon} alt="icon" />
      </div>
      <div className="s9-icon-text">{props.text}</div>
    </div>
  );
}
export default S9icons;
