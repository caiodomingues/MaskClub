import React from "react";
import { HiOutlineDownload, HiOutlineUserAdd } from "react-icons/hi";
import { Link } from "react-router-dom";

import {
  ContentContainer,
  Description,
  CardContainer,
  CardIcon,
  CardContent,
} from "./styles";

import BlueBar from "../../components/BlueBar";
import Content from "../../components/Content";
import Container from "../../components/Container";
import Card from "../../components/Card";
import Lead from "../../components/Lead";

const Home: React.FC = () => {
  return (
    <Container>
      <BlueBar>
        <Lead>
          <h1>A few clicks away from showing your event to the world.</h1>
          <p>
            Share your event in minutes.
            <br />
            Save time and money.
          </p>
        </Lead>
      </BlueBar>
      <Content>
        <ContentContainer>
          <h1>Let's make it happen.</h1>
          <Description>
            Sharing your event in Brazil is just a few steps away. <br />
            Make login or register right now.
          </Description>
          <CardContainer>
            <Card>
              <Link className="clickable row" to="/login">
                <CardIcon>
                  <HiOutlineDownload
                    size={42}
                    style={{ transform: "rotate(-90deg)" }}
                  />
                </CardIcon>
                <CardContent>
                  <h1>Login</h1>
                  <p>Already own an account? So let's go back to work!</p>
                </CardContent>
              </Link>
            </Card>

            <Card>
              <Link className="clickable row" to="/register">
                <CardIcon>
                  <HiOutlineUserAdd size={42} />
                </CardIcon>
                <CardContent>
                  <h1>Register</h1>
                  <p>
                    Doesn't have an account yet? You're few steps away from one
                    ;)
                  </p>
                </CardContent>
              </Link>
            </Card>
          </CardContainer>
        </ContentContainer>
      </Content>
    </Container>
  );
};

export default Home;
