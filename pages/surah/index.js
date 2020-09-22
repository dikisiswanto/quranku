import Link from 'next/link';
import { useState } from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Surah from '../../components/surah';
import ApiService from '../../services/api';

export async function getStaticProps() {
  const surahs = await ApiService.getAllSurah() || [];
  return {
    props: {
      surahs,
    },
  };
}

export default function ListSurahPage({ surahs }) {
  const [allSurahs, setFilteredSurah] = useState(surahs);

  const filterSurah = (event) => {
    const userInput = event.target.value;
    const filteredSurahs = surahs.filter(
      (surah) => surah.name.transliteration.id.toLowerCase().replace(/[\W_]+/g, '').includes(userInput.toLowerCase().replace(/[\W_]+/g, '')),
    );
    setFilteredSurah(filteredSurahs);
  };

  return (
    <>
      <Header />
      <main className="container content">
        <div className="bg-teal-700 py-5 px-4 my-5 rounded-md shadow text-white">
          <h2 className="text-lg font-semibold text-xl tracking-wider">Daftar Surat dalam Al-Quran</h2>
        </div>
        <div className="my-4">
          <input type="text" onInput={filterSurah} className="border-gray-500 border-2 h-10 rounded-md px-3 py-1 bg-white w-full  transition duration-300 focus:border-teal-700 focus:outline-none" placeholder="Surat apa yang ingin Anda baca hari ini?" />
        </div>
        {allSurahs.map((surah) => (
          <Link href="/surah/[surahId]" as={`/surah/${surah.number}`} key={surah.number}>
            <a key={surah.number}><Surah data={surah} index={surah.number} /></a>
          </Link>
        ))}
      </main>
      <Footer />
    </>
  );
}
