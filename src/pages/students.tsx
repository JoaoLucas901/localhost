import { DefaultLayout } from "@/layouts/DefaultLayout";
import { HStack, Input, InputGroup, Kbd } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

export default function Students() {
  return (
    <DefaultLayout

    title="Dashboard Acadêmica"
    description="Gerencie informações dos estudantes matriculados"
    >
      <HStack>
        {/*
        Input - Campo de Pesquisa

        Select - Filtro de Status
        Button - Filtros
        Button - Exportar
        Button - Action Button - Criar um novo estudante
        */}
          <InputGroup flex="1" startElement={<LuSearch />}>
           <Input placeholder="Search contacts" />
          </InputGroup>

      </HStack>
    </DefaultLayout>
  )
}