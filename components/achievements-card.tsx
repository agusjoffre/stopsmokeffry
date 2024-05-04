import Achievement from "./achievement";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {};

function AchievementsCard({}: Props) {
  /* get achievements and pass as props*/
  return (
    <Card className="w-full flex flex-col gap-11 justify-center border-[1px] rounded-md">
      <CardHeader className="text-2xl font-semibold">Tus logros</CardHeader>
      <CardContent className="flex flex-col md:flex-row items-center gap-10">
        {/* achievements?.map((ach) => {
            <Achivement achievement={achievement} />
        }) */}
      </CardContent>
    </Card>
  );
}

export default AchievementsCard;
