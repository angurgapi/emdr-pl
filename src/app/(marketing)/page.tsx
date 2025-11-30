import { Sparkles } from "lucide-react";
import Link from "next/link";
import Demo from "@/components/landing/Demo";
import Container from "@/components/landing/Container";
import Features from "@/components/landing/Features";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(120,119,198,0.25),rgba(255,255,255,0))]" />
      <Container>
        <div className="py-8 md:py-14">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-gray-600 bg-white/60 backdrop-blur dark:bg-black/60 dark:text-gray-300">
            <Sparkles className="h-3.5 w-3.5 text-blue-800 dark:text-yellow-100" />{" "}
            Minimalistyczne • Spokojne • Otwarte
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            EMDR i stymulacja obustronna – prosto i przystępnie.
          </h1>
          <p className="mt-4 max-w-2xl text-gray-600 md:text-lg dark:text-gray-300">
            Małe, ale skupione narzędzie do samodzielnej stymulacji obustronnej:
            płynny ruch, pełny ekran, sterowanie klawiaturą. Stworzone bez
            zbędnych rozpraszaczy.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href="/session" className="text-lg font-bold">
              <Button className="font-semibold" size="lg">
                Rozpocznij sesję za darmo
              </Button>
            </Link>
            <Link href="#demo">
              <Button
                variant="ghost"
                className="font-semibold text-primary--900"
                size="lg"
              >
                Zobacz demo
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

function WhatIs() {
  return (
    <section className="py-6">
      <Container>
        <h2 className="text-2xl font-semibold md:text-3xl">
          Czym jest stymulacja obustronna?
        </h2>
        <p className="mt-4 max-w-4xl text-gray-600 md:text-lg dark:text-gray-300">
          Stymulacja obustronna (BLS) stanowi element terapii EMDR. Ta technika
          pomaga w przetwarzaniu i integracji traumatycznych wspomnień. Polega
          na naprzemiennym pobudzaniu zmysłów – wzrokowym lub słuchowym – co
          wspiera regulację emocjonalną i procesy uzdrawiania. Osoby, które
          doświadczyły traumy, zazwyczaj zauważają poprawę jakości snu i
          zmniejszenie poziomu lęku już po 3-6 sesjach. Zwykle prowadzi ją
          przeszkolony terapeuta, ale samodzielna stymulacja obustronna także
          pomaga w relaksacji i redukcji stresu.
        </p>
      </Container>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-10">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border bg-black text-white">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_70%_at_100%_0%,rgba(255,255,255,0.12),transparent)]" />
          <div className="relative z-10 p-8 md:p-12">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Zacznij swoją sesję stymulacji obustronnej z Spoko – teraz.
            </h2>
            <p className="mt-2 max-w-2xl text-white/80">
              Bez rejestracji, bez śledzenia, bez rozpraszaczy.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/session" className="text-lg font-bold">
                Rozpocznij sesję
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Hero />
      <WhatIs />
      <Features />
      <Demo />
      <CTA />
    </main>
  );
}
