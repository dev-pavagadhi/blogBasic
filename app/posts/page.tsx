import Form from "@/components/form";
import Postlist from "@/components/Postlist";
import Link from "next/link";
import { Suspense } from "react";

async function PostPage() {
  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl font-bold mb-5 md:text-5xl">All Posts</h1>
      <Suspense fallback="loading...">
        <Postlist />
      </Suspense>
      <Form/>
    </main>
  );
}

export default PostPage;
