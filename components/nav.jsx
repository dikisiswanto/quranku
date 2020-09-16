import Link from 'next/link';
import { navs } from '../data/navs.json';

export default function Nav() {
  return (
    <>
      <nav>
        <ul className="flex justify-between items-center gap-x-6">
          {navs.map((nav) => (
            <li key={nav.id}><Link href={nav.path}><a className="inline-block py-3 px-3 text-teal-900 hover:text-teal-600 transition duration-200">{nav.name}</a></Link></li>
          ))}
        </ul>
      </nav>
    </>
  );
}
