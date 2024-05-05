"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Copy, CopyCheck, PlusCircleIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { useToast } from "./ui/use-toast";
import { Label } from "./ui/label";
import AddFriendForm from "./add-friend-form";

type Props = {
  userCode: string;
};

function AddFriendDialog({ userCode }: Props) {
  const { toast } = useToast();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyToClipboard = async () => {
    navigator.clipboard.writeText(userCode);
    const copied = await navigator.clipboard.readText();
    if (copied === userCode) {
      setIsCopied(true);
      toast({
        title: "Copiado en el portapapeles ☑️",
        duration: 1000,
        className: "bg-emerald-800 text-white",
      });
    } else {
      setIsCopied(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="rounded-lg py-3 w-full bg-accent text-accent-foreground flex items-center justify-center gap-2 hover:bg-accent-foreground hover:text-accent">
        <PlusCircleIcon />
        Agregar amigo/a
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-8">
        <DialogHeader>
          <DialogTitle>
            ¡Buscá a tu amigo/a! <span className="text-2xl">🤝</span>
          </DialogTitle>
          <DialogDescription>
            Tu futuro/a amigo/a recibirá una solicitud de amistad que podrá
            aceptar.
          </DialogDescription>
        </DialogHeader>
        <AddFriendForm />
        <DialogFooter className="w-full">
          <Label className="w-full flex flex-col gap-2">
            Tu código de amigo/a
            <span className="text-xs font-light opacity-80">
              Con este código tu amigo/a podrá agregarte.
            </span>
            <div className="flex items-center">
              <Input
                value={userCode}
                onClick={handleCopyToClipboard}
                className="cursor-pointer"
              />
              <Button onClick={handleCopyToClipboard} variant={"outline"}>
                {!isCopied ? <Copy /> : <CopyCheck />}
              </Button>
            </div>
          </Label>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddFriendDialog;
