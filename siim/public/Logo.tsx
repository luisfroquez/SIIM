import { Stack, StackDirection, StackProps } from "@chakra-ui/react";
import { SiimIsotipo, SiimIsotipoProps } from "./SiimIsotipo";
import { SiimLettersLogo, SiimLettersLogoProps } from "./SiimLettersLogo";

interface LogoProps extends SiimIsotipoProps, SiimLettersLogoProps {
  direction?: StackDirection;
  spacing?: number | string;
  width?: number | string;
  isotipoWidth?: number | string;
  lettersWidth?: number | string;
  containerProps?: StackProps;
}

const Logo = ({
  direction = "row",
  spacing,
  width = "100%",
  isotipoWidth = "45%",
  lettersWidth = "55%",
  containerProps,
  circleColor,
  crossColor,
  iconsColor,
  siimIsotipoProps,
  siimLettersLogoProps,
}: LogoProps) => {
  return (
    <Stack
      width={width}
      direction={direction}
      spacing={spacing}
      alignItems="center"
      {...containerProps}
    >
      <SiimIsotipo
        width={isotipoWidth}
        circleColor={circleColor}
        crossColor={crossColor}
        iconsColor={iconsColor}
        siimIsotipoProps={siimIsotipoProps}
      />
      <SiimLettersLogo
        width={lettersWidth}
        siimLettersLogoProps={siimLettersLogoProps}
      />
    </Stack>
  );
};

export default Logo;
