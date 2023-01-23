import { Flex, Heading, HStack, Square, Text, VStack } from "@chakra-ui/react";
import ServicesList from "./ServicesList";
import ServicesListDos from "./ServicesList";

const Servicios = () => {
  return (
    <VStack py={32} justifyContent="space-between">
      <VStack px={{ base: 8, md: 16, xl: 32 }} pb={16}>
        <Heading
          fontSize={{ base: "4xl", xl: "6xl" }}
          fontWeight="bold"
          lineHeight="none"
          alignSelf="flex-start"
        >
          NUESTROS <br /> SERVICIOS.
        </Heading>
        <Text fontSize="md" lineHeight={6}>
          Nos enfocamos en satisfacer las necesidades en las áreas de seguridad
          electrónica, sistema de protección contra incendios y electricidad
          para el sector industrial, retail, edificios comerciales y
          habitacionales.
        </Text>
      </VStack>

      <ServicesList />
    </VStack>
  );
};

export default Servicios;
