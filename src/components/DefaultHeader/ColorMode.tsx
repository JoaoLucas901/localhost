import { IconButton } from "@chakra-ui/react";
import { useColorMode } from "../ui/color-mode";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

export function ColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton variant="ghost" rounded="full" onClick={toggleColorMode}>
      {colorMode === 'dark' ? <IoMdMoon /> : <IoMdSunny />}
    </IconButton>
  );
}