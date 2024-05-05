import ChallengeForm from "./challenge-form";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

type Props = {};

function StartTheCallengeButton({}: Props) {
  return (
    <Drawer>
      <DrawerTrigger className="w-full text-4xl font-bold bg-accent text-accent-foreground hover:bg-accent-foreground hover:text-accent py-28 rounded-3xl">
        ¡Comenzá el desafio!
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Ingresá tus datos</DrawerTitle>
          <DrawerDescription>Luego podrás editarlos.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <ChallengeForm />
          <DrawerClose>
            <Button variant="destructive" className="w-full">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default StartTheCallengeButton;
