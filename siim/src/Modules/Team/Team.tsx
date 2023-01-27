import { Button, Flex, Text, VStack } from "@chakra-ui/react";
import { AnimatePresence, isValidMotionProp, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import styles from "./team.module.css";

import { chakra, shouldForwardProp } from "@chakra-ui/react";
import ChevronRight from "public/icons/ChevronRight";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const teamMembers = [
  {
    src: "/images/Riordan.png",
    alt: "Riordan",
    name: "Riordan Martínez",
    position: "CFO - Chief Financial Officer",
  },
  {
    src: "/images/Felix.png",
    alt: "Felix",
    name: "Félix Torres",
    position: "COO - Chief Operating Officer",
  },
  {
    src: "/images/Miguel.png",
    alt: "Miguel",
    name: "Miguel A. Muñoz",
    position: "Administrative Analyst",
  },
  {
    src: "/images/Jose.png",
    alt: "Jose",
    name: "José Miguel Tovar",
    position: "CSO - Chief Sales Officer",
  },
];

const Team = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <Flex w="100vw" h="100vh" overflow="hidden" pos="relative">
      <AnimatePresence>
        {active === null && (
          <ChakraBox
            pos="absolute"
            top={{ base: 8, md: 16, xl: 32 }}
            left={0}
            right={0}
            // MOTION:
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            // @ts-ignore no problem in operation, although type error appears.
            transition={{ duration: 1 }}
          >
            <VStack spacing={0}>
              <Text fontSize="xl" lineHeight="none">
                Conoce nuestro
              </Text>
              <Text fontSize="6xl" lineHeight="none" fontWeight="bold">
                EQUIPO
              </Text>
              <Text
                as="span"
                fontSize="xs"
                display={{ base: "flex", xl: "none" }}
                pt={4}
                alignItems="center"
                gap={8}
                fontWeight="bold"
                color="gray.300"
              >
                <ChevronRight transform="rotate(180deg)" />
                Desliza
                <ChevronRight />
              </Text>
            </VStack>
          </ChakraBox>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              position: "absolute",
              bottom: 0,
              top: 0,
              left: 0,
              right: 0,
            }}
          >
            <Text
              fontWeight="extrabold"
              fontSize={`${140 / teamMembers[active].alt.length}vw`}
              lineHeight={`${200 / teamMembers[active].alt.length}vh`}
              pos="absolute"
              top={{ base: -16, md: 32, xl: 32 }}
              right={-0}
              color="gray.200"
              textTransform="uppercase"
            >
              {teamMembers[active].alt}
            </Text>

            <VStack
              alignItems={{
                base: "center",
                md: "flex-end",
              }}
              justifyContent={{
                base: "flex-start",
                md: "center",
                xl: "flex-end",
              }}
              w="100%"
              h="100%"
              pos="relative"
              zIndex={100}
              p={{ base: 8, md: 16, xl: 32 }}
              pt={{ base: 16, md: 16, xl: 32 }}
            >
              <Text
                fontSize={{ base: "4xl", md: "6xl" }}
                lineHeight="none"
                fontWeight="bold"
                maxW={{ base: "40rem", md: "20rem", xl: "40rem" }}
                textAlign={{ base: "center", md: "right" }}
              >
                {teamMembers[active].name}
              </Text>
              <Text>{teamMembers[active].position}</Text>

              <Button
                variant="primary"
                onClick={() => setActive(null)}
                rightIcon={
                  <ChevronRight
                    fontSize={{ base: "0.5rem", xl: "0.75rem" }}
                    transform="rotate(90deg)"
                  />
                }
              >
                Ver todo el equipo
              </Button>
            </VStack>
          </motion.div>
        )}
      </AnimatePresence>
      <Flex
        height="100vh"
        width="100vw"
        max-width="100vw"
        overflowY="hidden"
        overflowX={active === null ? "auto" : "hidden"}
      >
        <Flex
          className={styles.parent}
          w={{ base: "200vw", xl: "100%" }}
          position="relative"
        >
          {teamMembers.map((member, i) => {
            return (
              <AnimatePresence key={i}>
                {(active === null || active === i) && (
                  <ChakraBox
                    display="flex"
                    position="absolute"
                    h={active === i ? { base: "75vh", md: "100vh" } : "75vh"}
                    //   minW={"24rem"}
                    ml={{ base: -16, md: -4 }}
                    left={
                      active === i
                        ? { base: 0, md: 16, xl: 32 }
                        : {
                            base: `${50 * i}%`,
                            md: `${33 * i}%`,
                            xl: `${25 * i}%`,
                          }
                    }
                    bottom={0}
                    right={0}
                    margin={active === null ? "" : "auto"}
                    style={{
                      aspectRatio: "2/3",
                      transition: "all 0.75s ease",
                    }}
                    onClick={() => {
                      setActive(i);
                    }}
                    //MOTION:
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    // @ts-ignore no problem in operation, although type error appears.
                    transition={{ duration: 0.5, delay: i / 2, ease: "easeIn" }}
                  >
                    <Flex flexGrow={1} transition="0.5s" cursor="pointer">
                      <Image src={member.src} alt={member.alt} fill />
                    </Flex>
                  </ChakraBox>
                )}
              </AnimatePresence>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Team;
