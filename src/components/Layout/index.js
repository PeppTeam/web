import React from "react";
import { Flex } from "@rebass/grid";

export const Narrow = props => (
  <Flex
    flexDirection="column"
    {...props}
    css={{
      width: "100%",

      maxWidth: "800px"
    }}
  />
);

export const Wide = props => (
  <Flex
    flexDirection="column"
    {...props}
    css={{
      width: "100%",
      maxWidth: "1200px"
    }}
  />
);
export const Section = props => (
  <Flex
    px={2}
    alignItems="center"
    flexDirection="column"
    {...props}
    css={{
      width: "100vw"
    }}
  />
);
