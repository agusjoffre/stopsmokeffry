import SubmitButton from "./submit-btn";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

type Props = {};

function AddFriendForm({}: Props) {
  return (
    <form action="" className="flex flex-col gap-4">
      <Label className="flex flex-col gap-2">
        El código que te envió tu amigo/a
        <div className="flex gap-1">
          <span className="text-xs opacity-80 font-light">
            Puede buscarlo en la opción
          </span>
          <span className="text-xs opacity-80 font-light">
            'Agregar amigo/a'
          </span>
        </div>
        <Input name="friendCode" />
      </Label>
      <SubmitButton text="Enviar solicitud" />
    </form>
  );
}

export default AddFriendForm;
