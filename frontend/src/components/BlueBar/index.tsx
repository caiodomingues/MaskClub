import React from "react";

import { Logo, Container, SignImage } from "./styles";

import MaskClub from "../../assets/logo.svg";
import SignIn from "../../assets/sign.svg";

import { DivProps } from "../../types";

const BlueBar: React.FC<DivProps> = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <Logo src={MaskClub} />
      {children}
      <SignImage src={SignIn} />
    </Container>
  );
};

export default BlueBar;
