import { Card, Flex, Heading, HStack, Icon, VStack, Text } from "@chakra-ui/react";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { IoMdPeople } from "react-icons/io";
import { FaUserGraduate } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { BiBookAdd } from "react-icons/bi";
import { IndicatorCard } from "@/components/IndicatorCard";
import { RecentActivity } from "@/components/RecentActivity";

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
      <HStack mt={8}>
            <Card.Root>
              <Card.Header>
                <Card.Title>Atividades recentes</Card.Title>
              </Card.Header>
              <Card.Body alignItems="center" gap={6}>
              <RecentActivity
              icon={IoMdPeople}
              title="Nova Matrícula: Maria Silva - Engenharia de Software"
              dateTime="2 min atrás"
              color="blue"
              />

              <RecentActivity
              icon={FaUserGraduate}
              title="Novo Professor: Dr. João Souza - Matemática"
              dateTime="10 min atrás"
              color="green"
              />

              <RecentActivity
              icon={BiBookAdd}
              title="Novo Curso: Ciência de Dados"
              dateTime="30 min atrás"
              color="red"
              />

              <RecentActivity
              icon={FaArrowTrendUp}
              title="Relatório de Desempenho Acadêmico Gerado"
              dateTime="1 hora atrás"
              color="orange"
              />
            </Card.Body>
          </Card.Root>
      </HStack>
    </DefaultLayout>
  );
}