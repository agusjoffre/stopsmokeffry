"use server";

import prisma from "@/prisma/prismaClient";
import { currentUser } from "@clerk/nextjs/server";
import { User } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const challengeSubmit = async (formData: FormData) => {
  const user = await currentUser();
  // const startDate = new Date(formData.get("startDate") as string).toUTCString();
  const cigarettePrice = Number(formData.get("cigarettePrice"));
  const cigarettesPerDay = Number(formData.get("cigarettesPerDay"));

  if (!user) redirect("/sign-in");
  if (!cigarettePrice || !cigarettesPerDay) return;

  // update the user data
  const updatedUser: {
    id: string;
    name: string;
    startDate: string;
    cigarettePrice: number;
    cigarettesPerDay: number;
    isChallenge: boolean;
  } = {
    id: user.id,
    name: user.username ? user.username : (user.fullName as string),
    isChallenge: true,
    cigarettePrice,
    cigarettesPerDay,
    startDate: new Date().toLocaleString("en-EN", {
      hour: "numeric",
      minute: "numeric",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }),
  };

  const updatedDB = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: updatedUser,
  });

  revalidatePath("/");
};
