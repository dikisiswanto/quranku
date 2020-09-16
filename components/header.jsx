import Head from 'next/head';
import Link from 'next/link';
import Nav from './nav';
import app from '../data/app.json';

export default function Header() {
  return (
    <>
      <Head>
        <title>{app.name}</title>
      </Head>
      <header className="px-3 shadow border border-gray-300 z-10 bg-white sticky top-0">
        <div className="container flex flex-col lg:flex-row items-center justify-between">
          <h1 className="font-bold text-xl tracking-wider pt-3 pb-1 lg:pb-3">
            <Link href="/">
              <a className="flex text-teal-700">
                <img src="/quranku.svg" alt="Quranku Logo" className="w-5 h-auto mr-2" />
                {app.name}
              </a>
            </Link>
          </h1>
          <Nav />
        </div>
      </header>
    </>
  );
}
