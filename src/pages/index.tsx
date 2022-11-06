import * as React from 'react';
import type { HeadFC } from 'gatsby';

const IndexPage = () => {
  return (
    <main className='flex-1 w-full bg-primary flex items-center justify-center text-primary-content'>
      <section className='hero'>
        <div className='hero-content text-center'>
          <div className='max-w-md'>
            <h1 className='text-primary-content'>
              Gatsby Static Content Starter
            </h1>
            <p>
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
