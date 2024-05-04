import { Trophy } from "lucide-react";
type Props = {};

function Achievement({}: Props) {
  return (
    <div className="flex flex-col gap-4 items-center rounded-full border-2 p-12">
      <Trophy size={30} />
      <p className="text-lg">achievement.name</p>
      <p className="opacity-65 text-xs text-wrap">achievement.description</p>
    </div>
  );
}

export default Achievement;
