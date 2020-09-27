import React from "react";
import { DivProps } from "../../types";

import { Container } from "./styles";

/**
 * The Lead component implements the BlueBar of public routes text
 *
 * @component
 * @example
 * return <Container {...rest}>{children}</Container>;
 */
const Lead: React.FC<DivProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default Lead;
