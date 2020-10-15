import React, { useState, useEffect, useRef } from "react";
import { Container } from "./styles";
import spinner from "../../assets/spinner.svg";
import arrow from "../../assets/arrow.svg";

export default function Wheel() {
  const [classNameAnimation, setClassNameAnimation] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);
  const spinnerRef = useRef(null);
  const arrowRef = useRef(null);

  const animate = (ref) => {
    setClassNameAnimation("animate");
    setIsSpinning(true);
    //Stop Animation after some time
    setTimeout(() => {
      console.log("Stopping");
      ref.current.style["animation-play-state"] = "paused";
      setIsSpinning(false);
    }, 5000);
  };

  const prizes = [
    {
      text: "Rs. 50",
    },
    {
      text: "Rs. 20",
    },
    {
      text: "BetterLuck next Time",
    },
    {
      text: "Double the Savings",
    },
    {
      text: "Rs. 10",
    },
    {
      text: "Rs. 100",
    },
    {
      text: "Rs. 5",
    },
    {
      text: "Multiply savings to 1.5x",
    },
  ];

  useEffect(() => {
    if (spinnerRef.current && arrowRef.current) {
      // animate(spinnerRef);
    }
  }, [spinnerRef, arrowRef]);

  return (
    <Container speed={Math.floor(Math.random() * (100 - 50 + 1)) + 50}>
      <div className="arrow">
        <div className="top"></div>
        <div className="bottom"></div>
      </div>
      <object
        type="image/svg+xml"
        ref={arrowRef}
        data={arrow}
        className="arrow"
      >
        Arrow
      </object>
      <object
        type="image/svg+xml"
        data={spinner}
        ref={spinnerRef}
        className="spinner animate"
        height="140%"
      >
        Spinner
      </object>
    </Container>
  );
}
