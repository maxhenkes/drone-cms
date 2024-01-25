import { Post } from "@prisma/client";
import prisma from "../../lib/prisma";
import { DataTable } from "./data-table";
import { columns } from "./columns";


async function getData(): Promise<Post[]> {
  const feed = await prisma.post.findMany({});
  return feed;
}

export default async function Web() {
  const data = await getData();
    return (
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    );
}
