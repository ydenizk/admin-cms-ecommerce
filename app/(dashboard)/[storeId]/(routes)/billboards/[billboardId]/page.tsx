import React from "react";
import prismadb from "@/lib/prismaDb";
import { BillboardForm } from "./billboardForm";

const SingleBillboard = async ({
  params,
}: {
  params: { billboardId: string };
}) => {

    const billboard = await prismadb.billboard.findUnique({
        where: {
          id: params.billboardId
        }
      });

  return (

    <div className="flex-col">
    <div className="flex-1 space-y-4 p-8 pt-6">
      <BillboardForm initialData={billboard} />
    </div>
  </div>
  )
};

export default SingleBillboard;
