import * as React from "react"
import type { HeadFC } from "gatsby"

const IndexPage = () => {
  return (
   <main className='flex-1 w-full bg-primary flex items-center justify-center text-white text-center'
   >
    <div>
      <h1 className='text-6xl pb-2'>Gatsby Static Content Starter</h1>
      <p className='text-2xl'>Built with GatsbyJS, DaisyUI, TailwindCSS, and 🧡</p>
    </div>
   </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
