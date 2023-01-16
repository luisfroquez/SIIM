import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Stack } from "@chakra-ui/react";

const SocialMedia = () => {
  return (
    <Stack
      p={8}
      direction="row"
      justifyContent="center"
      alignItems="center"
      color="gray.700"
    >
      <FacebookOutlined width="24px" />
      <InstagramOutlined width="24px" />
      <LinkedinOutlined width="24px" />
    </Stack>
  );
};

export default SocialMedia;
