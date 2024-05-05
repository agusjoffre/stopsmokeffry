import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

type Props = {
  statistics: {
    moneySaved: number;
    totalCigarettes: number;
    cigarettesPrice: number;
    cigarettesPerDay: number;
  };
};

function StatisticsCard({ statistics }: Props) {
  return (
    <Card className="flex flex-col justify-center w-full">
      <CardHeader>
        <CardTitle>Tus estadísticas</CardTitle>
        <CardDescription>
          Cuanto te ahorraste desde que dejaste de fumar.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-5">
        <Card className="w-full h-56">
          <CardHeader>
            <CardTitle>Dinero ahorrado</CardTitle>
            <CardDescription>
              Cada cigarrillo cuesta: {statistics.cigarettesPrice}$
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-2 items-center">
            <h1 className="text-4xl font-extrabold">{statistics.moneySaved}</h1>
            <span className="text-xl font-semibold">$</span>
          </CardContent>
        </Card>
        <Card className="w-full h-56">
          <CardHeader className="w-full">
            <CardTitle>Cigarrillos</CardTitle>
            <CardDescription>
              Fumabas {statistics.cigarettesPerDay} por día
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-2 items-center">
            <h1 className="text-4xl font-extrabold">
              {statistics.totalCigarettes}
            </h1>
            <span className="text-xl font-semibold">cigarrillos</span>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}

export default StatisticsCard;
