import { Card, HStack } from "@chakra-ui/react";
import { BiAward, BiCalendar } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { ImBooks } from "react-icons/im";
import { IoIosBook, IoMdPeople } from "react-icons/io";
import { IoPeopleSharp } from "react-icons/io5";
import { IndicatorCard } from "@/components/IndicatorCard";
import { RecentActivity } from "@/components/RecentActivity";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { IconType } from "react-icons";
import { AiFillQuestionCircle } from "react-icons/ai";

export default function Home() {
  const recentActivities = [
    {
      id: 1,
      type: "enrollment",
      title: "Nova matrícula: Maria Silva - Engenharia de Software",
      time: "2 min atrás",
    },
    {
      id: 2,
      type: "grade",
      title: "Notas lançadas: Cálculo I - Prof. João Santos",
      time: "15 min atrás",
    },
    {
      id: 3,
      type: "course",
      title: "Novo curso criado: Análise de Ddoas",
      time: "1 hora atrás",
    },
    {
      id: 4,
      type: "calendar",
      title: "Evento adicionado: Semana da Computação",
      time: "2 min atrás",
    },
  ];

  const iconMap: Record<string, IconType> = {
    enrollment: IoMdPeople,
    grade: BiAward,
    course: IoIosBook,
    calendar: BiCalendar,
  };

  return (
    <DefaultLayout
      title="Dashboard Acadêmico"
      description="Visão geral do sistema universitáro"
    >
      <HStack gap={8}>
        <IndicatorCard
          label="Total de Estudantes"
          value={2342}
          indicator="-32% este mes"
          icon={IoPeopleSharp}
          colorPallete="blue"
        />

        <IndicatorCard
          label="Professor Ativos"
          value={53}
          indicator="+1% este mes"
          icon={FaGraduationCap}
          colorPallete="green"
        />

        <IndicatorCard
          label="Cursos Oferecidos"
          value={17}
          indicator="+3% este mes"
          icon={ImBooks}
          colorPallete="red"
        />

        <IndicatorCard
          label="Taxa de Aprovação"
          value={0.23}
          style="percent"
          minimumFractionDigits={2}
          maximumFractionDigits={2}
          indicator="+12% este mes"
          icon={FaArrowTrendUp}
          colorPallete="orange"
        />
      </HStack>

      <HStack mt={8}>
        <Card.Root>
          <Card.Header>
            <Card.Title>Atividades recentes</Card.Title>
          </Card.Header>
          <Card.Body gap={6}>
            {recentActivities.map((activity) => {
              const ActivityIcon =
                iconMap[activity.type] ?? AiFillQuestionCircle;
              return (
                <RecentActivity
                  key={activity.id}
                  color="blue"
                  icon={ActivityIcon}
                  title={activity.title}
                  time={activity.time}
                />
              );
            })}
          </Card.Body>
        </Card.Root>
      </HStack>
    </DefaultLayout>
  );
}