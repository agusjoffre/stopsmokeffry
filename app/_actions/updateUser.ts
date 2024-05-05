"use server";
import prisma from "@/prisma/prismaClient";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export const updateChallengeUser = async () => {
  const user = await currentUser();
  if (!user) return;

  const updated = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      isChallenge: false,
    },
  });

  revalidatePath("/");

};
