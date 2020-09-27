import React from "react";
import { InputProps } from "../../types";

import { Container } from "./styles";

/**
 * The Input component implements the base layout of a input
 *
 * @component
 * @example
 *  <Container>
 *    <input {...rest} />
 *  </Container>
 */
const Input: React.FC<InputProps> = ({ ...rest }) => {
  return (
    <Container>
      <input {...rest} />
    </Container>
  );
};

export default Input;
