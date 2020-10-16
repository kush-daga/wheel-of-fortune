import React from "react";
import { Container, InfoBox, FooterText } from "./styles";
export default function Footer() {
  return (
    <Container>
      <InfoBox>
        <h2>Spin the wheel now to get rewared</h2>
        <p>
          Tap on Spin or rotate the wheel anti-clockwise and release to start
          spinning
        </p>
      </InfoBox>
      <FooterText>
        Have a question? <span>Get help</span>
      </FooterText>
    </Container>
  );
}
