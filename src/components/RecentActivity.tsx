import { Flex, Heading, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { ColorPalette }from "@chakra-ui/react/styled-system"
import { IconType } from "react-icons";

interface RecentActivityProps {
  icon: IconType;
  title: string;
  time: string;
  color: ColorPalette;
}

export function RecentActivity({title, icon, time, color }: RecentActivityProps) {
  return(
    <HStack _hover={{backgroundColor: "gray.200", rounded: "md", _dark: { backgroundColor: "gray.800" }}} p={4} gap={6}>
      <Flex justify="center" align="center" backgroundColor={`${color}.200`} rounded="lg" p="4">
        <Icon as={icon} size="xl" color={`${color}.700`}/>
      </Flex>

      <VStack align="start" gap={1}>
        <Heading>{title}</Heading>
        <Text>{time}</Text>
      </VStack>
    </HStack>
  )
}
