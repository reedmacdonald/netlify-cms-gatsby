import React from "react";
import "./styles.scss";
import Confetti from 'react-dom-confetti';
import useWindowSize from "react-use/lib/useWindowSize";
import FlashBar from './FlashBar'


const AdvancedButton = () => {
  const [email, setEmail] = React.useState("");
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = React.useState(false);
  const [error, setError] = React.useState(false);
  function isEmail(val) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(val);
  }
  const config = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#f00", "#0f0", "#00f"]
  };
  const onClick = () => {
    if (isEmail(email)) {
      setShowConfetti(true);
      setError(false);
      setTimeout(() => {
       /* window.location.assign(
          `http://search.myscholly.com/register?email=${email}`
        );*/
      }, 3000);
    } else {
      setError(true);
    }
  };
//hmm idk

  return (
    <>
    {showConfetti&&<FlashBar message={'Welcome to Scholly!'}/>}
      <Confetti config={config} active={showConfetti} />
      <div className="holder">
        <input
          type="text"
          className="leftThing"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <span className="rightThing">
          <div
            style={{ display: "grid", placeItems: "center" }}
            className="rightThingButton"
            onClick={onClick}
          >
            Find Scholarships Today
          </div>
        </span>
      </div>
      {error && <p style={{ color: "red" }}>Please insert a valid email</p>}
    </>
  );
};
export default AdvancedButton;
