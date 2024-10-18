import Header from './components/Header';
import Footer from './components/Footer';

export default async function Home() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_=${Date.now()}`);
  const data = await res.json();

  return (
    <>
      <Header />
      <main className="w-[95%] max-w-[1000px] mx-auto py-10">
        <ul className="grid grid-cols-3 gap-5 min-h-[100vh]">
          {data?.slice(0, 11).map((item: any) => (
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
