import React from "react";
import { ModeToggle } from "./theme-switcher";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

type Props = {};

async function Header({}: Props) {
  const user = await currentUser();
  return (
    <div className="flex justify-center w-full h-full">
      <header className="flex justify-between w-1/2 mt-10 p-4 border-2 border-orange-600 border-opacity-20 h-fit items-center rounded-2xl">
        <h1 className="sm:font-black sm:text-2xl hidden sm:block">
          Smokeffry 🚭
        </h1>
        <h1 className="sm:hidden text-4xl">🚭</h1>
        <div className="flex gap-8 items-center">
          <div className="flex gap-4 items-center">
            <p className="text-xs font-bold hidden md:block">
              @{user?.username}
            </p>
            <UserButton />
          </div>

          <ModeToggle />
        </div>
      </header>
    </div>
  );
}

export default Header;
