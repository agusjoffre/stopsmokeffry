"use server";

import { currentUser } from "@clerk/nextjs/server";

export async function initializeUser() {
  const user = await currentUser();

  if (!user) return;

  const newUser = {
    id: user.id,
    name: user.username,
    daysWithoutSmoking: 0,
    startDate: new Date(),
    cigarettePrice: 0,
    cigarettesPerDay: 0,
    friends: [],
  };

  /* prisma create user if any user.id != newUser */
}
