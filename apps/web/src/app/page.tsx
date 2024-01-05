import Posts from "../components/Post";
import prisma from "../lib/prisma";

export default async function Home() {
  const feed = await prisma.post.findMany({});
  console.log(JSON.stringify(feed));

  return (
    <>
      <h1>Posts:</h1>
      {feed.map((post) => (
        <div key={post.id}>
          <Posts post={post} />
        </div>
      ))}
    </>
  );
}
