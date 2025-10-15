'use client';

import { useRef, useState } from 'react';
import { countryList } from '@/content/constants/countries.constant';
import AuthLogo from '@/app/(auth)/auth-logo';

type Status = 'idle' | 'loading' | 'ok' | 'error';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const payload = {
      first_name: formData.get('first_name') as string,
      last_name: formData.get('last_name') as string,
      email: formData.get('email') as string,
      dial_code: formData.get('dial_code') as string,
      phone: formData.get('phone') as string,
    };

    setStatus('loading');
    try {
      const res = await fetch(
        `https://api.ambridge-subsidy.uniteqlab.sk/organizations/contact-us/`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      setStatus('ok');
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  return (
    <section className="relative">
      <div
        className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square"
        aria-hidden="true"
      >
        <div className="absolute inset-0 translate-z-0 bg-sky-500 rounded-full blur-[120px] opacity-30" />
        <div className="absolute w-64 h-64 translate-z-0 bg-sky-400 rounded-full blur-[80px] opacity-70" />
      </div>

      <div className="absolute inset-0 h-96 -z-10" aria-hidden="true">
        <canvas data-particle-animation data-particle-quantity="15" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center pb-12 md:pb-20">
            <AuthLogo />
            <h1 className="h1 bg-clip-text text-transparent bg-linear-to-r from-slate-900/60 via-slate-900 to-slate-900/60 pb-4">
              Zvažujete napojení platformy Verbosus?
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-slate-400">
                Neváhejte a kontaktujte nás.
              </p>
            </div>
          </div>

          <div className="max-w-xl mx-auto">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="flex *:w-full gap-2">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block text-sm text-slate-700 font-medium mb-1"
                    >
                      Jméno <span className="text-slate-700">*</span>
                    </label>
                    <input
                      id="first_name"
                      name="first_name"
                      type="text"
                      className="form-input w-full"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last_name"
                      className="block text-sm text-slate-700 font-medium mb-1"
                    >
                      Přímení <span className="text-slate-700">*</span>
                    </label>
                    <input
                      id="last_name"
                      name="last_name"
                      type="text"
                      className="form-input w-full"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-slate-700 font-medium mb-1"
                  >
                    Váš email <span className="text-slate-700">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-input w-full"
                    required
                  />
                </div>

                <div className="flex gap-2">
                  <div className="w-[30%]">
                    <label
                      htmlFor="dial_code"
                      className="block text-sm text-slate-700 font-medium mb-1"
                    >
                      Předvolba <span className="text-slate-700">*</span>
                    </label>
                    <select
                      id="dial_code"
                      name="dial_code"
                      className="form-select text-sm w-full"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Vyberte předvolbu
                      </option>
                      {countryList.map(({ label, dialCode, value }) => (
                        <option key={value} value={dialCode}>
                          {label} {dialCode}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="w-[70%]">
                    <label
                      htmlFor="phone"
                      className="block text-sm text-slate-700 font-medium mb-1"
                    >
                      Váš telefon <span className="text-slate-700">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="form-input w-full"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="btn text-white bg-sky-500 hover:bg-sky-600 w-full shadow-xs disabled:opacity-60 disabled:cursor-not-allowed"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Odesílám…' : 'Odeslat'}
                  <span className="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </button>
              </div>

              {status === 'ok' && (
                <p className="text-center text-sm text-green-600 mt-2">
                  Děkujeme! Brzy se vám ozveme.
                </p>
              )}
              {status === 'error' && (
                <p className="text-center text-sm text-red-600 mt-2">
                  Omlouváme se, něco se pokazilo. Zkuste to prosím znovu.
                </p>
              )}
            </form>
          </div>

          <div className="text-center mt-4">
            <div className="text-sm text-slate-400">
              V případě dotazů nám napište na{' '}
              <a
                className="font-medium text-sky-500 hover:text-sky-400 transition duration-150 ease-in-out"
                href="mailto:info@verbosus.cz"
              >
                info@verbosus.cz
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
