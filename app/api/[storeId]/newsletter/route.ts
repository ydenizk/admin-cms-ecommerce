import { NextResponse } from "next/server";

import prismadb from "@/lib/prismaDb";

export async function POST(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const body = await req.json();

    const { email } = body;
    if (!email) {
      return new NextResponse("email is required", { status: 400 });
    }

    if (!params.storeId) {
      return new NextResponse("Store id is required", { status: 400 });
    }

    const newsletter = await prismadb.newsletter.create({
      data: {
        email,
        storeId: params.storeId,
      },
    });

    return NextResponse.json(newsletter);
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    if (!params.storeId) {
      return new NextResponse("Store id is required", { status: 400 });
    }

    const newsletters = await prismadb.newsletter.findMany({
      where: {
        storeId: params.storeId,
      },
    });

    return NextResponse.json(newsletters);
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}
