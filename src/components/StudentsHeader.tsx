import { Card, createListCollection, HStack, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import { AddButton } from "./HeaderButton/AddButton";
import { AddStudentDialog } from "./AddStudentDialog";
import { ExportButton } from "./HeaderButton/ExportButton";
import { FilterButton } from "./HeaderButton/FilterButton";
import { FilterSelect } from "./HeaderButton/FilterSelect";
import { SearchInput } from "./HeaderButton/SearchInput";

export function StudentsHeader() {
  const status = createListCollection({
    items: [
      { label: "Inátivo", value: "inativo" },
      { label: "Atívo", value: "ativo" },
      { label: "Formado", value: "formado" },
    ],
  });

  const [valueFilter, setValueFilter] = useState<string[]>([]);

  return (
    <Card.Root>
      <Card.Body>
        <SimpleGrid row={2} rowGap={4}>
          <SearchInput
            placeholder="Buscar por nome, email ou curso..."
            value=""
            onChange={(e) => console.log(e.target.value)}
          />

          <HStack>
            <FilterSelect
              placeholder="Todos os status"
              collection={status}
              value={valueFilter}
              onValueChange={(e) => setValueFilter(e.value)}
            />

            <FilterButton />

            <ExportButton onClick={() => console.log()} />

            <AddStudentDialog />
          </HStack>
        </SimpleGrid>
      </Card.Body>
    </Card.Root>
  );
}