import { Heart, SquareCheck, SquareX } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import prisma from "@/prisma/prismaClient";
import { Friendship } from "@prisma/client";

type Props = {
  friendship: Friendship;
};

async function FriendNotificationItem({ friendship }: Props) {
  const friend = await prisma.user.findUnique({
    where: {
      id: friendship.friendId,
    },
  });

  return (
    <DropdownMenuItem className="flex items-center gap-4 ">
      <Heart size={30} />
      <div className="flex flex-col gap-1 w-full">
        <p className="font-light">Solicitud de amistad</p>
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-2 ">
            <Avatar>
              <AvatarImage />
              <AvatarFallback className="bg-foreground text-background">
                {friend?.name!.slice(0, 2).toLocaleUpperCase()}
              </AvatarFallback>
            </Avatar>
            <p className="text-sm font-medium">@{friend?.name!}</p>
          </div>
          <div className="flex items-center gap-1 ">
            <Button className="bg-emerald-700 hover:bg-emerald-500">
              <SquareCheck />
            </Button>
            <Button className="bg-destructive text-destructive-foreground hover:bg-destructive-foreground hover:text-destructive">
              <SquareX />
            </Button>
          </div>
        </div>
      </div>
    </DropdownMenuItem>
  );
}

export default FriendNotificationItem;
