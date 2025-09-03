import { Heading } from "@chakra-ui/react";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Grades() {
  return (
    <DefaultLayout

    title="Gestão de Notas"
    description="Visão Geral do Sistema das Notas"
    >
      <Heading color="red">DASHBOARD DAS NOTAS</Heading>
    </DefaultLayout>
  )
}