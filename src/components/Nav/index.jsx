import React from "react";
import { Container, Icon, Header } from "./styles";
import backArrow from "../../assets/backArrow.svg";
export default function Nav() {
  return (
    <Container>
      <Icon>
        <object data={backArrow}>Go back</object>
      </Icon>
      <Header>Your Rewards</Header>
    </Container>
  );
}
