import Head from 'next/head';
import Link from 'next/link';
import Verse from '../../components/verse';
import Footer from '../../components/footer';
import ApiService from '../../services/api';
import app from '../../data/app.json';

export async function getStaticProps({ params }) {
  const { surahId } = params;
  const surah = await ApiService.getSurah(surahId);
  const previousSurah = await ApiService.getSurah(parseInt(surahId, 10) - 1);
  const nextSurah = await ApiService.getSurah(parseInt(surahId, 10) + 1);

  return {
    props: {
      surah,
      previousSurah,
      nextSurah,
    },
  };
}

export async function getStaticPaths() {
  const surahs = await ApiService.getAllSurah();
  const paths = surahs.map((surah) => ({
    params: { surahId: `${surah.number}` },
  }));

  return { paths, fallback: false };
}

export default function SurahPage({ surah, previousSurah, nextSurah }) {
  return (
    <>
      <Head>
        <title>
          Surat
          {' '}
          {surah.name.transliteration.id}
          {' - '}
          {app.name}
        </title>
      </Head>
      <div className="bg-white py-4 px-3 border border-gray-200 sticky top-0 z-20 shadow text-center">
        <div className="container grid grid-cols-2">
          <Link href="/surah">
            <a className="col-start-auto col-end-1">
              <svg viewBox="0 0 512 512" width="24px" height="24px"><path d="M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z" /></svg>
            </a>
          </Link>
          <span className="text-xl text-gray-700 font-semibold col-start-1 col-end-3">
            {surah.number}
            {' : '}
            {surah.name.transliteration.id}
          </span>
        </div>
      </div>
      <main className="container content">
        <div className="flex flex-col text-center mt-5 mb-1">
          <span className="text-arabic text-2xl text-gray-900 font-semibold" dir="rtl" lang="ar">{surah.name.long}</span>
          <span className="my-2 text-gray-800">
            {'( '}
            {surah.name.transliteration.id}
            {' - '}
            {surah.name.translation.id}
            {' )'}
          </span>
          <span className="text-gray-800">
            {surah.numberOfVerses}
            {' ayat '}
          </span>
        </div>
        <div className="bg-white rounded-md shadow py-8 px-5 my-5 text-gray-800">
          {surah.tafsir.id}
        </div>

        {surah.verses.map((verse) => (
          <Verse verse={verse} key={verse.number.inSurah} />
        ))}

        <div className="flex justify-between sticky bottom-2 left-0 right-0 bg-teal-600 text-white z-30 py-3 px-4 shadow-lg rounded-lg max-w-full mx-3 my-4">
          <Link href={Object.keys(previousSurah).length ? `/surah/${previousSurah.number}` : '/surah'}>
            <a className="flex items-center">
              <svg viewBox="0 0 512 512" width="24px" height="24px" className="mr-2 fill-current"><path d="M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z" /></svg>
              <span className="text-md hidden sm:inline-block">{Object.keys(previousSurah).length ? previousSurah.name.transliteration.id : 'Semua Surat'}</span>
            </a>
          </Link>
          <Link href={Object.keys(nextSurah).length ? `/surah/${nextSurah.number}` : '/surah'}>
            <a className="flex items-center">
              <span className="text-md hidden sm:inline-block">{Object.keys(nextSurah).length ? nextSurah.name.transliteration.id : 'Semua Surat'}</span>
              <svg viewBox="0 0 512 512" width="24px" height="24px" className="ml-2 fill-current">
                <path d="M85 277.375h259.704L225.002 397.077 256 427l171-171L256 85l-29.922 29.924 118.626 119.701H85v42.75z" />
              </svg>
            </a>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
