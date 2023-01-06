import React from 'react';
// import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

// import { grpahCMSImageLoader } from '../util';

const PostCard = ({ post }) => (
  <div className="my-8">
    {/* <div className="relative shadow-md inline-block w-full h-60 lg:h-80 mb-6">
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt={post.title}
        className="shadow-lg rounded-t-lg lg:rounded-lg"
        layout="fill"
        src={post.featuredImage.url}
      />
    </div> */}
    <div className="flex flex-col items-stretch md:flex-row md:max-w-5xl rounded-lg bg-white shadow-lg ">
      <img src={post.featuredImage.url} alt="" className="w-full max-h-40 max-w-24 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" />

      <div className="p-6 flex flex-col justify-between w-full">
        <h1 className="text-gray-900 text-xl font-semibold mb-2">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h1>
        {/* <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center"> */}
        {/* <Image
            unoptimized
            loader={grpahCMSImageLoader}
            alt={post.author.name}
            height="30"
            width="30"
            className="align-middle rounded-full"
            src={post.author.photo.url}
          /> */}
        {/* <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.author.name}</p> */}
        {/* </div> */}

        <p className="text-gray-700 text-base mb-4">
          {post.excerpt}
        </p>
        <div className="flex justify-between w-full bottom-0">
          <div className="text-gray-400 text-xs ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-2 text-grey-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="bottom-0">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
          </div>
          <div className="flex-initial ">
            <Link href={`/post/${post.slug}`}>
              <span className="margin-8 rounded-full bg-blue-200 hover:bg-blue-300 text-white font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded">View all</span>
            </Link>
          </div>
        </div>
      </div>

    </div>
  </div>
);

export default PostCard;
