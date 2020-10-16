import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  max-width: 768px;
  max-height: 768px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .arrow {
    height: 2em;
    width: 2em;
    margin: auto;
    position: absolute;
    top: 10%;
    z-index: 100;
    /* opacity: 0.4; */
  }
  .spinner {
    margin-bottom: 0;
    transform: rotate(130deg);
    /* opacity: 0.4; */
  }

  #interaction {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
    height: 50vh;
    width: 100%;
    z-index: 100;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  margin: auto;
  height: 80px;
  background: #bbbbbb;
  margin-bottom: 0.5em;
  position: relative;
  clip-path: url(#clip);
  div {
    border: 1px solid black;
    background: linear-gradient(
      90deg,
      #e23a3a -5.09%,
      #dbd174 44.46%,
      #148e2f 87.58%
    );
    height: 100%;
  }
`;
export const Threshold = styled.div`
  background: black;
  width: 3px;
  height: 50px;
  z-index: 104;
  position: absolute;
  top: 0;
  left: 23%;
  transform: translate(-23%, 0);
`;

export const ProgressContainer = styled.div`
  height: 10vh;
  width: 50%;
  position: relative;
`;
// clip-path: polygon(
//   0 45%,
//   3% 53%,
//   8% 66%,
//   15% 78%,
//   22% 85%,
//   36% 90%,
//   50% 90%,
//   64% 87%,
//   78% 77%,
//   84% 70%,
//   86% 91%,
//   100% 21%,
//   78% 0,
//   81% 26%,
//   71% 36%,
//   61% 45%,
//   50% 50%,
//   37% 53%,
//   25% 54%,
//   11% 51%,
//   0 44%
// );
