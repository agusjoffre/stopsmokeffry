import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

type Props = {};

function DaysWithoutSmokingCard({}: Props) {
  return (
    <Card className="h-full flex flex-col justify-center w-full">
      <CardHeader>
        <CardTitle>Dias sin fumar</CardTitle>
        <CardDescription>Dale que vos podes!</CardDescription>
      </CardHeader>
      <CardContent className="flex gap-5 items-center">
        <h1 className="text-8xl font-black"></h1>
        <span className="text-4xl font-extrabold">dias.</span>
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
