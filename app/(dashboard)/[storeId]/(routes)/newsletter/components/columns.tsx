"use client";

import { ColumnDef } from "@tanstack/react-table";

export type NewsletterColumn = {
  id: string;
  email: string;

  createdAt: string;
};

export const columns: ColumnDef<NewsletterColumn>[] = [
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
];
