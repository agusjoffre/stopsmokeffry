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
import { getFriends } from "./_actions/friendActions";
import {
  calculateCigarettes,
  calculateMoneySaved,
} from "./_actions/calculateStatistics";

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

  const friends = await getFriends();

  const userCigarettes = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
    select: {
      cigarettePrice: true,
      cigarettesPerDay: true,
    },
  });

  const statistics = {
    moneySaved: calculateMoneySaved(
      userCigarettes?.cigarettesPerDay!,
      userCigarettes?.cigarettePrice!,
      daysWithoutSmoking
    ),
    totalCigarettes: calculateCigarettes(
      userCigarettes?.cigarettesPerDay!,
      daysWithoutSmoking
    ),
    cigarettesPrice: userCigarettes?.cigarettePrice!,
    cigarettesPerDay: userCigarettes?.cigarettesPerDay!,
  };

  return (
    <div className="py-20 md:px-80 sm:px-20 flex flex-col md:flex-row items-center md:items-start gap-12 ">
      {isChallenge?.isChallenge ? (
        <div className="w-full h-full">
          <div className="flex flex-col gap-12 items-center flex-[2] h-full">
            <div className="flex gap-6 md:flex-row flex-col">
              <DaysWithoutSmokingCard
                startDate={startDate?.startDate!}
                days={daysWithoutSmoking || 0}
                hoursPassed={hoursPassed}
              />
              {statistics ? <StatisticsCard statistics={statistics} /> : <></>}
            </div>
            <AchievementsCard />
          </div>
        </div>
      ) : (
        <StartTheCallengeButton />
      )}

      <div className="h-full flex flex-col gap-10 items-center">
        {/* friends ? <FriendsSection friends={friends} /> : <Button>Add a new friend</Button> */}
        <AddFriendDialog userCode={userCode?.code!} />
        <FriendsSection friends={friends} />
      </div>
    </div>
  );
}

export default Home;
