"use client";

import { useParams, useRouter } from "next/navigation";


import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";


import { columns, NewsletterColumn} from "./columns";

interface NewsletterClientProps {
  data: NewsletterColumn[];
}
 const NewsletterClient: React.FC<NewsletterClientProps> = ({
  data
}) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title="Newsletter Subcriptions" description="newsletter" />
 
      </div>
      <Separator />
      <DataTable searchKey="email" columns={columns} data={data} />
  

    </>
  );
};

export default NewsletterClient
