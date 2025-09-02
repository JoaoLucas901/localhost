import { Button, CloseButton, Drawer, IconButton, Portal, VStack } from "@chakra-ui/react";
import { IoIosBook, IoMdMenu, IoMdPeople } from "react-icons/io";
import { RiDashboard2Fill } from "react-icons/ri";
import { NavigationItem } from "./NativationItem";
import { TiThumbsOk } from "react-icons/ti";
import { FaGraduationCap } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";
import { GrNotes } from "react-icons/gr";

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
              <VStack>
              <NavigationItem icon={<RiDashboard2Fill />} label="Dashboard" />

              <NavigationItem icon={<IoMdPeople />} label="Estudantes" />

              <NavigationItem icon={<FaGraduationCap />} label="Professores" />

              <NavigationItem icon={<IoIosBook />} label="Cursos" />

              <NavigationItem icon={<MdLibraryBooks />} label="Notas" />

              <NavigationItem icon={<GrNotes />} label="Matrículas" />

              <NavigationItem icon={<TiThumbsOk />} label="Lagarto Bird" />

              </VStack>
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
