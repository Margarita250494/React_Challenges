import { useState } from "react";

const ShowHideButton = () => {
const [isVisible, setIsVisible] = useState(true);
  const toogleButton = () => {
    setIsVisible((prevIsVisible) => !prevIsVisible);
  };
  return (
    <section className="challenge">
          <h2>Show/Hidden button</h2>
          <div className="horizont">
            <button onClick={toogleButton}>
              {isVisible ? "Show" : "Hidden"}
            </button>
            {isVisible && <p>Welcome!</p>}
            {/*<p>{isVisible && 'Welcome!'}</p> */}
          </div>
        </section>
  )
}

export default ShowHideButton