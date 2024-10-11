'use client';
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-slate-600">
      <div className="flex justify-between items-center w-[95%] max-w-[1280px] mx-auto text-white">
        <Link className="header__logo" href="/">
          Site Logo
        </Link>
        <div className="header__menu">
          <nav>
            <ul>
              <li>
                <Link className="block py-5" href="/sub/">
                  Sub
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
