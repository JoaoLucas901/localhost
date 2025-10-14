import { VStack } from "@chakra-ui/react";
import { HeaderTable } from "@/components/HeaderTable";
import { Table } from "@/components/Table";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { createColumnHelper } from "@tanstack/react-table";

type Student = {
  fullname: string,
  email: string,
  course: string,
  semester: string,
  status: string,
  enrollment: string,
}

export default function Students() {
  const data: Student[] = [
   {
    fullname: "Ana Beatriz Silva",
    email: "ana.silva@email.com",
    course: "Engenharia de Software",
    semester: "5º",
    status: "Ativo",
    enrollment: "2021001"
  },
  {
    fullname: "Bruno Henrique Souza",
    email: "bruno.souza@email.com",
    course: "Ciência da Computação",
    semester: "3º",
    status: "Ativo",
    enrollment: "2021023"
  },
  {
    fullname: "Carla Mendes Oliveira",
    email: "carla.oliveira@email.com",
    course: "Sistemas de Informação",
    semester: "7º",
    status: "Trancado",
    enrollment: "2020008"
  },
  {
    fullname: "Diego Ferreira Costa",
    email: "diego.costa@email.com",
    course: "Análise e Desenvolvimento de Sistemas",
    semester: "4º",
    status: "Ativo",
    enrollment: "2021045"
  },
  {
    fullname: "Eduarda Lima Santos",
    email: "eduarda.santos@email.com",
    course: "Engenharia da Computação",
    semester: "6º",
    status: "Inativo",
    enrollment: "2019056"
  }
]

const columnHelper = createColumnHelper<Student>()

const columns = [
  columnHelper.accessor("fullname", {
    header: "Nome Completo",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("email", {
    header: "Email",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("course", {
    header: "Curso",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("semester", {
    header: "Semestre",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("enrollment", {
    header: "Matéria",
    cell: (info) => info.getValue(),
  }),
]

  return (
    <DefaultLayout
      title="Gestão de Estudantes"
      description="Gerencie informações dos estudantes matrículados"
    >
      <VStack align="start">
        <HeaderTable />

        <Table data={data} columns={columns} />
      </VStack>
    </DefaultLayout>
  );
}