import React from "react";
import { Link } from "react-router-dom";
import { DivProps } from "../../types";

import { Container, HelpContainer, HelpText } from "./styles";

const Content: React.FC<DivProps> = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <HelpContainer>
        <HelpText>Having troubles?</HelpText>
        <Link to="/support"> Get Help</Link>
      </HelpContainer>
      {children}
    </Container>
  );
};

export default Content;
