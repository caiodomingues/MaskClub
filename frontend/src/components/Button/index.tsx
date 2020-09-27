import React from "react";
import { ButtonProps } from "../../types";

import { Container } from "./styles";

/**
 * The Button component implements the bordered icon component, should be implemented with the Heroicons
 *
 * @component
 * @example
 * return <Container {...rest}>{children}</Container>;
 */
const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default Button;
