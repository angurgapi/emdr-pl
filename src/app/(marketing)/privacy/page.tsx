import Container from "@/components/landing/Container";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Polityka Prywatności | Spoko.help",
  description:
    "Ta Polityka Prywatności wyjaśnia, jak spoko.help przetwarza Twoje dane podczas korzystania z naszej strony i darmowego narzędzia do stymulacji obustronnej (BLS)",
};
export default function PrivacyPage() {
  return (
    <Container>
      <div className="py-10 mx-auto text-gray-800">
        <h1 className="text-2xl font-bold mb-4">Polityka Prywatności</h1>
        <p className="text-sm mb-6">
          Ostatnia aktualizacja: 27 października 2025
        </p>
        <p>
          Ta Polityka Prywatności wyjaśnia, jak <strong>spoko.help</strong>{" "}
          (&ldquo;my&rdquo;, &ldquo;nasze&rdquo; lub &ldquo;nas&rdquo;)
          przetwarza Twoje dane podczas korzystania z naszej strony i narzędzia
          do stymulacji obustronnej (BLS).
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">
          1. Jakie informacje zbieramy
        </h2>
        <p>
          Obecnie nie zbieramy danych osobowych. Przechowujemy jedynie Twoje
          preferencje dotyczące motywu (jasny lub ciemny) lokalnie w
          przeglądarce.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">
          2. Pliki cookie i pamięć lokalna
        </h2>
        <p>
          W tej chwili nie używamy plików cookie do śledzenia ani analityki.
          Aktywna jest tylko funkcjonalna pamięć lokalna dla preferencji
          interfejsu użytkownika.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">3. Przyszłe zmiany</h2>
        <p>
          Gdy dodamy uwierzytelnianie lub analitykę, ta polityka zostanie
          odpowiednio zaktualizowana.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">4. Kontakt</h2>
        <p>
          Pytania? Napisz do nas na{" "}
          <a
            href="mailto:contact@spoko.help"
            className="text-blue-600 underline"
          >
            contact@spoko.help
          </a>
        </p>
      </div>
    </Container>
  );
}
