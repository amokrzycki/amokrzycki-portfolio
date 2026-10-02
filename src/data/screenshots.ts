import type { ImageMetadata } from "astro";
import type { ProjectSlug, Language } from "./projects";
import frameSync from "../assets/random-frame-sync-detail.png";
import radioCatalog from "../assets/kajtek-catalog-detail.png";
import radioPlaylist from "../assets/kajtek-playlist-detail.png";
import radioPlaylistMobile from "../assets/kajtek-playlist-mobile.png";

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
} satisfies Record<ProjectSlug, Screenshot[]>;
