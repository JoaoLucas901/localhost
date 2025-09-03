import { Heading, Text } from "@chakra-ui/react";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Home() {
  return (
    <DefaultLayout
    title="Dashboard Acadêmica"
    description="Visão Geral do Sistema Universitário"
    >
      <Heading color="red">DASHBOARD GERAL!</Heading>
    </DefaultLayout>
  )
}