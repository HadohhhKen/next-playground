'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_=${Date.now()}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result.slice(0, 20));
      } catch (error) {
        console.log('error', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  //if (loading) return <p>Loading...</p>;

  return (
    <>
      <header className="bg-slate-600">
        <div className="flex justify-between items-center w-[95%] max-w-[1280px] mx-auto text-white">
          <a className="header__logo" href="/">
            Site Logo
          </a>
          <div className="header__menu">
            <nav>
              <ul>
                <li>
                  <a className="block py-5" href="/sub/">
                    Sub
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="w-[95%] max-w-[1000px] mx-auto py-10">
        <ul className="grid grid-cols-3 gap-5 min-h-[100vh]">
          {!loading &&
            data?.map((item: any) => (
              <li className="bg-slate-100 p-5 grid gap-1" key={item.id}>
                <div className="font-semibold">{item.title}</div>
                <div>{item.body}</div>
              </li>
            ))}
        </ul>
      </main>
      <footer className="bg-slate-600">
        <div className="grid place-items-center gap-2 w-[95%] max-w-[1280px] mx-auto py-5 text-white">
          <nav>
            <ul className="flex gap-2">
              <li>
                <a href="#">
                  <Image src="/assets/images/common/icon-x.svg" alt="" width={40} height={40} />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image src="/assets/images/common/icon-fb.svg" alt="" width={40} height={40} />
                </a>
              </li>
            </ul>
          </nav>
          <p>
            <small>©hoo bar baz...</small>
          </p>
        </div>
      </footer>
    </>
  );
}
