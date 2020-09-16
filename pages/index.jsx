import Link from 'next/link';
import Surah from '../components/surah';
import Footer from '../components/footer';
import Header from '../components/header';
import ApiService from '../services/api';

export async function getServerSideProps() {
  const surahs = await ApiService.getAllSurah();
  const featuredSurahs = ['Yasin', 'Al-Kahf', 'Al-Mulk', 'Ar-Rahman', 'Al-Waqi\'ah', 'Yusuf'];
  const recommendedSurahs = surahs.filter(
    ({ name }) => featuredSurahs.includes(name.transliteration.id),
  );

  return {
    props: {
      recommendedSurahs,
    },
  };
}

export default function Home({ recommendedSurahs }) {
  return (
    <>
      <Header />
      <main className="container content">
        <div className="bg-teal-600 rounded-lg shadow py-4 px-4 my-4">
          <img src="/Quran-reading.svg" alt="Reading quran illustration" className="md:w-5/12 h-40 md:h-auto mx-auto" />
        </div>
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl my-2 inline-block text-gray-700 tracking-wide">Surat Pilihan</h2>
          <Link href="/surah">
            <a className="underline">Semua Surat</a>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-3">
          {recommendedSurahs.map((surah, index) => (
            <Link href="/surah/[surahId]" as={`/surah/${surah.number}`} key={surah.number}>
              <a><Surah data={surah} index={index + 1} /></a>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
