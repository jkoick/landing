import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/images/logo-2.svg';

export default function AuthLogo() {
  return (
    <div className="mb-5">
      <Link className="inline-flex" href="/">
        <div className="relative flex items-center justify-center w-16 h-16 border border-transparent rounded-2xl shadow-2xl [background:linear-gradient(var(--color-slate-100),var(--color-slate-100))_padding-box,conic-gradient(var(--color-sky-50),var(--color-sky-100)_25%,var(--color-sky-100)_75%,var(--color-sky-100)_100%)_border-box] before:absolute before:inset-0 before:bg-sky-100/30 before:rounded-2xl">
          <Image
            className="relative"
            src={Logo}
            width={42}
            height={42}
            alt="Stellar"
          />
        </div>
      </Link>
    </div>
  );
}
