import { Card, Flex, FormatNumber, HStack, Icon, Stat } from "@chakra-ui/react";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { FcLineChart } from "react-icons/fc";
import { IoMdPeople } from "react-icons/io";
import { FaUserGraduate } from "react-icons/fa";
import { Fa42Group, FaArrowTrendUp } from "react-icons/fa6";

export default function Home() {
  return (
    <DefaultLayout

    title="Dashboard Acadêmica"
    description="Visão Geral do Sistema Universitário"
    >
      <HStack>
      <Card.Root>
        <Card.Body flexDir="row" alignItems="center" gap={6}>
         <Stat.Root maxW="240px">
      <Stat.Label fontSize="md">Total de Estudantes</Stat.Label>
      <Stat.ValueText>
        <FormatNumber value={1340}/>
      </Stat.ValueText>
      <Stat.UpIndicator alignSelf="start">
        +12% este mês {" "}
      </Stat.UpIndicator>
    </Stat.Root>

    <Flex justify="center" align="center" backgroundColor="blue.100" rounded="lg" p="4">
      <Icon size="xl" color="blue.700">
        <IoMdPeople />
      </Icon>
      </Flex>
        </Card.Body>
      </Card.Root>

           <Card.Root>
        <Card.Body flexDir="row" alignItems="center" gap={6}>
         <Stat.Root maxW="240px">
      <Stat.Label fontSize="md">Total de Professores</Stat.Label>
      <Stat.ValueText>
        <FormatNumber value={540}/>
      </Stat.ValueText>
      <Stat.UpIndicator alignSelf="start">
        +5% este mês {" "}
      </Stat.UpIndicator>
    </Stat.Root>

    <Flex justify="center" align="center" backgroundColor="green.100" rounded="lg" p="4">
      <Icon size="xl" color="green.700">
        <FaUserGraduate />
      </Icon>
      </Flex>
        </Card.Body>
      </Card.Root>

           <Card.Root>
        <Card.Body flexDir="row" alignItems="center" gap={6}>
         <Stat.Root maxW="240px">
      <Stat.Label fontSize="md">Cursos Oferecidos</Stat.Label>
      <Stat.ValueText>
        <FormatNumber value={14}/>
      </Stat.ValueText>
      <Stat.UpIndicator alignSelf="start">
        +2% este mês {" "}
      </Stat.UpIndicator>
    </Stat.Root>

    <Flex justify="center" align="center" backgroundColor="red.100" rounded="lg" p="4">
      <Icon size="xl" color="red.700">
        <Fa42Group />
      </Icon>
      </Flex>
        </Card.Body>
      </Card.Root>

           <Card.Root>
        <Card.Body flexDir="row" alignItems="center" gap={6}>
         <Stat.Root maxW="240px">
      <Stat.Label fontSize="md">Taxa de Aprovação</Stat.Label>
      <Stat.ValueText>
        <FormatNumber value={0.892}/>
      </Stat.ValueText>
      <Stat.UpIndicator alignSelf="start">
        +2.1% este mês {" "}
      </Stat.UpIndicator>
    </Stat.Root>

    <Flex justify="center" align="center" backgroundColor="orange.100" rounded="lg" p="4">
      <Icon size="xl" color="orange.700">
        <FaArrowTrendUp />
      </Icon>
      </Flex>
        </Card.Body>
      </Card.Root>
      </HStack>
    </DefaultLayout>
  );
}