import Logo from './logo';

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-4 order-1 lg:order-none">
            <div className="h-full flex flex-col sm:flex-row lg:flex-col justify-between">
              <div className="mb-4 sm:mb-0">
                <div className="mb-4">
                  <Logo />
                </div>
                <div className="text-sm text-slate-500 flex flex-col">
                  <span>©2025 – Verbosus. All rights reserved </span>
                  <span>Verbosus s.r.o.,</span>
                  <span>Olomoucka 3419/9 Brno – Židenice, 61800</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
