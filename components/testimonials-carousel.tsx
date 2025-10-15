'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Particles from './particles';
import Highlighter, { HighlighterItem } from './highlighter';

import CarouselImg01 from '@/public/images/carousel-icon-01.svg';
import CarouselImg02 from '@/public/images/carousel-icon-02.svg';
import CarouselImg03 from '@/public/images/carousel-icon-03.svg';
import CarouselImg04 from '@/public/images/carousel-icon-04.svg';

// Import Swiper
import Swiper, { Navigation } from 'swiper';
import 'swiper/swiper.min.css';
Swiper.use([Navigation]);

export default function TestimonialsCarousel() {
  const [swiperInitialized, setSwiperInitialized] = useState<boolean>(false);

  useEffect(() => {
    const carousel = new Swiper('.stellar-carousel', {
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      initialSlide: 0,
      spaceBetween: 24,
      navigation: {
        nextEl: '.carousel-next',
        prevEl: '.carousel-prev',
      },
    });
    setSwiperInitialized(true);
  }, []);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-800/80 via-slate-900 to-slate-800/80 pb-4">
              Proč si firmy vybírají Verbosus?
            </h2>
          </div>

          {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
          {/* * Custom styles in src/css/additional-styles/theme.scss */}
          <div className="relative before:absolute before:inset-0 before:-translate-x-full before:z-20 before:bg-gradient-to-l before:from-transparent before:to-white before:to-20% after:absolute after:inset-0 after:translate-x-full after:z-20 after:bg-gradient-to-r after:from-transparent after:to-white after:to-20%">
            <div className="stellar-carousel swiper-container group">
              <Highlighter
                className="swiper-wrapper w-fit"
                refresh={swiperInitialized}
              >
                {/* Carousel items */}
                <HighlighterItem className="swiper-slide h-auto group/slide">
                  <div className="relative h-full bg-white rounded-[inherit] z-20 overflow-hidden shadow-lg border border-slate-200">
                    {/* Particles animation */}
                    <Particles
                      className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out"
                      quantity={3}
                      refresh={swiperInitialized}
                    />
                    {/* Radial gradient */}
                    <div
                      className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-100 group-[.swiper-slide-active]/slide:bg-sky-200 transition-colors duration-500 ease-in-out blur-[60px]" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <Image
                        className="mb-3"
                        src={
                          CarouselImg01 || '/placeholder.svg?height=56&width=56'
                        }
                        width={56}
                        height={56}
                        alt="Icon 01"
                      />
                      <div className="grow">
                        <div className="font-bold text-lg mb-1 text-slate-900">
                          Rychlé nasazení a škálovatelnost
                        </div>
                        <div className="text-slate-600 mb-3">
                          Platformu Verbosus lze implementovat během několika
                          dní a snadno ji rozšiřovat podle růstu firmy i počtu
                          spravovaných portfolií.
                        </div>
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
                <HighlighterItem className="swiper-slide h-auto group/slide">
                  <div className="relative h-full bg-white rounded-[inherit] z-20 overflow-hidden shadow-lg border border-slate-200">
                    {/* Particles animation */}
                    <Particles
                      className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out"
                      quantity={3}
                      refresh={swiperInitialized}
                    />
                    {/* Radial gradient */}
                    <div
                      className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-100 group-[.swiper-slide-active]/slide:bg-sky-200 transition-colors duration-500 ease-in-out blur-[60px]" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <Image
                        className="mb-3"
                        src={
                          CarouselImg02 || '/placeholder.svg?height=56&width=56'
                        }
                        width={56}
                        height={56}
                        alt="Icon 02"
                      />
                      <div className="grow">
                        <div className="font-bold text-lg mb-1 text-slate-900">
                          Podpora růstu a inovací
                        </div>
                        <div className="text-slate-600 mb-3">
                          Díky modulární architektuře a otevřenému API umožňuje
                          Verbosus rychle zavádět nové funkce a přizpůsobovat
                          systém aktuálním potřebám trhu.
                        </div>
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
                <HighlighterItem className="swiper-slide h-auto group/slide">
                  <div className="relative h-full bg-white rounded-[inherit] z-20 overflow-hidden shadow-lg border border-slate-200">
                    {/* Particles animation */}
                    <Particles
                      className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out"
                      quantity={3}
                      refresh={swiperInitialized}
                    />
                    {/* Radial gradient */}
                    <div
                      className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-100 group-[.swiper-slide-active]/slide:bg-sky-200 transition-colors duration-500 ease-in-out blur-[60px]" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <Image
                        className="mb-3"
                        src={
                          CarouselImg03 || '/placeholder.svg?height=56&width=56'
                        }
                        width={56}
                        height={56}
                        alt="Icon 03"
                      />
                      <div className="grow">
                        <div className="font-bold text-lg mb-1 text-slate-900">
                          Maximální bezpečnost a soulad s regulacemi
                        </div>
                        <div className="text-slate-600 mb-3">
                          Vaše data jsou chráněna nejmodernějšími bezpečnostními
                          standardy a platforma podporuje plnění všech požadavků
                          finanční regulace.
                        </div>
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
                <HighlighterItem className="swiper-slide h-auto group/slide">
                  <div className="relative bg-white rounded-[inherit] z-20 overflow-hidden shadow-lg border border-slate-200 *:h-full">
                    {/* Particles animation */}
                    <Particles
                      className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out"
                      quantity={3}
                      refresh={swiperInitialized}
                    />
                    {/* Radial gradient */}
                    <div
                      className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-100 group-[.swiper-slide-active]/slide:bg-sky-200 transition-colors duration-500 ease-in-out blur-[60px]" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <Image
                        className="mb-3"
                        src={
                          CarouselImg04 || '/placeholder.svg?height=56&width=56'
                        }
                        width={56}
                        height={56}
                        alt="Icon 04"
                      />
                      <div className="grow">
                        <div className="font-bold text-lg mb-1 text-slate-900">
                          Zákaznická podpora a onboarding na míru
                        </div>
                        <div className="text-slate-600 mb-3">
                          Náš tým vás provede celým procesem zavedení systému a
                          zajistí individuální podporu i školení pro vaše
                          zaměstnance.
                        </div>
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </Highlighter>
            </div>
          </div>

          {/* Arrows */}
          <div className="flex mt-8 justify-end">
            <button className="carousel-prev relative z-20 w-12 h-12 flex items-center justify-center group">
              <span className="sr-only">Previous</span>
              <svg
                className="w-4 h-4 fill-slate-500 group-hover:fill-sky-600 transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="carousel-next relative z-20 w-12 h-12 flex items-center justify-center group">
              <span className="sr-only">Next</span>
              <svg
                className="w-4 h-4 fill-slate-500 group-hover:fill-sky-600 transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
