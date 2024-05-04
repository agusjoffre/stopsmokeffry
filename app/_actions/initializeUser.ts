"use server";

import prisma from "@/prisma/prismaClient";
import { currentUser } from "@clerk/nextjs/server";
import { User } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function initializeUser() {
  const clerkUser = await currentUser();

  if (!clerkUser) redirect("/sign-in");

  const newUser: User = {
    id: clerkUser.id,
    name: clerkUser.username
      ? clerkUser.username
      : (clerkUser.fullName as string),
    daysWithoutSmoking: 0,
    startDate: new Date().toDateString(),
    cigarettePrice: 0,
    cigarettesPerDay: 0,
  };

  const dbUser: User | null = await prisma.user.findUnique({
    where: {
      id: clerkUser.id,
    },
  });

  if (!dbUser) {
    await prisma.user.create({
      data: newUser,
    });
  }

  revalidatePath("/");
}
