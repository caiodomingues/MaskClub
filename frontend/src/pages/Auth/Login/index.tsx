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

const Login: React.FC = () => {
  return (
    <Container>
      <BlueBar>
        <Lead>
          <h1>Let's make it happen.</h1>
          <p>
            Already own an account? <br />
            So log in and let's go back to work!
          </p>
        </Lead>
      </BlueBar>
      <Content>
        <CardContainer>
          <Link to="/">
            <HiArrowLeft size={12} style={{ marginRight: 8 }} />
            Back
          </Link>
          <h1>Login</h1>
          <Card style={{ padding: 32 }}>
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
            <CardBottom>
              <div className="column">
                <Link to="/">Forgot your e-mail address?</Link>
                <br />
                <Link to="/">Forgot your password?</Link>
              </div>
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

export default Login;
