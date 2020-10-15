import React from "react";
import Wheel from "./components/Wheel";
import styled from "styled-components";
function App() {
  return (
    <Container>
      <Wheel />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
