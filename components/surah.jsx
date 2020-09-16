export default function Surah({ data, index }) {
  return (
    <div className="shadow-sm hover:shadow-md transition duration-300 border border-gray-300 rounded-md py-5 px-4 my-3 bg-white flex items-start justify-between">
      <span className="bg-teal-700 text-white inline-block py-1 px-2 rounded-lg mr-3 text-sm">{index}</span>
      <div className="text-right">
        <span className="block text-arabic text-black text-2xl" dir="rtl" lang="ar">{data.name.short}</span>
        <span className="block">{data.name.transliteration.id}</span>
        <span className="block text-gray-700 text-sm">
          {data.name.translation.id}
          {' - '}
          {data.numberOfVerses}
          {' ayat '}
        </span>
      </div>
    </div>
  );
}
