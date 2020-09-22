export default function Verse({ verse }) {
  return (
    <div className="relative shadow-sm border border-gray-300 rounded-md py-5 px-4 my-3 bg-white overflow-hidden">
      <span className="absolute top-0 left-0 bg-teal-700 text-white inline-block py-1 px-2 mr-1 text-sm">{verse.number.inSurah}</span>
      <div className="mt-3">
        <span className="block text-arabic text-black text-2xl py-1 px-2" dir="rtl" lang="ar">{verse.text.arab}</span>
        <span className="block text-gray-700 py-1 px-2 text-left">{verse.translation.id}</span>
      </div>
    </div>
  );
}
