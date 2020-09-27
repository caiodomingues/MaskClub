import React from "react";

import { Logo, Container, SignImage } from "./styles";

import MaskClub from "../../assets/logo.svg";
import TinyMaskClub from "../../assets/tiny-logo.svg";
import SignIn from "../../assets/sign.svg";

import { DivProps } from "../../types";

/**
 * The BlueBar component implements the left side menu bar, it does handle the Logo and the SignImage as well.
 *
 * @component
 * @example
 * return (
 *   <Container style={{ width: compact ? 75 : 425 }} {...rest}>
 *     <Logo
 *       src={!compact ? MaskClub : TinyMaskClub}
 *       width={!compact ? 200 : 50}
 *     />
 *     {children}
 *     {!compact && <SignImage src={SignIn} />}
 *   </Container>
 * );
 */
const BlueBar: React.FC<DivProps> = ({ children, compact, ...rest }) => {
  return (
    <Container style={{ width: compact ? 75 : 425 }} {...rest}>
      <Logo
        src={!compact ? MaskClub : TinyMaskClub}
        width={!compact ? 200 : 50}
      />
      {children}
      {!compact && <SignImage src={SignIn} />}
    </Container>
  );
};

export default BlueBar;
