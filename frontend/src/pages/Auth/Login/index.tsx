import React, { FormEvent } from "react";
import { Link, useHistory } from "react-router-dom";
import { HiArrowLeft, HiOutlineDownload } from "react-icons/hi";

import { CardContainer, CardBottom } from "./styles";

import Button from "../../../components/Button";
import BlueBar from "../../../components/BlueBar";
import Content from "../../../components/Content";
import Container from "../../../components/Container";
import Card from "../../../components/Card";
import Input from "../../../components/Input";
import Lead from "../../../components/Lead";

const Login: React.FC = () => {
  const history = useHistory();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    history.push("/events");
  };

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
            <form onSubmit={handleSubmit}>
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
                    style={{ transform: "rotate(-90deg)" }}
                  />
                </Button>
              </CardBottom>
            </form>
          </Card>
        </CardContainer>
      </Content>
    </Container>
  );
};

export default Login;
