"use server";
import { useToast } from "@/components/ui/use-toast";
import prisma from "@/prisma/prismaClient";
import { currentUser } from "@clerk/nextjs/server";

/* currentState is required for useFormState() hook*/
export const addFriend = async (currentState: unknown, formData: FormData) => {
  const user = await currentUser();
  if (!user) return;

  const friendCode = formData.get("friendCode") as string;

  const friend = await prisma.user.findFirst({
    where: {
      code: friendCode,
    },
  });

  if (!friend) {
    return {
      found: false,
      exists: false,
    };
  }

  const existingFriendship = await prisma.friendship.findFirst({
    where: {
      friendId: friend.id,
      friendOfId: user.id,
    },
  });

  if (existingFriendship) {
    return {
      found: true,
      exists: true,
    };
  }

  const friendship = await prisma.friendship.create({
    data: {
      friendId: friend.id,
      friendOfId: user.id,
    },
  });

  return {
    found: true,
    exists: false,
  };
};
