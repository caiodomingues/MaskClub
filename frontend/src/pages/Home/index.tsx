import React from "react";

import {
  Container,
  BlueBar,
  Content,
  Logo,
  SignImage,
  LeadContainer,
  LeadTitle,
  LeadSubtitle,
  HelpContainer,
  HelpText,
  HelpLink,
  ContentContainer,
  Title,
  Description,
  CardContainer,
  Card,
  CardTitle,
  CardText,
  CardIcon,
  Icon,
  CardContent,
} from "./styles";

import SignIn from "../../assets/sign.svg";
import MaskClub from "../../assets/logo.svg";

import Login from "../../assets/login.svg";
import Credential from "../../assets/credential.svg";

const Home: React.FC = () => {
  return (
    <Container>
      <BlueBar>
        <Logo src={MaskClub} />

        <LeadContainer>
          <LeadTitle>
            A few clicks away from showing your event to the world.
          </LeadTitle>
          <LeadSubtitle>
            Share your event in minutes.
            <br />
            Save time and money.
          </LeadSubtitle>
        </LeadContainer>

        <SignImage src={SignIn} />
      </BlueBar>
      <Content>
        <HelpContainer>
          <HelpText>Having troubles?</HelpText>
          <HelpLink href="#"> Get Help</HelpLink>
        </HelpContainer>
        <ContentContainer>
          <Title>Let's make it happen.</Title>
          <Description>
            Sharing your event in Brazil is just a few steps away. <br />
            Make login or register right now.
          </Description>
          <CardContainer>
            <Card href="/login">
              <CardIcon>
                <Icon width="55px" src={Login} />
              </CardIcon>
              <CardContent>
                <CardTitle>Login</CardTitle>
                <CardText>
                  Already own an account? So let's go back to work!
                </CardText>
              </CardContent>
            </Card>
            <Card href="/register">
              <CardIcon>
                <Icon width="36px" src={Credential} />
              </CardIcon>
              <CardContent>
                <CardTitle>Register</CardTitle>
                <CardText>
                  Doesn't have an account yet? You're few steps away from one ;)
                </CardText>
              </CardContent>
            </Card>
          </CardContainer>
        </ContentContainer>
      </Content>
    </Container>
  );
};

export default Home;
