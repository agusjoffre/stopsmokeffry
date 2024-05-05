"use client";
import React, { SetStateAction } from "react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import prisma from "@/prisma/prismaClient";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

type Props = {
  setOpn: SetStateAction;
};

/* al clickearlo se updatea el usuario con los datos del challenge a 0 y false */

function CancelChallengeButton({ setOpn }: Props) {
  const [cancel, setCancel] = useState(false);

  async function handleCancel() {
    setCancel(true);
    setOpn(false);
  }

  useEffect(() => {}, [cancel]);

  return (
    <Button
      onClick={handleCancel}
      className="w-full bg-accent text-accent-foreground hover:bg-accent-foreground hover:text-accent"
    >
      ¡Voy a intentarlo denuevo!
    </Button>
  );
}

export default CancelChallengeButton;
