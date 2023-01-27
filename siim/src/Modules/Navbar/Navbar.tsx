import {
  Box,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuIcon,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import Logo from "public/Logo";
import { useState } from "react";

const menuArray = [
  { label: "Inicio", url: "/" },
  { label: "Empresa", url: "/#empresa" },
  { label: "Servicios", url: "/" },
  { label: "Equipo", url: "/" },
  { label: "Certificaciones", url: "/" },
  { label: "Distribuidora", url: "/" },
];

const Navbar = () => {
  const [hover, setHover] = useState<number>();
  return (
    <Stack
      p={8}
      spacing={6}
      alignItems="center"
      w="100%"
      direction={{ base: "row", xl: "column" }}
      justifyContent="space-between"
    >
      <Logo width={32} />

      <Menu>
        <Button variant="menu" display={{ base: "flex", xl: "none" }}>
          Menu
        </Button>
      </Menu>

      <HStack spacing={6} display={{ base: "none", xl: "flex" }}>
        {menuArray.map((item, i) => (
          <VStack key={i} spacing={0}>
            <Link href={item.url} scroll={false} replace>
              <Text
                variant="navBarLink"
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(undefined)}
                transform={hover === i ? "translate(0px,-5px)" : ""}
              >
                {item.label}
              </Text>
            </Link>
            <Box
              height="1px"
              bg="blue.500"
              transition="0.5s"
              w="110%"
              maxW={hover === i ? 1000 : 0}
            />
          </VStack>
        ))}
      </HStack>
    </Stack>
  );
};

export default Navbar;
