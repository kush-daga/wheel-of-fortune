import React from "react";
import Wheel from "./components/Wheel";
import styled from "styled-components";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <Container>
      <Nav />
      <Wheel />
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
