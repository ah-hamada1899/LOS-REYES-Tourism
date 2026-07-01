'use client'

import { MoveRight } from "lucide-react";
import Image from "next/image";
import nile_river from "../../img/nile_river.png";
import { useTranslation } from "@/hooks/useTranslation";


export default function NileSection() {

  const { t } = useTranslation()


  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface lotus-pattern overflow-hidden">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-primary-container opacity-30"></div>
          <Image width={1024} height={1024}
            alt="A luxury dahabiya boat sailing on the Nile"
            className="w-full aspect-4/5 object-cover shadow-2xl relative z-10"
            src={nile_river}
          />
        </div>
        <div>
          <span className="font-label-lg text-label-lg text-primary tracking-widest uppercase mb-4 block">
            {t('nile.label')}
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-background mb-8 leading-tight">
            {t('nile.title')}
          </h2>
          <div className="space-y-6 text-on-surface-variant font-body-lg text-body-lg">
            <p>
              {t('nile.p1')}
            </p>
            <p>
              {t('nile.p2')}
            </p>
          </div>
          <div className="mt-12">
            <a className="group flex items-center gap-4 font-label-lg text-label-lg text-primary uppercase tracking-widest" href="#">
              {t('nile.cta')}
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                <MoveRight />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}