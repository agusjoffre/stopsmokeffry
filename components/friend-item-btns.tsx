"use client";
import { Button } from "./ui/button";
import { SquareCheck, SquareX } from "lucide-react";
import { friendStateUpdate } from "@/app/_actions/friendActions";
import { User } from "@prisma/client";

type Props = { friend: User };

function FriendItemBtns({ friend }: Props) {
  function handleAccept() {
    friendStateUpdate(true, friend);
  }
  function handleReject() {
    friendStateUpdate(false, friend);
  }

  return (
    <div className="flex items-center gap-1 ">
      <Button
        className="bg-emerald-700 hover:bg-emerald-500"
        type="button"
        onClick={handleAccept}
      >
        <SquareCheck />
      </Button>
      <Button
        className="bg-destructive text-destructive-foreground hover:bg-destructive-foreground hover:text-destructive"
        type="button"
        onClick={handleReject}
      >
        <SquareX />
      </Button>
    </div>
  );
}

export default FriendItemBtns;
