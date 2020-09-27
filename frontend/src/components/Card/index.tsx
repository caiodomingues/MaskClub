import React from "react";

import { Container } from "./styles";
import { DivProps } from "../../types";

/**
 * The card component implements the base layout for every card
 *
 * @component
 * @example
 * return <Container {...rest}>{children}</Container>;
 */
const Card: React.FC<DivProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default Card;
