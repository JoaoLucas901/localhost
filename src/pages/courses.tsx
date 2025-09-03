import { Heading } from "@chakra-ui/react";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Courses() {
  return (
    <DefaultLayout

    title="Lista de Cursos"
    description="Visão Geral do Sistema dos Cursos"
    >
      <Heading color="red">DASHBOARD DOS CURSOS!</Heading>
    </DefaultLayout>
  )
}