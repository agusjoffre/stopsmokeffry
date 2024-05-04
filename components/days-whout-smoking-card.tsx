import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

type Props = {
  days: number;
  hoursPassed: number;
};

function DaysWithoutSmokingCard({ days = 0, hoursPassed = 0 }: Props) {
  return (
    <Card className="h-full flex flex-col justify-center w-full">
      <CardHeader>
        <CardTitle>Dias sin fumar</CardTitle>
        <CardDescription>Dale que vos podes!</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between">
        <div className="flex gap-5 items-center">
          <h1 className="text-8xl font-black">{days}</h1>
          <span className="text-4xl font-extrabold">
            {days === 1 ? "dia." : "dias."}
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <h2 className="text-4xl font-extrabold">{hoursPassed}</h2>
          <span className="text-2xl font-bold">horas.</span>
        </div>
      </CardContent>
      <CardFooter className="w-full">
        <Button variant={"destructive"} className="w-full">
          Volvi a fumar {"   "}
          <span className="text-2xl">😭</span>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default DaysWithoutSmokingCard;
