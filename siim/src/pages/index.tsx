import MobileMenu from "@/Components/Navbar/MobileMenu";
import Certificates from "@/Modules/Home/Certificates/Certificates";
import Contacto from "@/Modules/Home/Contacto/Contacto";
import Empresa from "@/Modules/Home/Empresa/Empresa";
import HomeComponent from "@/Modules/Home/HomeComponent";
import SomosParte from "@/Modules/Home/SomosParte";
import DynamicNavbar from "@/Components/Navbar/DynamicNavbar";
import Servicios from "@/Modules/Home/Servicios/Servicios";
import Team from "@/Modules/Home/Team/Team";
import { Flex, useDisclosure } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "@/Components/footer/Footer";

export default function Home() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Head>
        <title>SIIM Group</title>
        <meta name="description" content="Fire & electrical systems" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DynamicNavbar toggleMenuMobile={onToggle} />
      <MobileMenu isOpen={isOpen} toggleMenu={onToggle} />
      <Flex pos="relative" overflow="hidden" flexDir="column">
        <HomeComponent toggleMenuMobile={onToggle} />
        <Empresa />
        <SomosParte />
        <Servicios />
        <Certificates />
        <Team />
        <Contacto />
        <Footer />
      </Flex>
    </>
  );
}
