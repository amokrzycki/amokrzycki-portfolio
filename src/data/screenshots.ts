import frameSync from "../assets/random-frame-sync-detail.png";
import radioCatalog from "../assets/kajtek-catalog-detail.png";
import radioPlaylist from "../assets/kajtek-playlist-detail.png";
import radioPlaylistMobile from "../assets/kajtek-playlist-mobile.png";

export const screenshots = {
  "random-frame": [
    {
      section: 1,
      source: frameSync,
      original: "/images/random-frame-sync.png",
      focusY: 0.5,
      wide: false,
      en: "Sync is a separate, optional step. The recovery key is needed to join from another device.",
      pl: "Synchronizacja jest osobnym, opcjonalnym krokiem. Klucz odzyskiwania pozwala dołączyć kolejne urządzenie.",
      alt: {
        en: "Random Frame’s sync setup, with Turn on Sync and Join existing Sync controls.",
        pl: "Konfiguracja synchronizacji Random Frame z przyciskami włączenia i dołączenia do istniejącej synchronizacji.",
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
      pl: "Wyszukiwanie i filtry dostawców działają we wspólnym katalogu. Stację można dodać do listy lub od razu włączyć.",
      alt: {
        en: "Detail of Kajtek’s station catalog: search, provider filters, and station playback and selection controls.",
        pl: "Fragment katalogu Kajtka: wyszukiwarka, filtry dostawców oraz przyciski odtwarzania i wyboru stacji.",
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
      pl: "Playlista pokazuje przerwę na wiadomości między utworami i odróżnia bieżącą piosenkę od następnej.",
      alt: {
        en: "Kajtek’s RMF playlist with a previous song, a news break, the current ATB track and the upcoming Laura Branigan track.",
        pl: "Playlista RMF w Kajtku: poprzedni utwór, przerwa na wiadomości, bieżący utwór ATB i następny utwór Laury Branigan.",
      },
    },
  ],
};
