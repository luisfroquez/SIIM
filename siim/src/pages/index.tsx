import Certificates from "@/Modules/Certificates/Certificates";
import Empresa from "@/Modules/Empresa/Empresa";
import Hero from "@/Modules/Home/Hero";
import SocialMedia from "@/Modules/Home/SocialMedia";
import SomosParte from "@/Modules/Home/SomosParte";
import Navbar from "@/Modules/Navbar/Navbar";
import Servicios from "@/Modules/Servicios/Servicios";
import Team from "@/Modules/Team/Team";
import { Flex, VStack } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>SIIM Group</title>
        <meta name="description" content="Fire & electrical systems" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex as="main" flexDir="column">
        <VStack minH="100vh">
          <Navbar />
          <Hero />
          <SocialMedia />
        </VStack>
        <Empresa />
        <SomosParte />
        <Servicios />
        <Certificates />
        <Team />
      </Flex>
    </>
  );
}
