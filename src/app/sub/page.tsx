import Header from '../components/Header';
import Footer from '../components/Footer';

// https://next-export-optimize-images.vercel.app/docs/Features/remote-image-component
import RemotePicture from 'next-export-optimize-images/remote-picture';
const basePath = process.env.basePath;

interface Image {
  id: string;
  download_url: string;
  width: number;
  height: number;
}

export default async function Home() {
  const res = await fetch('https://picsum.photos/v2/list?&limit=10');
  const images = await res.json();

  return (
    <>
      <Header />
      <main className="w-[95%] max-w-[1000px] mx-auto py-10">
        <ul className="grid grid-cols-2 gap-6 min-h-[100vh]">
          {images?.map((item: Image) => (
            <li className="bg-slate-100 w-[100%] h-0 pt-[100%] relative" key={item.id}>
              <RemotePicture
                className="absolute top-0 left-0 w-[100%] h-[100%] object-contain"
                src={`${basePath}${item.download_url}`}
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
