export const Button = {
  // style object for base or default style
  baseStyle: {
    h: "fit-content",
    w: "fit-content",
    fontWeight: "semibold",
    transition: "0.5s",
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    lg: { px: 6, py: 4, fontSize: "lg", lineHeight: 6 },
    md: { px: 4, py: 3, fontSize: "md", lineHeight: 6 },
    sm: { px: 3, py: 2, fontSize: "sm", lineHeight: 5 },
    xs: { px: 2, py: 1, fontSize: "xs", lineHeight: 4 },
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    home: {
      border: "1px",
      borderColor: "white",
      color: "white",
      fontWeight: "normal",
      _hover: { color: "gray.800", bg: "white" },
    },
    menu: {
      border: "1px",
      borderColor: "gray.800",
      color: "gray.800",
      fontWeight: "normal",
      _hover: { color: "white", bg: "gray.800" },
    },
  },
  // default values for `size` and `variant`
  defaultProps: { size: "sm" },
};
