import SubmitButton from "./submit-btn";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { BadgeDollarSign } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { challengeSubmit } from "@/app/_actions/challengeSubmit";

type Props = {};

function ChallengeForm({}: Props) {
  return (
    <form action={challengeSubmit} className="flex flex-col gap-8">
      <Label className="flex flex-col gap-6">
        <span>¿Cuántos cigarrillos por día fumás?</span>
        <Input type="number" name="cigarettesPerDay" />
      </Label>
      <Label className="flex flex-col gap-6">
        <span>¿Cuál es el precio de cada cigarrillo?</span>
        <div className="flex items-center gap-2">
          <BadgeDollarSign />
          <Input type="number" name="cigarettesPrice" />
        </div>
      </Label>
      <Label className="flex flex-col gap-6">
        <span>¿Cuándo dejaste de fumar?</span>
        <div>
          <Input type="date" name="startDate" />
        </div>
      </Label>

      <SubmitButton text="Comenzar el desafío" />
    </form>
  );
}

export default ChallengeForm;
