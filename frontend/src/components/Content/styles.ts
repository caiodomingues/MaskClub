import styled from "styled-components";

export const Container = styled.div`
  background-color: #f9fbff;
  color: #181818;
  width: 100%;
  padding: 20px 120px;
  position: relative;
  display: flex;
  justify-content: left;
  align-items: center;
`;

export const HelpContainer = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  font-weight: bold;
  font-family: "Inter", sans-serif;
`;

export const HelpText = styled.span`
  color: #000;
  opacity: 0.5;
`;
