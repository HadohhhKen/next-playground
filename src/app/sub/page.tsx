'use client';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Image from 'next/image';

export default function Home() {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://picsum.photos/v2/list?&limit=30');
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
  console.log('🚀 ~ Home ~ loading:', loading);

  return (
    <>
      <Header />
      <main className="w-[95%] max-w-[1000px] mx-auto py-10">
        <ul className="grid grid-cols-4 gap-6 min-h-[100vh]">
          {data?.map((item: any) => (
            <li className="bg-slate-100 w-[100%] h-0 pt-[100%] relative" key={item.id}>
              <Image
                className="absolute top-0 left-0 w-[100%] h-[100%] object-contain"
                src={item.download_url}
                alt=""
                width={item.width / 10}
                height={item.height / 10}
              />
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
