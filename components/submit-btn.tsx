"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

type Props = {
  text: string;
};

function SubmitButton({ text }: Props) {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      className="bg-accent text-accent-foreground hover:bg-accent-foreground hover:text-accent w-full"
    >
      {text}
    </Button>
  );
}

export default SubmitButton;
