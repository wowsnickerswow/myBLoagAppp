
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className=" container mx-auto flex items-center justify-between bg-white shadow-lg rounded-lg p-8 my-10 md:my-3">
      <div className="md:float-left block text-justify">
        <Link href="/">
          <span className="cursor-pointer font-bold text-black md:text-lg pb-8">feedback-bazar.com</span>
        </Link>
      </div>
      <nav>
        <section className="MOBILE-MENU flex md:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"> </span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"> </span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"> </span>
          </div>

          <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px] my-24 text-2xl">
              {categories.map((category, index) => (
                <Link key={index} href={`/category/${category.slug}`}>
                  <span className="md:float-right align-middle text-black ml-8 font-semibold cursor-pointer">{category.name}</span>
                </Link>
              ))}
            </ul>
          </div>
        </section>

        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className=" font-semibold cursor-pointer my-10 mx-2">{category.name}</span></Link>
          ))}
        </div>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
