import { Heading } from "@chakra-ui/react";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Students() {
  return (
    <DefaultLayout
    
    title="Dashboard Acadêmica"
    description="Visão Geral do Sistema do Estudante"
    >
      <Heading color="red">DASHBOARD DOS ESTUDANTES!</Heading>
    </DefaultLayout>
  )
}