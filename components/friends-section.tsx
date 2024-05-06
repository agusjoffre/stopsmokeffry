import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { User } from "@prisma/client";
import {
  calculateDaysPassed,
  calculateHoursPassed,
} from "@/app/_actions/calculateTime";

type Props = {
  friends: User[] | null
  
};

function FriendsSection({ friends }: Props) {
  return (
    <div className="flex flex-col gap-5">
      <Table className="w-full ">
        <TableHeader>
          <TableRow>
            <TableHead className="">Amigo</TableHead>
            <TableHead className="">Días sin fumar</TableHead>
            <TableHead className="text-end">Horas sin fumar</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {friends?.map((friend) => {
            const daysPassed = calculateDaysPassed(friend.startDate);
            const hoursPassed = calculateHoursPassed(friend.startDate);
            return (
              <TableRow key={friend.id}>
                <TableCell className="text-sm">{friend.name}</TableCell>
                {friend.isChallenge === true ? (
                  <>
                    <TableCell className="text-xl text-center font-semibold">
                      {daysPassed}
                    </TableCell>
                    <TableCell className="text-xl text-end font-semibold">
                      {hoursPassed}
                    </TableCell>
                  </>
                ) : (
                  <>
                    <TableCell className="text-xs font-semibold ">
                      Todavía no inició el desafío
                    </TableCell>
                    <TableCell className="text-xs text-end font-semibold">
                      Todavía no inició el desafío
                    </TableCell>
                  </>
                )}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default FriendsSection;
