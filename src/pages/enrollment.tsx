import { Heading } from "@chakra-ui/react";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Enrollment() {
  return (
    <DefaultLayout
    
    title="Alunos Matrículados"
    description="Visão Geral do Sistema das Matrículas"
    >
      <Heading color="red">DASHBOARD DAS MATRÍCULAS!</Heading>
    </DefaultLayout>
  )
}