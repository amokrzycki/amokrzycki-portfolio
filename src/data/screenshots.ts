import type { ImageMetadata } from "astro";
import type { ProjectSlug, Language } from "./projects";
import frameSync from "../assets/random-frame-sync-detail.png";
import radioCatalog from "../assets/kajtek-catalog-detail.png";
import radioPlaylist from "../assets/kajtek-playlist-detail.png";
import radioPlaylistMobile from "../assets/kajtek-playlist-mobile.png";
import basketOrder from "../assets/zielony-koszyk-order-detail.png";
import basketEditor from "../assets/zielony-koszyk-product-editor-detail.png";

type Screenshot = {
  section: number;
  source: ImageMetadata;
  mobileSource?: ImageMetadata;
  original: string;
  focusY: number;
  wide: boolean;
  en: string;
  pl: string;
  alt: Record<Language, string>;
};

export const screenshots = {
  "random-frame": [
    {
      section: 1,
      source: frameSync,
      original: "/images/random-frame-sync.png",
      focusY: 0.5,
      wide: false,
      en: "Sync is a separate, optional step. The recovery key is needed to join from another device.",
      pl: "Synchronizację włączasz osobno. Do połączenia kolejnego urządzenia potrzebujesz klucza odzyskiwania.",
      alt: {
        en: "Random Frame’s sync setup, with Turn on Sync and Join existing Sync controls.",
        pl: "Ustawienia Random Frame z przyciskami włączenia synchronizacji i dołączenia do już istniejącej.",
      },
    },
  ],
  kajtek: [
    {
      section: 1,
      source: radioCatalog,
      original: "/images/kajtek-catalog.png",
      focusY: 0.24,
      wide: false,
      en: "Search and provider filters share one catalog. Each station can be added to the listening list or played directly.",
      pl: "Stacje różnych nadawców są w jednym katalogu z wyszukiwarką i filtrami. Wybraną stację możesz dodać do listy słuchanych stacji lub od razu włączyć.",
      alt: {
        en: "Detail of Kajtek’s station catalog: search, provider filters, and station playback and selection controls.",
        pl: "Katalog stacji Kajtka z wyszukiwarką, filtrami nadawców oraz przyciskami odtwarzania i wyboru stacji.",
      },
    },
    {
      section: 3,
      source: radioPlaylist,
      mobileSource: radioPlaylistMobile,
      original: "/images/kajtek-history.png",
      focusY: 0.38,
      wide: true,
      en: "The playlist places a news break between songs and distinguishes the current track from the next one.",
      pl: "Na playliście widać przerwę na wiadomości między utworami. Bieżący i następny utwór są oznaczone osobno.",
      alt: {
        en: "Kajtek’s RMF playlist with a previous song, a news break, the current ATB track and the upcoming Laura Branigan track.",
        pl: "Playlista RMF w Kajtku: poprzedni utwór, przerwa na wiadomości, bieżący utwór ATB i następny utwór Laury Branigan.",
      },
    },
  ],
  "zielony-koszyk": [
    {
      section: 0,
      source: basketEditor,
      original: "/images/zielony-koszyk-product-editor.png",
      focusY: 0.5,
      wide: false,
      en: "Staff edit both language versions in one place. Price, category and stock belong to the shared product; the Polish fields are intentional in this English interface.",
      pl: "Obsługa edytuje oba tłumaczenia w jednym formularzu. Cena, kategoria i zapas należą do wspólnego produktu. Polskie pola są celowo widoczne w angielskim interfejsie.",
      alt: {
        en: "English Edit product window for American Blueberries, with shared stock, price and category above separate Polish and English name and description fields.",
        pl: "Angielski formularz edycji borówki amerykańskiej ze wspólnym zapasem, ceną i kategorią oraz osobnymi polami nazwy i opisu po polsku i angielsku.",
      },
    },
    {
      section: 1,
      source: basketOrder,
      original: "/images/zielony-koszyk-order.png",
      focusY: 0.3,
      wide: true,
      en: "The order keeps its checkout names and prices. Its saved language also determines the invoice and confirmation email. Customer data in this capture is synthetic.",
      pl: "Zamówienie zachowuje nazwy i ceny z chwili zakupu. Zapisany język określa też język faktury i potwierdzenia e-mail. Dane klienta na zrzucie są testowe.",
      alt: {
        en: "English order 1 with New status, an Electronic invoice action, American Blueberries, Banana and Champion Apples, delivery and a PLN 49.50 total. All customer data is synthetic.",
        pl: "Angielski widok zamówienia nr 1 ze statusem New, przyciskiem faktury, borówką amerykańską, bananem, jabłkami Champion, dostawą i sumą 49,50 zł. Dane klienta są testowe.",
      },
    },
  ],
} satisfies Record<ProjectSlug, Screenshot[]>;
