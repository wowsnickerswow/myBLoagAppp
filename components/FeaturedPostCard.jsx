import React from 'react';
import moment from 'moment';
// import Image from 'next/image';
import Link from 'next/link';

const FeaturedPostCard = ({ post }) => (

  <div class="max-w-lg bg-white h-full border border-gray-300 rounded-lg shadow-lg">
    <Link href={`/post/${post.slug}`}><span className="cursor-pointer absolute w-full h-full" />
      <div className="rounded-lg bg-center bg-no-repeat bg-cover inline-block w-full h-36" style={{ backgroundImage: `url('${post.featuredImage.url}')` }} />
    </Link>

    <div class="p-5">
      <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-600 dark:text-white">{post.title}</h5>
      <p className="flex-initial text-gray-400 text-xs align-text-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" className="flex-initial h-4 w-4 inline mr-2 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg> <Link href="/">{moment(post.createdAt).format('MMM DD, YYYY')} </Link>
      </p>

    </div>

  </div>
  // <div className=" flex h-72  justify-center">
  //   <div className="flex-row rounded-lg  absolute bottom-0">
  //     <div className="flex-initial" />
  //     <div className="flex-initial">
  //       <div className="rounded-lg bg-center bg-no-repeat bg-cover inline-block w-full h-64" style={{ backgroundImage: `url('${post.featuredImage.url}')` }} />
  //     </div>
  //     <p className="flex-initial text-slate-500 hover:text-blue-600 text-xl">{post.title}</p>
  //     <br />
  //     <div className="flex">
  //       <svg xmlns="http://www.w3.org/2000/svg" className="flex-initial h-4 w-4 inline mr-2 text-grey-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  //       </svg>
  //       <p className="flex-initial text-slate-400 text-xs">
  //         <Link href="/" />{moment(post.createdAt).format('MMM DD, YYYY')}
  //       </p>
  //     </div>
  /* <div className="flex items-center absolute bottom-5 w-full justify-center">
        <Image
          unoptimized
          alt={post.author.name}
          height="15"
          width="15"
          className="align-middle drop-shadow-lg rounded-full"
          src={post.author.photo.url}
        />
        <p className="inline align-middle text-white text-shadow ml-2 font-medium">{post.author.name}</p>
      </div> */
  // </div>
  // </div>
);

export default FeaturedPostCard;
