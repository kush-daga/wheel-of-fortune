import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 8vh;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: left;
  z-index: 102;
`;

export const Header = styled.h4`
  font-size: 16px;
`;

export const Icon = styled.div`
  margin-right: 1em;
  margin-left: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  object {
    font-size: 40px;
  }
`;
