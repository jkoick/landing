import Link from 'next/link';
import Image from 'next/image';
import Star from '@/public/images/star-1.svg';
import IntegrationsImg01 from '@/public/images/integrations-01.svg';
import IntegrationsImg05 from '@/public/images/integrations-05.svg';
import IntegrationsImg06 from '@/public/images/integrations-06.svg';
import IntegrationsImg07 from '@/public/images/integrations-07.svg';
import IntegrationsImg08 from '@/public/images/integrations-08.svg';

export default function IntegrationsList() {
  const items = [
    {
      img: IntegrationsImg06 || '/placeholder.svg?height=40&width=40',
      name: 'Napojení na interní CRM a ERP systémy',
      description:
        'Umožníte automatizované přebírání klientských dat, synchronizaci obchodních aktivit a centralizovanou správu portfolií bez nutnosti manuálního zadávání.',
      link: '/integrations/crm-erp',
      featured: true,
      category: 'Engineering',
    },
    {
      img: IntegrationsImg07 || '/placeholder.svg?height=40&width=40',
      name: 'Integrace s compliance a risk management nástroji',
      description:
        'Zajistíte automatizované kontroly v souladu s legislativou (AML, KYC), včetně generování a archivace potřebné dokumentace.',
      link: '/integrations/compliance-management',
      featured: true,
      category: 'Engineering',
    },
    {
      img: IntegrationsImg08 || '/placeholder.svg?height=40&width=40',
      name: 'Připojení k externím datovým zdrojům a burzám',
      description:
        'Platforma umožňuje napojení na poskytovatele tržních dat, cenových feedů a obchodních API pro efektivní exekuci strategií v reálném čase.',
      link: '/integrations/external-connection',
      featured: true,
      category: 'Engineering',
    },
    {
      img: IntegrationsImg05 || '/placeholder.svg?height=40&width=40',
      name: 'Automatizované workflow a schvalovací procesy',
      description:
        'Implementujte vlastní schvalovací postupy pro obchodní případy, správu portfolií nebo změny strategií – vše s možností auditování.',
      link: '/integrations/automated-workflow',
      featured: true,
      category: 'Engineering',
    },
    {
      img: IntegrationsImg01 || '/placeholder.svg?height=40&width=40',
      name: 'White-label a partnerské widgety',
      description:
        'Vytvořte si vlastní widgety a rozhraní pro klienty nebo partnery, které lze vložit do firemních portálů či webových stránek.',
      link: '/integrations/widgets',
      featured: true,
      category: 'Engineering',
    },
  ];

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="mt-12 md:mt-16">
            <h3
              id="engineering"
              className="scroll-mt-8 text-2xl font-bold inline-flex bg-clip-text text-transparent bg-gradient-to-r from-slate-800/80 via-slate-900 to-slate-800/80 pb-8"
            >
              Klíčové možnosti integrace
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map(
                (item, index) =>
                  item.category === 'Engineering' && (
                    <IntegrationCard key={index} item={item} index={index} />
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type CardProps = {
  item: {
    category: string;
    img: string;
    name: string;
    featured: boolean;
    link: string;
    description: string;
  };
  index: number;
};

export function IntegrationCard({ item, index }: CardProps) {
  return (
    <div className="bg-gradient-to-tr from-white to-purple-50/50 rounded-3xl border border-slate-200 hover:border-sky-200 hover:shadow-md transition-all group relative">
      <div className="flex flex-col p-5 h-full">
        <div className="flex items-center space-x-3 mb-3">
          <div className="relative">
            <Image
              src={item.img || '/placeholder.svg'}
              width="40"
              height="40"
              alt={item.name}
            />
            {item.featured && (
              <Image
                className="absolute top-0 -right-1"
                src={Star || '/placeholder.svg?height=16&width=16'}
                width={16}
                height={16}
                alt="Star"
                aria-hidden="true"
              />
            )}
          </div>
          <Link
            className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-black to-sky-400 group-hover:before:absolute group-hover:before:inset-0"
            href={item.link}
          >
            {item.name}
          </Link>
        </div>
        <div className="grow">
          <div className="text-sm text-slate-600">{item.description}</div>
        </div>
      </div>
    </div>
  );
}
