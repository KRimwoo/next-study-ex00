import CardComponent from "@/components/CardComponent";
import Post from "@/components/Post";
import { Button } from "@mui/material";

type PostType = {
  username: string;
  avatar: string;
  content: string;
};

export default async function Home() {
  const posts: PostType[] = await getData();
  console.log(posts);

  const isClient = typeof window === "object";
  console.log("Home isClient", isClient);
  return (
    <>
      <div style={{display: "flex", justifyContent:"space-evenly"}}>
        <h1>peer-stagram</h1>
        <Button href="/write">new post</Button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {posts &&
          posts.map((post, index) => (
            <CardComponent key={index} postId={index}>
              <Post post={post} />
            </CardComponent>
          ))}
      </div>
    </>
  );
}

async function getData() {
  // const usersInfoRes = await fetch(
  //   "https://random-data-api.com/api/v2/users?size=5",
  //   { cache: "no-store" }
  // );
  // const usersInfo = await usersInfoRes.json();

  // const photosRes = await fetch(
  //   "https://picsum.photos/v2/list?page=1&limit=5",
  //   { cache: "force-cache" }
  // );
  // const photos = await photosRes.json();

  // const posts = usersInfo.map((user: any, index: number) => ({
  //   username: user.first_name,
  //   avatar: user.avatar,
  //   content: photos[index].download_url,
  // }));

  const postsRes = await fetch("http://localhost:4000/posts", {
    cache: "no-store",
  });

  const posts = postsRes.json();

  return posts;
}
