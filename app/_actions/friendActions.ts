"use server";

import { currentUser } from "@clerk/nextjs/server";

const addFriend = async (formData: FormData) => {
  const user = await currentUser();
  if (!user) return;

  const friendCode = formData.get("friendCode");
};
