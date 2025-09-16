import { Heading } from "@chakra-ui/react";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Calendar() {
  return (
    <DefaultLayout
      title="Calendário Acadêmico"
      description="Calendário"
    >
      <Heading color="red"> Calendário </Heading>
    </DefaultLayout>
  );
}