import AchievementsCard from "@/components/achievements-card";
import DaysWithoutSmokingCard from "@/components/days-whout-smoking-card";
import FriendsSection from "@/components/friends-section";
import StatisticsCard from "@/components/statistics-card";
import { Button } from "@/components/ui/button";

import { initializeUser } from "./_actions/initializeUser";
import prisma from "@/prisma/prismaClient";
import { currentUser } from "@clerk/nextjs/server";
import {
  calculateDaysPassed,
  calculateHoursPassed,
} from "./_actions/calculateTime";
import StartTheCallengeButton from "@/components/start-the-challenge-button";
import AddFriendDialog from "@/components/add-friend";

async function Home(): Promise<JSX.Element> {
  await initializeUser();

  const user = await currentUser();
  if (!user) return <div></div>;

  const isChallenge = await prisma.user.findUnique({
    where: {
      id: user?.id,
    },
    select: {
      isChallenge: true,
    },
  });

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

  const userCode = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
    select: {
      code: true,
    },
  });

  /* TODO: get statistics and pass as props */
  /*TODO: get friends */

  return (
    <div className="h-full py-20 md:px-80 sm:px-20 flex flex-col md:flex-row items-center md:items-start gap-12 ">
      {isChallenge?.isChallenge ? (
        <>
          <div className="flex flex-col gap-12 items-center flex-[2]">
            <div className="flex items-center gap-6 w-full md:flex-row flex-col">
              <DaysWithoutSmokingCard
                startDate={startDate?.startDate!}
                days={daysWithoutSmoking || 0}
                hoursPassed={hoursPassed}
              />
              <StatisticsCard />
              {/* statistics ? <StatisticsCard statistics={statistics}/> : <StartStatisticsDrawer /> */}
            </div>
            <AchievementsCard />
          </div>
        </>
      ) : (
        <StartTheCallengeButton />
      )}

      <div className="h-full flex flex-col gap-10 items-center">
        {/* friends ? <FriendsSection friends={friends} /> : <Button>Add a new friend</Button> */}
        <AddFriendDialog userCode={userCode?.code!} />
        <FriendsSection />
      </div>
    </div>
  );
}

export default Home;
