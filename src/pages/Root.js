//@flow
import * as React from 'react';
import { Heading, Text } from '@chakra-ui/core';
import { AppProviders } from '../AppProviders';
const Root: React.AbstractComponent<{}> = () => {
  return (
    <AppProviders>
      <Heading>Hello</Heading>
      <Text fontSize="3xl">Chakra</Text>
    </AppProviders>
  );
};

export default Root;
