'use client';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

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
        setData(result);
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
      <Header />
      <main className="w-[95%] max-w-[1000px] mx-auto py-10">
        <ul className="grid grid-cols-3 gap-5 min-h-[100vh]">
          {!loading &&
            data?.slice(0, 11).map((item: any) => (
              <li className="bg-slate-100 p-5 grid gap-1" key={item.id}>
                <div className="font-semibold">{item.title}</div>
                <div>{item.body}</div>
              </li>
            ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
