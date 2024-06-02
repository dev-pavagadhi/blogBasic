"use server";

import prisma from "@/lib/db";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function CreatePost(formData: FormData) {
  // auth check
  const { isAuthenticated } = getKindeServerSession();
  if (!isAuthenticated) {
    redirect("/api/auth/login");
  }

  const title = formData.get("title") as string;
  const body = formData.get("body") as string;
  console.log(title, body);

  await prisma.post.create({
    data: {
      title,
      body,
    },
  });

  revalidatePath("/posts");
}

export default CreatePost;
