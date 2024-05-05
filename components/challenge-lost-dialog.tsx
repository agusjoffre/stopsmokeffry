"use client";
import { updateChallengeUser } from "@/app/_actions/updateUser";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

type Props = {};

function ChallengeLostDialog({}: Props) {
  function handleClick() {
    updateChallengeUser();
  }

  return (
    <Dialog>
      <DialogTrigger
        onClick={handleClick}
        className="rounded-xl py-1 text-sm flex items-center justify-center gap-2 w-full bg-destructive text-destructive-foreground hover:bg-destructive-foreground hover:text-destructive hover:duration-300 hover:ease-out"
      >
        Volví a fumar {"   "}
        <span className="text-2xl">😭</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-1">
            ¡Oh, no! Dejaste que la adicción te ganara...
            <span className="text-2xl">😞</span>
          </DialogTitle>
          <DialogDescription>
            Para dejar de fumar, ponete una fecha, buscá apoyo de amigos o
            familiares, y considerá hablar con un médico. Encontrá recursos
            útiles en sitios como{" "}
            <Link
              href={"https://smokefree.gov/"}
              target="_blank"
              className="border-b-[1px] py-[2px] text-accent hover:text-foreground hover:border-b-accent-foreground"
            >
              Smokefree.gov
            </Link>{" "}
            del CDC o{" "}
            <Link
              className="border-b-[1px] py-[2px] text-accent hover:text-foreground hover:border-b-accent-foreground"
              href={
                "https://www.argentina.gob.ar/salud/consumo-de-tabaco/como-dejar-de-fumar"
              }
              target="_blank"
            >
              Ministerio de Salud de Argentina
            </Link>
            . ¡Vos podés lograrlo!
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default ChallengeLostDialog;
