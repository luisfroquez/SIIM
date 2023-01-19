import {
  ComponentDefaultProps,
  ComponentSingleStyleConfig,
  Theme,
} from "@chakra-ui/react";

export const Text: ComponentSingleStyleConfig = {
  variants: {
    navBarLink: {
      fontWeight: "normal",
      transition: "0.5s",
      cursor: "pointer",
      as: "a",
      size: "md",
      lineHeight: 6,
      color: "gray.700",
      _hover: { color: "blue.500" },
    },
  },
};
