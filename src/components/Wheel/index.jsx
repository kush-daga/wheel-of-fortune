import React, { useState, useEffect, useRef } from "react";
import { Container, ProgressBar, ProgressContainer, Threshold } from "./styles";
import spinner from "../../assets/spinner.svg";
import arrow from "../../assets/arrow.svg";
import { motion } from "framer-motion";
import ZingTouch from "zingtouch";
import { addScoreToGSheets } from "../../utils/addScoreToGSheets";

export default function Wheel() {
  // const [isSpinning, setIsSpinning] = useState(false);
  const [rotate, setRotate] = useState(0);
  const prizes = [
    {
      text: "BetterLuck next Time",
    },
    {
      text: "Rs. 50",
    },
    {
      text: "Double the Savings",
    },
    {
      text: "Multiply savings to 1.5x",
    },
    {
      text: "Rs. 50",
    },
    {
      text: "Rs. 20",
    },
    {
      text: "Rs. 100 Cashback",
    },
    {
      text: "Double the Savings",
    },
  ]; // Hardcoded list of prizes
  const [currentAngle, setCurrentAngle] = useState(0); //The angle that its currently rotated at when rotated by gesture
  const spinnerRef = useRef(null);
  const interactionRef = useRef(null);
  const [text, setText] = useState("Spin"); //Text to display in button
  useEffect(() => {
    console.log(rotate);
    const normalizedAngle = parseInt(rotate) + 30; // Adding 30 deg to account for initial rotation in svg
    const baseAngle = normalizedAngle % 360; //Getting the factor of rotation
    const index = Math.floor(baseAngle / 45); //Getting the index ie in which part has the result landed
    // console.log(index, prizes[index]);
    if (rotate > 0) {
      setTimeout(() => {
        alert("You won - " + prizes[index].text); //To display the result
        addScoreToGSheets(index); //Adding result to google sheet
      }, 3000);
    }
  }, [rotate]);

  useEffect(() => {
    if (spinnerRef.current && interactionRef.current) {
      var flag = false; //To make sure the setTimeout isnt called multiple times
      var region = new ZingTouch.Region(interactionRef.current); //Calling Zingtouch library
      var tempCurrentAngle = 0; //Temp current angle to acount for rotation
      region.bind(interactionRef.current, "rotate", function (e) {
        tempCurrentAngle += e.detail.distanceFromLast; //Adding rotation
        setCurrentAngle(tempCurrentAngle);
        // console.log(tempCurrentAngle, currentAngle);
        if (tempCurrentAngle < 0) {
          spinnerRef.current.style.transform =
            "rotate(" + tempCurrentAngle + "deg)"; //Actually showing the rotation.
          if (tempCurrentAngle < -360 && !flag) {
            //Once it crosses the threshold.
            flag = true;
            setText("Will spin automatically in 3s");
            setTimeout(() => {
              region.unbind(interactionRef.current, "rotate"); //Unbind the interaction event
              animateSpinner(tempCurrentAngle); //Animate the spinner automatically after 3 secs
              console.log("unbinded", tempCurrentAngle);
            }, 3000);
          }
        }
      });
    }
  }, [spinnerRef, interactionRef]);

  const animateSpinner = (tempCurrentAngle) => {
    const randomAngle = Math.floor(Math.random() * (360 - 300 + 1)) + 300; // Get a random angle between 300 and 360 - Can be changed
    setRotate((rotate) => {
      console.log("In here", randomAngle, currentAngle, rotate);
      if (currentAngle === 0 && typeof tempCurrentAngle === "number") {
        return rotate + randomAngle - tempCurrentAngle;
      } else {
        return randomAngle;
      }
    });
  };

  return (
    <Container>
      <motion.object type="image/svg+xml" data={arrow} className="arrow">
        Arrow
      </motion.object>
      <motion.object
        type="image/svg+xml"
        data={spinner}
        ref={spinnerRef}
        animate={{ rotate: rotate, transition: { duration: 2 } }}
        className="spinner"
        height="100%"
      >
        Spinner
      </motion.object>
      <ProgressContainer>
        <ProgressBar>
          {/*Added the width of the color in progress bar, with a max of 1500 as rotation
              so % of color  =  (progress/1500) * 100
              Also progress = currentAngle * -1
              Have the threshold at 350 i.e. around 23%
          */}
          <div style={{ width: `${(currentAngle * -1) / 15}%` }}></div>
        </ProgressBar>
        <Threshold></Threshold>
      </ProgressContainer>

      <svg height="0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="clip" height="100px" width="100px">
            <path
              d="M130.5 8.5C66.5 30.5 17.3333 12.3333 0 2.5C26 35.7 101.5 32.8333 136 23L140.5 31L161 2.5L126 0L130.5 8.5Z"
              fill="#BBBBBB"
            />
          </clipPath>
        </defs>
      </svg>
      <button style={{ zIndex: 10000 }} onClick={animateSpinner}>
        {text}
      </button>
      <div id="interaction" ref={interactionRef}></div>
    </Container>
  );
}
