import { Button, CloseButton, Drawer, IconButton, Kbd, Portal } from "@chakra-ui/react";
import { IoMdMenu } from "react-icons/io";

export function Menu() {
  return (
    <Drawer.Root size="md" placement="start">
      <Drawer.Trigger asChild>
    <IconButton variant="ghost" rounded="full">
      <IoMdMenu />
    </IconButton>
    </Drawer.Trigger>

    <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Cesul - Sistema Acadêmico</Drawer.Title>
            </Drawer.Header>

            <Drawer.Body>
              Press the <Kbd>Esc</Kbd> key or click outside the drawer to close it.
            </Drawer.Body>

            <Drawer.Footer>
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </Drawer.Footer>

            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
      </Drawer.Root>
  );
}
