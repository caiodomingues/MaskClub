import React from "react";
import { DivProps } from "../../types";

import { Base } from "./styles";

/**
 * The base component implements all pages structure
 *
 * @component
 * @example
 * return <Container {...rest}>{children}</Container>;
 */
const Container: React.FC<DivProps> = ({ children, ...rest }) => {
  return <Base {...rest}>{children}</Base>;
};

export default Container;
