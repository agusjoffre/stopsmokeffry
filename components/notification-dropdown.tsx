import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell } from "lucide-react";
import { Button } from "./ui/button";
import FriendNotificationItem from "./friend-notification-item";
import prisma from "@/prisma/prismaClient";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Friendship } from "@prisma/client";
import { cn } from "@/lib/utils";

type Props = {};

async function NotificationDropdown({}: Props) {
  const user = await currentUser();
  if (!user) redirect("/sign-in");

  /* get all friendships of user */
  const friendshipPending = await prisma.friendship.findMany({
    where: {
      friendId: user.id,
      state: "PENDING",
    },
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={cn(friendshipPending.length > 0 ? "bg-accent" : "")}
        >
          <Bell className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Bell className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-96">
        <DropdownMenuLabel>Notificaciones</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {friendshipPending.length <= 0 ? (
          <p className="text-sm font-semibold opacity-70 text-center">
            No tenés ninguna notificación.
          </p>
        ) : (
          friendshipPending.map((fr: Friendship) => (
            <FriendNotificationItem key={fr.friendId} friendship={fr} />
          ))
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default NotificationDropdown;
