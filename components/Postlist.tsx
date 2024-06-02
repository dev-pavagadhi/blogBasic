import prisma from '@/lib/db';
import Link from 'next/link'
import React from 'react'

async function Postlist() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const posts = await prisma.post.findMany({})
   
  return (
    <ul>
    {posts.map((post) => (
        <li key={post.id} className="mb-3">
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
      </ul>
  )
}

export default Postlist