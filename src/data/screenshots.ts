import frameActive from "../assets/random-frame-active.webp";
import frameHistory from "../assets/random-frame-history.webp";
import frameFavorites from "../assets/random-frame-favorites.webp";
import frameStats from "../assets/random-frame-stats.webp";
import frameSettings from "../assets/random-frame-settings.webp";
import radioCatalog from "../assets/kajtek-catalog.webp";
import radioStations from "../assets/kajtek-stations.webp";
import radioHistory from "../assets/kajtek-history.webp";
import radioFavorites from "../assets/kajtek-favorites.webp";
import radioTheme from "../assets/kajtek-theme.webp";

export const screenshots = {
  "random-frame": [
    {
      source: frameActive,
      en: "Frame actions alongside a public image.",
      pl: "Menu działań przy publicznym obrazie.",
    },
    {
      source: frameHistory,
      en: "History keeps earlier frames within reach.",
      pl: "Historia pozwala wrócić do wcześniejszych obrazów.",
    },
    {
      source: frameFavorites,
      en: "Favorites kept separately from browsing history.",
      pl: "Ulubione przechowywane niezależnie od historii przeglądania.",
    },
    {
      source: frameStats,
      en: "Viewing activity and explored image IDs.",
      pl: "Aktywność przeglądania i sprawdzone identyfikatory obrazów.",
    },
    {
      source: frameSettings,
      en: "Sync and theme controls in the settings menu.",
      pl: "Synchronizacja i wybór motywu w menu ustawień.",
    },
  ],
  kajtek: [
    {
      source: radioCatalog,
      en: "Choose stations from the live catalog.",
      pl: "Wybór stacji z aktualnego katalogu.",
    },
    {
      source: radioStations,
      en: "Favorite stations at the top of the listening list.",
      pl: "Ulubione stacje na początku listy.",
    },
    {
      source: radioHistory,
      en: "The station’s playlist, with the current and upcoming tracks.",
      pl: "Playlista stacji z bieżącym i nadchodzącymi utworami.",
    },
    {
      source: radioFavorites,
      en: "Saved tracks from the playlist.",
      pl: "Utwory zapisane z playlisty.",
    },
    {
      source: radioTheme,
      en: "The same player in a dark theme with a blue shell.",
      pl: "Ten sam odtwarzacz w ciemnym motywie z niebieską obudową.",
    },
  ],
};
