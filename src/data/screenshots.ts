import frameSync from "../assets/random-frame-sync.png";
import frameHistory from "../assets/random-frame-history.png";
import frameFavorites from "../assets/random-frame-favorites.png";
import frameStats from "../assets/random-frame-stats.png";
import frameSettings from "../assets/random-frame-settings.png";
import radioCatalog from "../assets/kajtek-catalog.png";
import radioStations from "../assets/kajtek-stations.png";
import radioHistory from "../assets/kajtek-history.png";
import radioFavorites from "../assets/kajtek-favorites.png";
import radioTheme from "../assets/kajtek-theme.png";

export const screenshots = {
  "random-frame": [
    {
      source: frameHistory,
      en: "History before the first draw.",
      pl: "Historia przed pierwszym losowaniem.",
    },
    {
      source: frameFavorites,
      en: "The favorites view with no saved frames.",
      pl: "Widok ulubionych bez zapisanych obrazów.",
    },
    {
      source: frameStats,
      en: "Activity statistics before any frames have been drawn.",
      pl: "Statystyki aktywności przed pierwszym losowaniem.",
    },
    {
      source: frameSettings,
      en: "Settings and theme selection.",
      pl: "Ustawienia i wybór motywu.",
    },
    {
      source: frameSync,
      en: "Optional encrypted sync, before pairing a device.",
      pl: "Opcjonalna szyfrowana synchronizacja przed połączeniem urządzenia.",
    },
  ],
  kajtek: [
    {
      source: radioCatalog,
      en: "The station catalog with search, provider filters and listening-list controls.",
      pl: "Katalog stacji z wyszukiwaniem, filtrami dostawców i wyborem stacji do słuchania.",
    },
    {
      source: radioStations,
      en: "The player, volume, sleep timer and station list.",
      pl: "Odtwarzacz, głośność, wyłącznik czasowy i lista stacji.",
    },
    {
      source: radioHistory,
      en: "A recorded RMF playlist, including the gap between songs and the upcoming track.",
      pl: "Zapisana playlista RMF z przerwą między utworami i kolejną piosenką.",
    },
    {
      source: radioFavorites,
      en: "A track saved from the RMF playlist.",
      pl: "Utwór zapisany z playlisty RMF.",
    },
    {
      source: radioTheme,
      en: "The complete cassette player in its dark theme and blue shell.",
      pl: "Cały magnetofon w ciemnym motywie z niebieską obudową.",
    },
  ],
};
