import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const InfoBox = styled.div`
  width: 90%;
  height: fit-content;
  margin-top: 2vh;
  text-align: center;
  background: white;
  border-radius: 12px;
  padding: 20px;

  h2 {
    font-size: 20px;
    line-height: 24px;
  }

  p {
    font-size: 14px;
  }
`;

export const FooterText = styled.p`
  margin-bottom: 2em;
  span {
    color: #fab821;
  }
`;
