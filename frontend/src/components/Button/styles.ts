import styled from "styled-components";

export const Container = styled.button`
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
  background-color: #fff;

  & p {
    color: #1369ff;
  }

  & svg,
  & p {
    opacity: 0.75;
  }

  &:hover {
    border: 2px solid #5492ff;
    background-color: #5492ff;
    text-decoration: none;
    cursor: pointer;

    & svg,
    & p {
      color: #fff;
      opacity: 1;
    }
  }
`;
