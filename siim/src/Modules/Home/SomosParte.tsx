import { Center, Text } from "@chakra-ui/react";
import Logo from "public/Logo";
import { SiimIsotipo } from "public/SiimIsotipo";

const SomosParte = () => {
  return (
    <Center minH="100vh" pos="relative">
      <Text
        fontSize={{ base: "2xl", xl: "4xl" }}
        lineHeight={{ base: 8, xl: 10 }}
        maxW={{ base: 80, md: "24rem", xl: "50rem" }}
      >
        Somos parte de su equipo de operaciones de construcción y{" "}
        <strong>
          trabajamos para garantizar que sus sistemas estén listos para operar
          en cualquier momento.
        </strong>
      </Text>
      {/* <Logo containerProps={{ pos: "absolute", inset: "0,0,0,0" }} /> */}
      <SiimIsotipo
        width={{ base: "40rem", md: "32rem" }}
        circleColor="transparent"
        crossColor="#00000010"
        iconsColor="#00000010"
        siimIsotipoProps={{ pos: "absolute" }}
      />
    </Center>
  );
};

export default SomosParte;
