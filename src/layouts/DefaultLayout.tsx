import { Flex, Group, Icon, IconButton, Image, Separator } from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import { BiSolidFoodMenu } from "react-icons/bi";
import logo from "../../public/assets/cesul-logo.png";
import logoBranca from "../../public/assets/logo-cesul-branca.png";
import { IoIosAlarm, IoIosBaseball, IoIosIceCream, IoIosMoon, IoIosSunny } from "react-icons/io";
import { Avatar } from "@/components/ui/avatar";
import { useColorMode } from "@/components/ui/color-mode";

type DefaultLayoutProps = {
  children: ReactNode;
}

export function DefaultLayout({children}: DefaultLayoutProps) {
  const {toggleColorMode, colorMode} = useColorMode();
  const [source, setSource] = useState("");

  useEffect(() => {
    if(colorMode === 'light') {
      setSource(logo.src)
    } else {
      setSource(logoBranca.src)
    }
  }, []);

  return(
    <Flex flexDir="column" bg="gray.50">
      <Flex w="full" align="center" justify="space-between" borderBottomWidth={1} py={2} px={4}>
        <Flex align="center" gap={4}>
          <IconButton color="black" variant="outline">
            <BiSolidFoodMenu />
          </IconButton>

          {
            colorMode === 'dark' ?
            <Image w="130px" h="60px" src={logoBranca.src} /> :
            <Image w="130px" h="60px" src={logo.src} />
          }

          <Image
          w="130px"
          height="60px"
          src={logo.src}
          />

        </Flex>

        <Group>
          <IconButton variant="ghost" rounded="full">
            <IoIosBaseball color="gray" />
          </IconButton>

          <IconButton variant="ghost" rounded="full">
            <IoIosAlarm color="gray" />
          </IconButton>

          <IconButton variant="ghost" rounded="full">
            <IoIosIceCream color="gray" />
          </IconButton>

          <IconButton variant="ghost" rounded="full" onClick={toggleColorMode}>
            <Icon as={colorMode === 'dark' ? IoIosSunny : IoIosMoon} color="gray" />
          </IconButton>

          <Separator h={6} orientation="vertical" mx={2} />

          <Avatar name="João Lucas" src="https://avatars.githubusercontent.com/u/128654794?v=4"/>
        </Group>

      </Flex>

      {children}
    </Flex>
  );
}