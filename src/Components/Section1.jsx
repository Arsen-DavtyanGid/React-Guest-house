function Section1(props) {
  return (
    <section className="Section1">
      <div className="Section1-logo">
        <img src={props.logo2} alt="logo2" />
      </div>
      <div className="Section1-text1">
        <div className="realSection1-text1">{props.text1}</div>
      </div>
      <div className="Section1-text2">{props.text2}</div>
      <div className="Section1-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="53.75"
          height="72.5"
          viewBox="0 0 256 256"
        >
          <path
            fill="white"
            d="M144 20h-32a60.07 60.07 0 0 0-60 60v96a60.07 60.07 0 0 0 60 60h32a60.07 60.07 0 0 0 60-60V80a60.07 60.07 0 0 0-60-60Zm52 156a52.06 52.06 0 0 1-52 52h-32a52.06 52.06 0 0 1-52-52V80a52.06 52.06 0 0 1 52-52h32a52.06 52.06 0 0 1 52 52ZM132 64v48a4 4 0 0 1-8 0V64a4 4 0 0 1 8 0Z"
          />
        </svg>
      </div>
    </section>
  );
}
export default Section1;
