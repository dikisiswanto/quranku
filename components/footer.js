import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 text-center py-3 px-4 bg-white mt-12">
      <div className="container text-sm">
        Dibuat oleh:
        {' '}
        <Link href="https://github.com/dikisiswanto">
          <a className="text-teal-700" target="_blank" rel="noopener noreferrer">Diki Siswanto</a>
        </Link>
      </div>
    </footer>
  );
}
