"use client";
import { addFriend } from "@/app/_actions/friendActions";
import SubmitButton from "./submit-btn";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useToast } from "./ui/use-toast";

type Props = {};

function AddFriendForm({}: Props) {
  const [state, formAction] = useFormState(addFriend, null);

  const { toast } = useToast();
  useEffect(() => {
    if (!state) return;
    if (state.found === false) {
      toast({
        title: "Usuario no encontrado",
        variant: "destructive",
        duration: 2000,
      });
    } else if (state.found === true && state.exists === true) {
      toast({
        title: "Ya son amigos",
        variant: "destructive",
        duration: 2000,
      });
    } else {
      toast({
        title: "Solicitud enviada",
        className: "bg-emerald-800 text-white",
        duration: 1000,
      });
    }
  }, [state, toast]);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <Label className="flex flex-col gap-2">
        El código que te envió tu amigo/a
        <div className="flex gap-1">
          <span className="text-xs opacity-80 font-light">
            Puede buscarlo en la opción
          </span>
          <span className="text-xs opacity-80 font-light">
            Agregar amigo/a
          </span>
        </div>
        <Input name="friendCode" required />
      </Label>
      <SubmitButton text="Enviar solicitud" />
    </form>
  );
}

export default AddFriendForm;
