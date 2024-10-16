import React from 'react';

// https://next-export-optimize-images.vercel.app/docs/Features/picture-component
import Picture from 'next-export-optimize-images/picture';

const basePath = process.env.basePath;

const Header = () => {
  return (
    <footer className="bg-slate-600">
      <div className="grid place-items-center gap-2 w-[95%] max-w-[1280px] mx-auto py-5 text-white">
        <nav>
          <ul className="flex gap-2">
            <li>
              <a href="#">
                <Picture src={`${basePath}/assets/images/common/icon-x.svg`} alt="" width={40} height={40} />
              </a>
            </li>
            <li>
              <a href="#">
                <Picture src={`${basePath}/assets/images/common/icon-fb.svg`} alt="" width={40} height={40} />
              </a>
            </li>
          </ul>
        </nav>
        <p>
          <small>©hoo bar baz...</small>
        </p>
      </div>
    </footer>
  );
};

export default Header;
