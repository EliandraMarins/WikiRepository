import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-color: #fafafa;
  border: 1px solid #FAFAFA;
  border-radius: 20px;

  height: 42px;
  width: 50%;

  margin: 20px;

  &: hover {
    background-color: #FAFAFA40;
    transition: .2s;
    cursor: pointer
  }

`;
