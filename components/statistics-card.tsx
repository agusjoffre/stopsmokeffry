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
  /* statistics */
};

function StatisticsCard({}: Props) {
  return (
    <Card className="h-full flex flex-col justify-center w-full">
      <CardHeader>
        <CardTitle>Tus estadisticas</CardTitle>
        <CardDescription>
          Cuanto te ahorraste desde que dejaste de fumar.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex gap-5 items-center flex-col md:flex-row">
        {/* statistics.map((stat) => {
            <Card>
          <CardHeader>
            <CardTitle>Dinero ahorrado</CardTitle>
            <CardDescription>Cada cigarrillo cuesta: 2250$</CardDescription>
          </CardHeader>
          <CardContent className="flex gap-2 items-center">
            <h1 className="text-4xl font-extrabold">0</h1>
            <span className="text-xl font-semibold">$</span>
          </CardContent>
        </Card>
        }) */}
      </CardContent>
    </Card>
  );
}

export default StatisticsCard;
