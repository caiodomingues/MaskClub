import styled from "styled-components";

export const Container = styled.div`
  background-color: #1369ff;
  color: #fff;
  padding: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 75px;
`;

export const Logo = styled.img`
  height: auto;
  width: ${(props) => props.width || 200};
  margin: 0 auto;
  position: absolute;
  top: 50px;
`;

export const SignImage = styled.img`
  height: auto;
  width: 150px;
  position: absolute;
  bottom: 15px;
  right: 0;
  margin-right: -3px;
`;
