import { GetStaticProps } from "next";

interface Post {
  id: string;
  title: string;
}

interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
  return (
    <div>
      <h1>Listagem de posts</h1>
      <ul>
        {posts.map((posts) => (
          <li key={posts.id}>{posts.title}</li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps<PostsProps> = async () => {
  const response = await fetch('http://localhost:3333/posts');
  const posts = await response.json();
  return {
    props: {
      posts,
    },
    revalidate: 5, // in seconds
  }
}