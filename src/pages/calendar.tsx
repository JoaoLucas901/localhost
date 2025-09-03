import { Heading } from "@chakra-ui/react";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Calendar() {
  return (
    <DefaultLayout

    title="Calendário Acadêmico"
    description="Visão Geral do Sistema do Calendário"
    >
      <Heading color="red">DASHBOARD DO CALENDÁRIO!</Heading>
    </DefaultLayout>
  )
}