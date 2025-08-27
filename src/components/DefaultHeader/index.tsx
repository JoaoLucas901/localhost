import { Flex, Group, IconButton, Image, Separator } from "@chakra-ui/react";

import { Logo } from "./Logo";
import { Notifications } from "./Notifications";
import { Help } from "./Help";
import { Settings } from "./Settings";
import { ColorMode } from "./ColorMode";
import { Profile } from "./Profile";
import { Menu } from "./Menu";

export function DefaultHeader() {

  return (
    <Flex w="full" justify="space-between" borderBottomWidth={1} py={2} px={4}>
        <Flex align="center" gap={4}>
          <Menu />

          <Logo />
        </Flex>

        <Group>
          <Notifications />

          <Help />

          <Settings />

          <ColorMode />

          <Separator h={6} orientation="vertical" mx={2} />

          <Profile />

        </Group>
      </Flex>
  )
}