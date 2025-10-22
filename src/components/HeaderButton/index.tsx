import { Card, createListCollection, HStack, SimpleGrid, Button } from "@chakra-ui/react";
import { useState, ReactNode } from "react";
import { ExportButton } from "./ExportButton";
import { FilterButton } from "./FilterButton";
import { FilterSelect } from "./FilterSelect";
import { SearchInput } from "./SearchInput";

export function HeaderTable() {
  function AddButton({ children, ...props }: { children?: ReactNode; [key: string]: any }) {
    return <Button colorScheme="blue" size="sm" {...props}>{children}</Button>;
  }

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

            <AddButton>
              Novo Estudante
            </AddButton>
          </HStack>
        </SimpleGrid>
      </Card.Body>
    </Card.Root>
  );
}