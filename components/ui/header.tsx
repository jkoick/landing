import Link from 'next/link';
import Logo from './logo';
import MobileMenu from './mobile-menu';

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-1">
            <Logo />
          </div>
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-center flex-wrap items-center">
              <li>
                <Link
                  className="font-medium text-sm text-slate-900 hover:text-slate-600 mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="/integrations"
                >
                  Produkt
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-sm text-slate-900 hover:text-slate-600 mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="/ai-agent"
                >
                  AI Agent
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-sm text-slate-900 hover:text-slate-600 mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="/customers"
                >
                  Zákazníci
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-sm text-slate-900 hover:text-slate-600 mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="/project"
                >
                  Projekt
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-sm text-slate-900 hover:text-slate-600 mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="/contact"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>
          <ul className="flex-1 flex justify-end items-center"></ul>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
