import SlideIn from "@/Components/Animations/SlideIn";
import {
  CloseCircleOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  PushpinOutlined,
} from "@ant-design/icons";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  Tooltip,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import PinIcon from "public/icons/PinIcon";
import { useState } from "react";
import ReactMapGL, {
  Marker,
  Map,
  NavigationControl,
  Popup,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";

const Contacto = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isMd] = useMediaQuery("(min-width: 48em)");
  const LATITUDE = -33.44797;
  const LONGITUDE = -70.64559;
  return (
    <Center
      flexDir={{ base: "column-reverse", md: "row" }}
      w="100vw"
      h="100vh"
      overflow="hidden"
      id="contacto"
      pos="relative"
    >
      <SlideIn direction="toDown">
        <Map
          initialViewState={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            zoom: 12,
            bearing: 0,
            pitch: 0,
          }}
          style={{ width: "100%", height: "100%" }}
          crossSourceCollisions
          mapStyle="mapbox://styles/mapbox/light-v9"
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
          attributionControl={false}
          scrollZoom={false}
          dragPan={isMd}
        >
          <NavigationControl position="bottom-left" />

          <Marker
            key={1}
            longitude={LONGITUDE}
            latitude={LATITUDE}
            anchor="top"
            onClick={(e) => {
              // If we let the click event propagates to the map, it will immediately close the popup
              // with `closeOnClick: true`
              e.originalEvent.stopPropagation();
              setShowPopup(true);
            }}
          >
            <PinIcon transform={"scale(2)"} />
          </Marker>

          {showPopup && (
            <Popup
              longitude={LONGITUDE}
              latitude={LATITUDE}
              anchor="top"
              closeButton={false}
              closeOnClick={false}
              offset={[0, 24]}
              onClose={() => setShowPopup(false)}
              style={{ minWidth: "350px" }}
            >
              <HStack lineHeight="0.9rem" p={4}>
                <VStack w="100%" spacing={1}>
                  <Text fontWeight="bold" textAlign="left" w="100%">
                    Eleuterio Ram??rez 731, Local A.
                  </Text>
                  <Text>8330253 Santiago, Regi??n Metropolitana, Chile</Text>
                </VStack>
                <Link
                  href="https://www.google.com/maps/place/Eleuterio+Ram%C3%ADrez+731,+8330253+Santiago,+Regi%C3%B3n+Metropolitana,+Chile/@-33.448038,-70.646019,18z/data=!4m5!3m4!1s0x9662c50b2c987881:0x7bb9883a07ee293!8m2!3d-33.4480591!4d-70.645584?hl=en-US"
                  target="_blank"
                >
                  <VStack>
                    <Text
                      minW="max-content"
                      lineHeight="none"
                      textAlign="center"
                    >
                      ??C??mo llegar?
                    </Text>
                  </VStack>
                </Link>
              </HStack>

              <Button
                variant="secondary"
                size="xs"
                lineHeight="none"
                pos="absolute"
                top={2}
                fontSize="0.5rem"
                right={2}
                onClick={() => setShowPopup(false)}
              >
                X
              </Button>
            </Popup>
          )}
        </Map>
      </SlideIn>

      <SlideIn direction="toUp" style={{ position: "relative", zIndex: 2 }}>
        <VStack
          bg="white"
          w="100%"
          h="100%"
          justifyContent="space-between"
          textAlign={{ base: "left", md: "right" }}
          p={{ base: 8, md: 16, xl: 32 }}
          pt={{ base: 24, md: 32 }}
        >
          <VStack
            spacing={{ base: 6, md: 8 }}
            alignItems={{ base: "flex-start", md: "flex-end" }}
          >
            <Heading fontSize={{ base: "4xl", xl: "6xl" }} fontWeight="bold">
              ??CONT??CTANOS!
            </Heading>
            <Text fontSize={{ base: "md", md: "xl", xl: "2xl" }}>
              Conversar es la mejor manera de manifestar su necesidad y nosotros
              aportar la soluci??n.
            </Text>

            <Link
              href="https://web.whatsapp.com/send?phone=56983963903&text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20mas%20informaci%C3%B3n%20sobre%20proyectos%20y%2Fo%20instalaciones."
              target="_blank"
            >
              <Button
                variant="primary"
                size={{ base: "sm", md: "md", xl: "lg" }}
              >
                Cont??ctanos
              </Button>
            </Link>
          </VStack>

          <Flex
            flexDir={{ base: "column", xl: "row-reverse" }}
            gap={8}
            pt={6}
            w="100%"
            justifyContent="space-between"
            alignItems={{ base: "flex-start", md: "flex-end" }}
          >
            <VStack alignItems={{ base: "flex-start", md: "flex-end" }}>
              <Center gap={2}>
                <PhoneOutlined width="24px" />
                <Text>+56 2 3301 0928</Text>
              </Center>
              <Center gap={2}>
                <MailOutlined width="24px" />
                <Text>contacto@siim.cl</Text>
              </Center>
              <Center gap={2}>
                <PushpinOutlined width="24px" />
                <Text>Eleuterio Ram??rez 731, Local A, Santiago.</Text>
              </Center>
            </VStack>

            <VStack>
              <Text fontWeight="bold"> S??guenos</Text>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                color="gray.700"
              >
                <Link
                  href="https://www.facebook.com/SIIMSPAgroup"
                  target="_blank"
                >
                  <FacebookOutlined width="24px" />
                </Link>
                <Link
                  href="https://www.instagram.com/siim_spa/"
                  target="_blank"
                >
                  <InstagramOutlined width="24px" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/siim-group-43b2bb1b9/"
                  target="_blank"
                >
                  <LinkedinOutlined width="24px" />
                </Link>
              </Stack>
            </VStack>
          </Flex>
        </VStack>
      </SlideIn>

      <Box
        pos="absolute"
        w={{ base: "100%", md: "70%", xl: "80%" }}
        h={{ base: "80%", md: "100%" }}
        right={0}
        top={0}
        zIndex={1}
        bg={{
          base: "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 30%, rgba(255,255,255,1) 100%);",
          md: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 30%, rgba(255,255,255,1) 100%);",
        }}
      />
    </Center>
  );
};

export default Contacto;
