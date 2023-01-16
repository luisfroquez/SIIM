import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuIcon,
  Stack,
  Text,
} from "@chakra-ui/react";
import Logo from "public/Logo";

const menuArray = [
  { label: "Inicio", url: "/" },
  { label: "Empresa", url: "/" },
  { label: "Servicios", url: "/" },
  { label: "Equipo", url: "/" },
  { label: "Certificaciones", url: "/" },
  { label: "Distribuidora", url: "/" },
];

const Navbar = () => {
  return (
    <Stack p={8} spacing={6} alignItems="center" direction={{base:"row", xl:"column"}} justifyContent="space-between">
      <Logo width={32} />

      <Menu >
        <Button variant="menu" display={{base:"flex", xl:"none"}}>Menu</Button>
      </Menu>

      <HStack spacing={6} display={{ base: "none", xl: "flex" }}>
        {menuArray.map((item, i) => (
          <Text as="a" key={i} size="md" lineHeight={6} color="gray.700">
            {item.label}
          </Text>
        ))}
      </HStack>
    </Stack>
  );
};

export default Navbar;
