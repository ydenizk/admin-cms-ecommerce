import React from "react";
import { UserButton, auth } from "@clerk/nextjs";
import MainNav from "./mainNav";
import StoreSwitcher from "./storeSwitcher";
import prismadb from "@/lib/prismaDb";
import { redirect } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

const Navbar = async () => {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  });

  return (
    <div className="border-r w-64 h-screen ">
      <div className="flex flex-col h-full w-full items-center gap-4 p-4 py-6">
        <div className="mb-4 flex items-center justify-between text-center w-full space-x-4 px-2">
          {/*      <ThemeToggle /> */}
          <ThemeToggle />
          <UserButton afterSignOutUrl="/" />
        </div>
        <StoreSwitcher items={stores} />

        <MainNav className="mx-6" />
      </div>
    </div>
  );
};

export default Navbar;
