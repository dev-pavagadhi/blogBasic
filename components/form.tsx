import CreatePost from '@/actions/action'
import React from 'react'

function Form() {
  return (
    <form
    action={CreatePost}
    className="flex flex-col max-w-[400px] mx-auto gap-2 my-10"
  >
    <input
      type="text"
      name="title"
      placeholder="Title for post"
      className="border rounded px-3 h-10"
      required
    />
    <textarea
      name="body"
      placeholder="body content"
      className="border rounded px-3 py-2"
      rows={6}
      required
    />
    <button className="h-10 bg-blue-500 px-5 rounded text-white mt-10">
      Submit
    </button>
  </form>
  )
}

export default Form