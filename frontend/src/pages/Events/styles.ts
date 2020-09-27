import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 750px;
  position: absolute;
  top: 150px;

  & div {
    position: relative;
    padding: 24px;

    & h1 {
      max-width: 600px;
    }

    & svg {
      position: absolute;
      right: 16px;
      top: 16px;
      opacity: 0.5;

      :hover {
        opacity: 1;
        color: #ff1333;
        cursor: pointer;
      }
    }
  }
`;
