import { IconButton } from "@chakra-ui/react";
import { IoMdMoon, IoMdSettings, IoMdSunny } from "react-icons/io";
import { useColorMode } from "../ui/color-mode";

export function ColorMode() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <IconButton variant="ghost" rounded="full" onClick={toggleColorMode}>
      {colorMode === 'dark' ? <IoMdMoon /> : <IoMdSunny />}
    </IconButton>
  );
}