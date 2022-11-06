import * as React from 'react';
import { Link, HeadFC } from 'gatsby';

const NotFoundPage = () => {
  return (
    <main className='flex flex-1 justify-center items-center'>
      <section className='hero'>
        <div className='hero-content text-center'>
          <div className='max-w-md'>
            <h1 className='text-5xl font-bold my-4'>Woops...</h1>
            <h3 className='text-2xl my-4'>Looks like you are lost!</h3>
            
            <Link to="/" className='btn btn-primary'>Back to Home</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not Found</title>;
