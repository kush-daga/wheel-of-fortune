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
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100%;
    z-index: 100;
  }
`;
