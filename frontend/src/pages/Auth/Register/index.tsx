import React from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft, HiOutlineDownload } from "react-icons/hi";

import { CardContainer, CardBottom, Button } from "./styles";

import BlueBar from "../../../components/BlueBar";
import Content from "../../../components/Content";
import Container from "../../../components/Container";
import Card from "../../../components/Card";
import Lead from "../../../components/Lead";
import Input from "../../../components/Input";

const Register: React.FC = () => {
  return (
    <Container>
      <BlueBar>
        <Lead>
          <h1>Let's make it happen.</h1>
          <p>
            Doesn't have an account yet? <br />
            You're few steps away from one ;)
          </p>
        </Lead>
      </BlueBar>
      <Content>
        <CardContainer>
          <Link to="/">
            <HiArrowLeft size={12} style={{ marginRight: 8 }} />
            Back
          </Link>
          <h1>Register</h1>
          <Card style={{ padding: 32 }}>
            <label htmlFor="name">Name</label>
            <Input type="text" id="name" name="name" placeholder="John Doe" />
            <br />
            <label htmlFor="email">E-mail Address</label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
            />
            <br />
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="********"
            />
            <br />
            <label htmlFor="c_password">Confirm Password</label>
            <Input
              type="password"
              id="c_password"
              name="password"
              placeholder="********"
            />
            <CardBottom>
              <p>
                By registering on MaskClub you agree to the{" "}
                <a href="#">Terms of Service</a> and{" "}
                <a href="#">Privacy Policy</a>.
              </p>
              <Button type="submit">
                <HiOutlineDownload
                  size={56}
                  style={{ transform: "rotate(-90deg)", opacity: 0.75 }}
                />
              </Button>
            </CardBottom>
          </Card>
        </CardContainer>
      </Content>
    </Container>
  );
};

export default Register;
