import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import spinner from "../../assets/spinner.svg";
import arrow from "../../assets/arrow.svg";
import { motion } from "framer-motion";

export default function Wheel() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    console.log(rotate);
  }, [rotate]);

  const animateSpinner = () => {
    setRotate(
      (prevRotate) =>
        prevRotate + Math.floor(Math.random() * (1000 - 240 + 1)) + 240
    );
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
        className={`spinner`}
        height="140%"
      >
        Spinner
      </motion.object>

      <button onClick={animateSpinner}>Spin</button>
    </Container>
  );
}
