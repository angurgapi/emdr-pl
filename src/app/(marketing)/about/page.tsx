import Container from "@/components/landing/Container";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "O Spoko.help - Darmowe narzędzie EMDR",
  description: "Spoko.help - o serwisie i jego misji",
};

export default function AboutPage() {
  return (
    <Container>
      <div className="py-10 ">
        <h1 className="text-3xl font-bold mb-4">O Spoko.help</h1>
        <p className="mb-6">
          Spoko.help powstało, aby <strong>terapia EMDR</strong> była prosta i
          dostępna – niezależnie od tego, czy jesteś ciekawy/a jej kojącego
          działania, czy chcesz włączyć ją do swojej rutyny dbania o siebie.
          Pomysł wywodzi się z nowoczesnej neuronauki i psychologii, gdzie
          rytmiczne, naprzemienne ruchy lub dźwięki pomagają mózgowi się
          zrelaksować i sprawniej przetwarzać emocje.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          Czym jest stymulacja obustronna?
        </h2>
        <p className="mb-4">
          Stymulacja obustronna (często w skrócie <strong>BLS</strong>) polega
          na delikatnym, naprzemiennym aktywowaniu obu półkul mózgu – na
          przykład poprzez ruch gałek ocznych w lewo i w prawo lub słuchanie
          miękkich dźwięków przełączających się między lewym a prawym uchem.
          Stanowi ona fundament <strong>terapii EMDR</strong> (Eye Movement
          Desensitization and Reprocessing, czyli Desensytyzacja i
          Reprocesowanie za pomocą Ruchu Oczu), opracowanej przez psycholożkę{" "}
          <strong>Francine Shapiro</strong> pod koniec lat 80. XX wieku.
        </p>
        <p className="mb-4">
          Shapiro zauważyła, że gdy ludzie przypominali sobie trudne
          wspomnienia, jednocześnie szybko przesuwając wzrok z boku na bok, te
          wspomnienia stawały się potem mniej bolesne. Z czasem badania
          potwierdziły, że tego rodzaju naprzemienne pobudzanie zmysłów wspiera
          mózg w przepracowywaniu trudnych emocji i przywracaniu poczucia
          spokoju.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          Dlaczego mózg tak na to reaguje?
        </h2>
        <p className="mb-4">
          Nasz mózg naturalnie korzysta z koordynacji lewa–prawa, by przetwarzać
          codzienne doświadczenia – nawet podczas snu, gdy{" "}
          <strong>faza REM (rapid eye movement)</strong> pomaga porządkować
          wspomnienia. Stymulacja obustronna zdaje się naśladować ten rytm,
          pozwalając emocjonalnym i logicznym obszarom mózgu sprawniej się
          komunikować.
        </p>
        <p className="mb-4">
          Dokładny mechanizm działania nie jest jeszcze w pełni poznany, ale
          badania wskazują, że pomaga on zmniejszyć nadmierną aktywność w
          rejonach mózgu związanych ze stresem i sprzyja poczuciu równowagi oraz
          zakorzenienia. Krótko mówiąc: gdy uwaga rytmicznie przesuwa się z
          jednej strony na drugą, układ nerwowy łatwiej przechodzi z trybu
          „walki lub ucieczki" w stan spokoju.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Nasza misja</h2>
        <p className="mb-4">
          Prawda jest taka, że wiele osób doświadczających traumy nie ma łatwego
          dostępu do terapii w ogóle – a tym bardziej do EMDR. Nawet gdy taka
          możliwość istnieje, praktykowanie stymulacji obustronnej w domu między
          sesjami potrafi wzmocnić efekty terapii. Naszym celem jest
          umożliwienie Ci doświadczenia łagodnej stymulacji obustronnej bez
          rozpraszaczy, śledzenia danych, opłat czy skomplikowanych ustawień.
          Wykorzystaj ją, by się skupić, zrelaksować lub po prostu dać sobie
          mentalną przerwę.
        </p>

        <p className="text-sm text-gray-600 mt-10">
          Uwaga: Spoko.help nie jest usługą medyczną ani terapeutyczną. Jeśli
          zmagasz się z traumą, lękiem lub innymi problemami psychicznymi,
          rozważ kontakt z licencjonowanym specjalistą przeszkolonym w EMDR lub
          innych terapiach opartych na dowodach naukowych.
        </p>
      </div>
    </Container>
  );
}
