import Link from 'next/link';
import Footer from '../components/footer';
import Header from '../components/header';

export default function About() {
  return (
    <>
      <Header />
      <main className="container content">
        <div className="bg-teal-600 py-5 px-3 text-center text-white my-5 rounded-md shadow">
          <img src="/quranku.svg" alt="Quranku logo" className="w-1/4 mx-auto" />
          <span className="pt-3 block text-lg md:text-xl lg:text-2xl tracking-widest font-semibold">Quranku</span>
        </div>
        <div className="py-3 text-center">
          <h4 className="text-semibold font-lg">Sumber data</h4>
          <span className="block text-gray-700">
            <Link href="https://github.com/sutanlab/quran-api">
              <a target="_blank" rel="noopener noreferrer" className="text-teal-700 underline px-2">Quran API</a>
            </Link>
            {' '}
            oleh Sutan Nasution
          </span>
        </div>
        <div className="py-3 text-center">
          <h4 className="text-semibold font-lg">Teknologi Pendukung</h4>
          <span className="block text-gray-700">
            <Link href="https://nextjs.org">
              <a target="_blank" rel="noopener noreferrer" className="text-teal-700 underline px-2">NextJS</a>
            </Link>
            <Link href="https://tailwindcss.com">
              <a target="_blank" rel="noopener noreferrer" className="text-teal-700 underline px-2">TailwindCSS</a>
            </Link>
          </span>
        </div>
      </main>
      <Footer />
    </>
  );
}
