import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <nav className="container mx-auto px-10 my-10 lg:my-2">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <div className="md:float-left block text-justify font-bold">
          <Link href="/">
            <span className="cursor-pointer font-bold text-black md:text-lg pb-8 ">feedback-bazar.com</span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
