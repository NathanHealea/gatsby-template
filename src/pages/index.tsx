import * as React from 'react';
import type { HeadFC } from 'gatsby';

const IndexPage = () => {
  return (
    <main className='flex-1 w-full bg-primary flex items-center justify-center text-white text-center'>
      <section className='hero'>
        <div className='hero-content text-center'>
          <div className='max-w-md'>
            <h1 className='text-5xl font-bold'>
              Gatsby Static Content Starter
            </h1>
            <p className='py-6'>
              Built with GatsbyJS, DaisyUI, TailwindCSS, and 🧡
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
