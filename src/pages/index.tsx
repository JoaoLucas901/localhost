import { HStack } from "@chakra-ui/react";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { IoMdPeople } from "react-icons/io";
import { FaUserGraduate } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { BiBookAdd } from "react-icons/bi";
import { IndicatorCard } from "@/components/IndicatorCard";

export default function Home() {
  return (
    <DefaultLayout

    title="Dashboard Acadêmica"
    description="Visão Geral do Sistema Universitário"
    >
      <HStack gap={8}>
        <IndicatorCard
          label="Total de Estudantes"
          value={1250}
          indicator="+12% este mês"
          icon={IoMdPeople}
          colorPalette="blue"
        />

         <IndicatorCard
          label="Total de Professores"
          value={540}
          indicator="+5% este mês"
          icon={FaUserGraduate}
          colorPalette="green"
        />

         <IndicatorCard
          label="Cursos Oferecidos"
          value={14}
          indicator="+5% este mês"
          icon={BiBookAdd}
          colorPalette="red"
        />

         <IndicatorCard
          label="Taxa de Aprovação"
          value={0.892}
          style="percent"
          maximumFractionDigits={2}
          minimumFractionDigits={2}
          indicator="+2.1% este mês"
          icon={FaArrowTrendUp}
          colorPalette="orange"
        />

      </HStack>
    </DefaultLayout>
  );
}