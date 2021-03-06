import React from "react";
import "./styles.scss";

import useWindowSize from "react-use/lib/useWindowSize";
import FlashBar from './FlashBar'
import Confetti from 'react-dom-confetti';


const AdvancedButton = () => {
  const [email, setEmail] = React.useState("");
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [showFlashBar,setShowFlashBar]=React.useState(false)
  function isEmail(val) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(val);
  }
  const onClick = () => {
    if (isEmail(email)) {
      setShowConfetti(true);
      setError(false);
      setShowFlashBar(true)
      setTimeout(() => {
        window.location.assign(
          `http://search.myscholly.com/register?email=${email}`
        );
      }, 3000);
    } else {
      setError(true);
    }
  };


  return (
    <>
      
      <div className="holder">
      {showFlashBar&&<FlashBar message='Welcome to Scholly!'/>}
      <Confetti active={showConfetti}/>
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
