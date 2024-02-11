import { format } from "date-fns";

import prismadb from "@/lib/prismaDb";
import { NewsletterColumn } from "./components/columns";
import NewsletterClient from "./components/client";


const NewsletterPage = async ({ params }: { params: { storeId: string } }) => {
  const newsletters = await prismadb.newsletter.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedNewsletters: NewsletterColumn[] = newsletters.map((item) => ({
    id: item.id,
    email: item.email,

    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
<NewsletterClient data={formattedNewsletters}/>
      </div>
    </div>
  );
};

export default NewsletterPage;
