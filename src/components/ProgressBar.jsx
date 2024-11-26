import { useState } from "react";

const ProgressBar = () => {
  const [value, setValue] = useState(10);
  const [text, setText] = useState("");

  const inputValue = (e) => {
    let value = Number(e.target.value);
    if (value < 0) {
      value = 0;
      setText("To less");
    } else if (value > 100) {
      value = 100;
      setText("To much");
    } else {
      setText("");
    }
    setValue(value);
  };
  return (
    <section className="challenge ">
      <h2>Progress Bar</h2>
      <div className="horizont">
        <div className="container">
          <div className="innerContainer" style={{ width: `${value}%` }}>
            {value}%
          </div>
        </div>
      </div>
      <div className="horizont center">
        <form>
          <label htmlFor="html">Input Percentage:</label>
          <input id="html" type="number" onChange={inputValue} />
        </form>
        <p>{text}</p>
      </div>
    </section>
  );
};

export default ProgressBar;
