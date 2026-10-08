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
      en: "The product editor in the admin panel, with stock, price, category and the name and description in both languages. The Polish fields are product data, so they stay Polish in the English interface.",
      pl: "Edytor produktu w panelu administracyjnym ze stanem magazynowym, ceną, kategorią oraz nazwą i opisem w obu językach. Polskie pola to dane produktu, więc w angielskim interfejsie też są po polsku.",
      alt: {
        en: "English Edit product window for American Blueberries, with shared stock, price and category above separate Polish and English name and description fields.",
        pl: "Angielski formularz edycji borówki amerykańskiej ze stanem magazynowym, ceną i kategorią oraz osobnymi polami nazwy i opisu po polsku i angielsku.",
      },
    },
    {
      section: 1,
      source: basketOrder,
      original: "/images/zielony-koszyk-order.png",
      focusY: 0.3,
      wide: false,
      en: "A saved order with the names and prices from checkout. The invoice and confirmation email use the language saved with it. Customer data in this capture is synthetic.",
      pl: "Zapisane zamówienie z nazwami i cenami z chwili zakupu. Faktura i potwierdzenie e-mail są w języku zapisanym przy zamówieniu. Dane klienta na zrzucie są testowe.",
      alt: {
        en: "English order 1 with New status, an Electronic invoice action, American Blueberries, Banana and Champion Apples, delivery and a PLN 49.50 total. All customer data is synthetic.",
        pl: "Angielski widok zamówienia nr 1 ze statusem New, przyciskiem faktury, borówką amerykańską, bananem, jabłkami Champion, dostawą i sumą 49,50 zł. Dane klienta są testowe.",
      },
    },
  ],
} satisfies Record<ProjectSlug, Screenshot[]>;
