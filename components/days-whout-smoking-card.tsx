import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ChallengeLostDialog from "./challenge-lost-dialog";

type Props = {
  days: number;
  hoursPassed: number;
  startDate: string;
};

function DaysWithoutSmokingCard({
  days = 0,
  hoursPassed = 0,
  startDate,
}: Props) {
  return (
    <Card className="flex flex-2 flex-col justify-center w-full">
      <CardHeader>
        <CardTitle>Días sin fumar</CardTitle>
        <CardDescription>
          {!startDate ? "Dale que vos podés!" : `${startDate.toString()}`}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex gap-8">
        <div className="flex gap-5 items-center">
          <h1 className="text-8xl font-black">{days >= 0 ? days : 0}</h1>
          <span className="text-4xl font-extrabold">
            {days === 1 ? "día." : "días."}
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <h2 className="text-4xl font-extrabold">
            {hoursPassed >= 0 ? hoursPassed : 0}
          </h2>
          <span className="text-2xl font-bold">horas.</span>
        </div>
      </CardContent>
      <CardFooter className="w-full">
        <ChallengeLostDialog />
      </CardFooter>
    </Card>
  );
}

export default DaysWithoutSmokingCard;
