import { Button, CloseButton, Drawer, IconButton, Portal, VStack } from "@chakra-ui/react";
import { IoIosBook, IoMdMenu, IoMdPeople } from "react-icons/io";
import { RiDashboardFill } from "react-icons/ri";
import { NavigationItem } from "./NativationItem";
import { TiThumbsOk } from "react-icons/ti";
import { FaGraduationCap } from "react-icons/fa";
import { MdLibraryBooks, MdLogout } from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import { useRouter } from "next/router";
import { signOut } from "@/contexts/SessionContext";

export function Menu() {
  const router = useRouter();
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
              <NavigationItem
              icon={<RiDashboardFill />}
              label="Dashboard"
              onClick={() => router.push('/')}
              />

              <NavigationItem
              icon={<IoMdPeople />}
              label="Estudantes"
              onClick={() => router.push('/students')}
              />

              <NavigationItem
              icon={<FaGraduationCap />}
              label="Professores"
              onClick={() => router.push('/teachers')}
              />

              <NavigationItem
              icon={<IoIosBook />}
              label="Cursos"
              onClick={() => router.push('/courses')}
              />

              <NavigationItem
              icon={<MdLibraryBooks />}
              label="Notas"
              onClick={() => router.push('/grades')}
              />

              <NavigationItem
              icon={<GrNotes />}
              label="Matrículas"
              onClick={() => router.push('/enrollment')}
              />

              <NavigationItem
              icon={<TiThumbsOk />}
              label="Calendário"
              onClick={() => router.push('/calendar')}
              />

              </VStack>
            </Drawer.Body>


            <Drawer.Footer>
              <NavigationItem icon={<MdLogout />} label="Sair" onClick={signOut}/>

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
