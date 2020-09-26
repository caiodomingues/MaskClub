import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 750px;
`;

export const CardBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;

  .column {
    display: flex;
    flex-direction: column;
  }

  p {
    max-width: 450px;
    font-size: 14px;
  }
`;

export const Button = styled.button`
  border: 2px solid #5492ff;
  border-radius: 15px;
  padding: 15px;
  width: 75px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.25s ease-in-out;
  margin-top: 16px;

  &:hover {
    border: 2px solid #5492ff;
    background-color: #5492ff;
    text-decoration: none;
    cursor: pointer;
  }
`;
