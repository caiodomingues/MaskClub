import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

export const BlueBar = styled.div`
  background-color: #1369ff;
  color: #fff;
  width: 425px;
  padding: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
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

export const HelpLink = styled.a`
  text-decoration: none;
  color: #1369ff;

  &:hover {
    cursor: pointer;
  }
`;

export const Logo = styled.img`
  height: auto;
  width: 200px;
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

export const LeadTitle = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-weight: 900;
`;

export const LeadSubtitle = styled.p`
  opacity: 0.75;
`;

export const LeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: 900;
  font-size: 32px;
`;

export const Description = styled.p`
  opacity: 0.5;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 750px;
`;

export const Card = styled.a`
  width: 100%;
  margin: 20px 0;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
  padding: 16px;
  border: 2px solid transparent;
  transition: all 0.25s ease-in-out;
  display: flex;
  flex-direction: row;
  text-decoration: none;
  color: #000;

  &:hover {
    border: 2px solid #5492ff;
    background-color: #e1ebff;
    color: #000;
    text-decoration: none;
    cursor: pointer;

    & div:first-child {
      background-color: #5492ff;
      border: 2px solid #5492ff;
    }

    & div img {
      color: #fff;
    }
  }
`;

export const CardIcon = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.16);
  border-radius: 15px;
  padding: 15px;
  width: 75px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.25s ease-in-out;
`;

export const CardContent = styled.div`
  flex-direction: column;
  margin-left: 20px;
`;

export const CardTitle = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 24px;
`;

export const CardText = styled.p`
  opacity: 0.5;
`;

export const Icon = styled.img`
  width: ${(props) => props.width || "20px"};
  height: auto;
  opacity: 0.5;
`;
