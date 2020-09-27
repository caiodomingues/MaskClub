import React from "react";
import { Link } from "react-router-dom";
import { DivProps } from "../../types";

import { Container, HelpContainer, HelpText } from "./styles";

/**
 * The Content component is responsible for the page apart of the BlueBar
 * This component also handles the Help text on the topmost right of the page
 *
 * @component
 * @example
 * return (
 *  <Container {...rest}>
 *    <HelpContainer>
 *      <HelpText>Having troubles?</HelpText>
 *      <Link to="/support"> Get Help</Link>
 *    </HelpContainer>
 *    {children}
 *  </Container>
 * );
 */
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
