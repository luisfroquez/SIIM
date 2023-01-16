import Hero from "@/Modules/Home/Hero";
import SocialMedia from "@/Modules/Home/SocialMedia";
import Navbar from "@/Modules/Navbar/Navbar";
import { Flex } from "@chakra-ui/react";
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
      <Flex
        as="main"
        w="100vw"
        h="100vh"
        overflowX="hidden"
        overflowY="auto"
        flexDir="column"
      >
        <Navbar />
        <Hero />
        <SocialMedia />
      </Flex>
    </>
  );
}
