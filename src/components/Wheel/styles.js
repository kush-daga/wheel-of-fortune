import styled, { css } from "styled-components";

function createCSS() {
  let styles = "";

  for (let i = 0; i < 8; i += 1) {
    styles += `
         li:nth-child(${i + 1}) {
            -webkit-transform: rotate(${i * 45}deg) skewY(-450deg);
            -ms-transform: rotate(${i * 45}deg) skewY(-45deg);
            transform: rotate(${i * 45}deg) skewY(-45deg);
         }
         li:nth-child(${i + 1}) .text {
           background: rgb(0,0,${i * 28});
           color: white;
         }
       `;
  }

  return css`
    ${styles}
  `;
}

export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  max-width: 768px;
  max-height: 768px;
  margin: auto;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .circle {
    position: relative;
    padding: 0;
    width: 90vw;
    height: 90vw;
    margin: auto;
    border-radius: 50%;
    list-style: none;
    overflow: hidden;
  }

  li {
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 50%;
    transform-origin: 0% 100%;
  }
  .text {
    position: absolute;
    left: -100%;
    width: 200%;
    height: 200%;
    text-align: center;
    /* -webkit-transform: skewY(45deg) rotate(22.5deg);
    -ms-transform: skewY(45deg) rotate(22.5deg); */
    transform: skewY(45deg) rotate(22.5deg);
    padding-top: 20px;
  }
  ${createCSS()};

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
    margin: auto;
    margin-top: 0;
    transform: rotate(130deg);
    /* opacity: 0.4; */
  }

  #interaction {
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100%;
    z-index: 100;
  }
`;
