import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import spinner from "../../assets/spinner.svg";
import arrow from "../../assets/arrow.svg";
import { motion } from "framer-motion";

export default function Wheel() {
  const [isSpinning, setIsSpinning] = useState(false);
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
  ];
  useEffect(() => {
    console.log(rotate);
    const normalizedAngle = parseInt(rotate) + 30;
    const baseAngle = normalizedAngle % 360;
    const index = Math.floor(baseAngle / 45);
    console.log(
      "hello  " +
        normalizedAngle +
        "  " +
        Math.floor(baseAngle / 45) +
        "  " +
        (Math.floor(baseAngle / 45) + 1) +
        "   " +
        prizes[
          Math.floor(baseAngle / 45) === -1 ? 0 : Math.floor(baseAngle / 45)
        ].text
    );
  }, [rotate]);

  const animateSpinner = () => {
    const randomAngle = Math.floor(Math.random() * (1000 - 240 + 1)) + 240;
    setRotate((rotate) => {
      console.log("In here");
      return rotate + randomAngle;
    });
  };

  return (
    <Container speed={Math.floor(Math.random() * (100 - 50 + 1)) + 50}>
      <motion.object type="image/svg+xml" data={arrow} className="arrow">
        Arrow
      </motion.object>

      <motion.object
        type="image/svg+xml"
        data={spinner}
        animate={{ rotate: rotate, transition: { duration: 2 } }}
        className="spinner"
        height="140%"
        onClick={animateSpinner}
      >
        Spinner
      </motion.object>

      <button onClick={animateSpinner}>Spin</button>
    </Container>
  );
}
