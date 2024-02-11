import Navbar from "@/components/navbar";
import prismadb from "@/lib/prismaDb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const DashboardLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId, //(userId:userId)
    },
  });

  if (!store) {
    redirect("/");
  }

  return (
    <>
      <div className="flex">
        <Navbar />
        <div>{children}</div>
      </div>
    </>
  );
};

export default DashboardLayout;
