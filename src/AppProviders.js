//@flow
import * as React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
export const AppProviders: React.AbstractComponent<{|
  children: React.Node,
|}> = (props) => (
  <ThemeProvider>
    <CSSReset />
    {props.children}
  </ThemeProvider>
);
