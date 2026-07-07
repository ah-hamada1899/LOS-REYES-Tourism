'use client'


import { ChevronsDown } from "lucide-react";
import Image from "next/image";
import hero_pyramid from "../../img/hero_pyramid.png";
import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";




export default function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <Image width={1024} height={1024}
        alt="The Great Pyramids of Giza at Sunset"
        className="absolute inset-0 w-full h-full object-cover"
        src={hero_pyramid}
      />
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="relative z-10 text-center px-margin-mobile max-w-4xl">
        <h1 className="text-display-lg-mobile md:text-display-lg text-white mb-6 drop-shadow-lg">
          {t('hero.title')}
        </h1>
        <p className="text-body-lg text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-md">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-primary-container text-on-primary-container px-10 py-4 text-label-lg uppercase tracking-widest hover:scale-105 transition-transform duration-200 shadow-xl">
            {t('hero.cta')}
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a className="material-symbols-outlined text-white" href="#destinations">
          <ChevronsDown size={32} />
        </a>
      </div>
    </section>
  )
}