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

type Props = {};

function FriendsSection({}: Props) {
  return (
    <div className="flex flex-col gap-5">
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Amigo</TableHead>
            <TableHead className="text-right">Dias sin fumar</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            {/* <TableCell className="font-medium">@tumba</TableCell>
            <TableCell className="text-center">2</TableCell> */}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default FriendsSection;
