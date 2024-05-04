import AchievementsCard from "@/components/achievements-card";
import DaysWithoutSmokingCard from "@/components/days-whout-smoking-card";
import FriendsSection from "@/components/friends-section";
import StatisticsCard from "@/components/statistics-card";
import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import { initializeUser } from "./_actions/initializeUser";
import prisma from "@/prisma/prismaClient";
import { currentUser } from "@clerk/nextjs/server";
import {
  calculateDaysPassed,
  calculateHoursPassed,
} from "./_actions/calculateTime";

async function Home(): Promise<JSX.Element> {
  await initializeUser();

  const user = await currentUser();

  /* TODO: get statistics and pass as props */

  const startDate = await prisma.user.findUnique({
    where: {
      id: user?.id,
    },
    select: {
      startDate: true,
    },
  });

  const daysWithoutSmoking = calculateDaysPassed(startDate?.startDate!);
  const hoursPassed = calculateHoursPassed(startDate?.startDate!);

  /*TODO: get friends */

  return (
    <div className="h-full py-20 md:px-80 sm:px-20 flex flex-col md:flex-row items-center md:items-baseline gap-12 ">
      <div className="flex flex-col gap-12 items-center flex-[2]">
        <div className="flex items-center gap-6 w-full md:flex-row flex-col">
          <DaysWithoutSmokingCard
            days={daysWithoutSmoking || 0}
            hoursPassed={hoursPassed}
          />
          <StatisticsCard />
          {/* statistics ? <StatisticsCard statistics={statistics}/> : <StartStatisticsDrawer /> */}
        </div>
        <AchievementsCard />
      </div>
      <div className="h-full flex flex-col gap-10 items-center">
        {/* friends ? <FriendsSection friends={friends} /> : <Button>Add a new friend</Button> */}
        <Button className="w-fit bg-accent text-accent-foreground flex items-center gap-2 hover:bg-accent-foreground hover:text-accent">
          <PlusCircleIcon />
          Agregar amigo
        </Button>
        <FriendsSection />
      </div>
    </div>
  );
}

export default Home;
