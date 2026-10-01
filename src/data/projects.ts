export type Language = "en" | "pl";
export const projects = {
  "random-frame": {
    name: "Random Frame",
    repo: "https://github.com/amokrzycki/random-frame",
    en: {
      kind: "Desktop application",
      tagline: "Public images, one frame at a time.",
      summary:
        "A desktop gallery for exploring public images from Prnt.sc. I built the browsing interface and the encrypted sync that keeps history and favorites across devices.",
      alt: "Random Frame before the first draw, with its image stage and Draw control.",
      intro: "Browsing without losing your place.",
      overview:
        "Random Frame draws a public image from Prnt.sc and lets you keep exploring, revisit earlier frames, or save a favorite. I built it around that short browsing loop, then worked through the harder part: keeping a reliable history on the desktop and merging changes between devices without exposing their contents to the sync server.",
      sections: [
        {
          title: "Keep the image at the centre.",
          text: "I kept the image visible and put history, statistics, and sync behind separate controls. You can draw another frame or return to an earlier one from the keyboard, without opening a menu.",
          detail: {
            topic: "Desktop interaction",
            decision:
              "Keep history and sync accessible without covering the current image.",
            mechanism:
              "N, Space or Enter draws; arrows move through history; F toggles a favorite. Tauri connects TypeScript controls to the Rust image-fetching backend.",
            constraint:
              "Fetching the external source requires the desktop backend to work beyond browser CORS restrictions.",
          },
        },
        {
          title: "Keep history on the device.",
          text: "History and favorites work without a sync account. I made synchronization optional and encrypt each snapshot on the device before sending it. Settings and statistics stay local.",
          detail: {
            topic: "Encryption boundary",
            decision:
              "History and favorites stay on the device. Sync is optional.",
            mechanism:
              "The client encrypts snapshots before transfer. The recovery key controls access; the server stores ciphertext.",
            constraint:
              "Settings and statistics stay local. Connection metadata, transfer size and timing are still visible to the server.",
          },
        },
        {
          title: "Two devices, one evolving history.",
          text: "If two devices save at once, the later write must preserve the earlier changes. I used revision checks to reject stale writes, then merge and retry on the device.",
          detail: {
            topic: "Conflict resolution",
            decision: "Check each write against the revision the client read.",
            mechanism:
              "Revision ETags and compare-and-swap updates reject stale writes. The client fetches the current snapshot, merges locally and retries against the new revision.",
            constraint:
              "Another concurrent write can conflict again. Merging belongs to the client; the server cannot inspect the plaintext.",
          },
        },
        {
          title: "Releasing the desktop app.",
          text: "I package the app for Linux and Windows, publish automatic updates, and maintain the sync service separately from the desktop releases.",
          detail: {
            topic: "Distribution and operations",
            decision: "Release the app and sync service independently.",
            mechanism:
              "Rust/Axum and SQLite run behind authentication, nginx and systemd, supported by backups and operational tooling.",
            constraint:
              "Linux uses AppImage and .deb; Windows uses NSIS/MSI. Automatic updates are published through GitHub Releases.",
          },
        },
      ],
    },
    pl: {
      kind: "Aplikacja desktopowa",
      tagline: "Publiczne obrazy, po jednym.",
      summary:
        "Galeria desktopowa do odkrywania publicznych obrazów z Prnt.sc. Zbudowałem interfejs przeglądania i szyfrowaną synchronizację historii oraz ulubionych między urządzeniami.",
      alt: "Random Frame przed pierwszym losowaniem, z głównym obszarem obrazu i przyciskiem Draw.",
      intro: "Przeglądanie z pamięcią.",
      overview:
        "Random Frame losuje publiczny obraz z Prnt.sc. Możesz losować dalej, wrócić do poprzednich obrazów lub zapisać ulubiony. Wokół tego zbudowałem interfejs. Kolejnym zadaniem było trwałe przechowywanie historii i scalanie zmian między urządzeniami, bez ujawniania ich zawartości serwerowi synchronizacji.",
      sections: [
        {
          title: "Obraz pozostaje w centrum.",
          text: "Obraz zajmuje główny obszar, a historia, statystyki i synchronizacja mają osobne kontrolki. Kolejny obraz i powrót do poprzedniego są dostępne z klawiatury, bez otwierania menu.",
          detail: {
            topic: "Obsługa desktopu",
            decision:
              "Główny obszar pozostaje dla obrazu. Dodatkowe narzędzia pojawiają się na żądanie.",
            mechanism:
              "N, Spacja lub Enter losuje obraz; strzałki poruszają się po historii; F przełącza ulubione. Tauri łączy TypeScript z backendem Rust.",
            constraint:
              "Pobieranie z zewnętrznego źródła wymaga backendu desktopowego działającego poza ograniczeniami CORS przeglądarki.",
          },
        },
        {
          title: "Historia zostaje na urządzeniu.",
          text: "Historia i ulubione działają bez konta synchronizacji. Synchronizacja jest opcjonalna, a każda migawka zostaje zaszyfrowana na urządzeniu przed wysłaniem. Ustawienia i statystyki zostają lokalnie.",
          detail: {
            topic: "Granica szyfrowania",
            decision:
              "Historia i ulubione pozostają na urządzeniu. Synchronizacja jest opcjonalna.",
            mechanism:
              "Klient szyfruje migawki przed wysłaniem. Klucz odzyskiwania kontroluje dostęp, a serwer przechowuje szyfrogram.",
            constraint:
              "Ustawienia i statystyki zostają lokalnie. Serwer nadal widzi metadane połączeń, rozmiar i czas transferów.",
          },
        },
        {
          title: "Dwa urządzenia, wspólna historia.",
          text: "Gdy dwa urządzenia zapisują jednocześnie, późniejszy zapis musi zachować wcześniejsze zmiany. Sprawdzam rewizję, odrzucam nieaktualny zapis i scalam dane na urządzeniu przed ponowną próbą.",
          detail: {
            topic: "Rozwiązywanie konfliktów",
            decision:
              "Każdy zapis jest sprawdzany względem odczytanej rewizji.",
            mechanism:
              "ETagi rewizji i compare-and-swap odrzucają nieaktualny zapis. Klient pobiera bieżącą migawkę, scala lokalnie i ponawia zapis.",
            constraint:
              "Kolejny równoczesny zapis może znów spowodować konflikt. Scalenie należy do klienta; serwer nie odczytuje danych jawnych.",
          },
        },
        {
          title: "Wydania aplikacji desktopowej.",
          text: "Przygotowuję pakiety dla Linuksa i Windowsa, publikuję automatyczne aktualizacje i utrzymuję usługę synchronizacji niezależnie od wydań desktopowych.",
          detail: {
            topic: "Dystrybucja i utrzymanie",
            decision:
              "Aplikacja desktopowa i usługa synchronizacji mają niezależne wydania.",
            mechanism:
              "Rust/Axum i SQLite działają z uwierzytelnianiem, nginx i systemd, wspierane przez kopie zapasowe i narzędzia operacyjne.",
            constraint:
              "Linux korzysta z AppImage i .deb, Windows z NSIS/MSI. Automatyczne aktualizacje trafiają przez GitHub Releases.",
          },
        },
      ],
    },
  },
  kajtek: {
    name: "Kajtek",
    repo: "https://github.com/amokrzycki/kajtek",
    en: {
      kind: "Web application",
      tagline: "Internet radio in a cassette player.",
      summary:
        "A browser radio inspired by the Unitra PS-101. I designed the player and connected station catalogs, live track information, and stream recovery behind its controls.",
      alt: "Kajtek playing RMF FM in its red cassette interface, with a live audio meter and station information.",
      intro: "A radio you can leave playing.",
      overview:
        "Kajtek plays internet radio through an interface inspired by the Polish Unitra PS-101 cassette player. I designed its controls and playback behavior, then connected providers whose catalogs, track information, and streams work differently. The main engineering problem was keeping playback useful when those services stall or fail.",
      sections: [
        {
          title: "Make the controls feel like the object.",
          text: "The reels turn during playback and the meter responds to audio. I kept those signals tied to the player’s state, so the cassette interface shows what the radio is doing.",
          detail: {
            topic: "Mechanics and audio analysis",
            decision: "Use the meter and reels to indicate playback.",
            mechanism:
              "Cassette reels animate during playback. Web Audio spectrum analysis drives the visualization. Themes and case colors keep the same interaction model.",
            constraint:
              "When audio analysis is unavailable, beat emulation provides a fallback.",
          },
        },
        {
          title: "Keep station changes in step.",
          text: "Changing station affects the stream, artwork, track information, and controls together. I separated playback from rendering and connected both through shared state, so the interface follows the selected station.",
          detail: {
            topic: "State and rendering",
            decision:
              "Keep UI, state and playback in focused TypeScript modules.",
            mechanism:
              "The state store connects playback, provider metadata and rendering. Favorites, track history, sleep timer and station catalog extend that model.",
            constraint:
              "Track information arrives separately from audio and may be missing even while a stream is playing.",
          },
        },
        {
          title: "Keep listening when a stream fails.",
          text: "A live stream can stall or disappear. The player handles those failures as part of normal operation, with alternative stream mounts and bounded retries.",
          detail: {
            topic: "Failover limits",
            decision:
              "Treat stalled and broken streams as normal operating conditions.",
            mechanism:
              "Playback error or stalled events can switch to secondary MP3 mounts. Provider metadata supports ad detection and switching away from blacklisted tracks.",
            constraint:
              "Three retries within thirty seconds bound automatic recovery. An alternate stream can fail too.",
          },
        },
        {
          title: "Different stations, different APIs.",
          text: "I investigated the RMF, ESKA, and Trójka APIs and gave each provider its own integration. That keeps their catalog and metadata differences out of the player controls.",
          detail: {
            topic: "Provider boundaries",
            decision:
              "Keep provider differences behind their own integrations.",
            mechanism:
              "RMF, ESKA, Trójka and generic MP3/HLS streams have separate paths, informed by API investigation and reverse engineering.",
            constraint:
              "Catalogs, metadata and stream behavior vary. Track artwork falls back to station covers when needed.",
          },
        },
      ],
    },
    pl: {
      kind: "Aplikacja webowa",
      tagline: "Radio internetowe w magnetofonie.",
      summary:
        "Radio w przeglądarce inspirowane Unitrą PS-101. Zaprojektowałem odtwarzacz i połączyłem katalogi stacji, informacje o utworach oraz obsługę przerw w strumieniu.",
      alt: "Kajtek odtwarza RMF FM w czerwonym interfejsie magnetofonu, ze wskaźnikiem audio i informacjami o stacji.",
      intro: "Radio do codziennego słuchania.",
      overview:
        "Kajtek odtwarza radio internetowe w interfejsie inspirowanym polskim magnetofonem Unitra PS-101. Zaprojektowałem kontrolki i obsługę odtwarzania, a następnie połączyłem dostawców z różnymi katalogami, metadanymi i strumieniami. Głównym problemem technicznym była obsługa sytuacji, gdy te usługi przestają odpowiadać.",
      sections: [
        {
          title: "Kontrolki pasujące do przedmiotu.",
          text: "Szpule obracają się podczas odtwarzania, a wskaźnik reaguje na dźwięk. Powiązałem te sygnały ze stanem odtwarzacza, żeby interfejs magnetofonu pokazywał, co robi radio.",
          detail: {
            topic: "Mechanizmy i analiza audio",
            decision: "Wskaźnik i szpule sygnalizują odtwarzanie.",
            mechanism:
              "Szpule animują się podczas odtwarzania. Analiza widma Web Audio steruje wizualizacją. Motywy i kolory zachowują ten sam model interakcji.",
            constraint:
              "Gdy analiza audio jest niedostępna, wizualizacja korzysta z emulacji rytmu.",
          },
        },
        {
          title: "Spójny stan po zmianie stacji.",
          text: "Zmiana stacji wpływa jednocześnie na strumień, okładkę, informacje o utworze i kontrolki. Oddzieliłem odtwarzanie od renderowania i połączyłem je wspólnym stanem, żeby interfejs podążał za wybraną stacją.",
          detail: {
            topic: "Stan i renderowanie",
            decision:
              "Interfejs, stan i odtwarzanie pozostają w osobnych modułach TypeScript.",
            mechanism:
              "Magazyn stanu łączy odtwarzanie, metadane i renderowanie. Ulubione, historia, wyłącznik czasowy i katalog stacji rozszerzają ten model.",
            constraint:
              "Informacje o utworze przychodzą niezależnie od audio i mogą być niedostępne nawet wtedy, gdy stacja gra.",
          },
        },
        {
          title: "Muzyka gra dalej.",
          text: "Strumień na żywo może się zatrzymać lub zniknąć. Odtwarzacz traktuje te awarie jako część normalnego działania, z alternatywnymi adresami i ograniczoną liczbą prób.",
          detail: {
            topic: "Limit odzyskiwania",
            decision:
              "Zatrzymany lub uszkodzony strumień jest normalną sytuacją operacyjną.",
            mechanism:
              "Błąd lub zatrzymanie odtwarzania może przełączyć na zapasowy adres MP3. Metadane wspierają wykrywanie reklam i pomijanie zablokowanych utworów.",
            constraint:
              "Trzy próby w trzydzieści sekund ograniczają automatyczne odzyskiwanie. Zapasowy strumień też może zawieść.",
          },
        },
        {
          title: "Różne stacje, różne API.",
          text: "Zbadałem API RMF, ESKI i Trójki i przygotowałem osobną integrację dla każdego dostawcy. Różnice w katalogach i metadanych są obsługiwane poza kontrolkami odtwarzacza.",
          detail: {
            topic: "Granice dostawców",
            decision:
              "Różnice między dostawcami są obsługiwane w osobnych integracjach.",
            mechanism:
              "RMF, ESKA, Trójka i strumienie MP3/HLS mają osobne ścieżki, oparte na badaniu API i reverse engineeringu.",
            constraint:
              "Katalogi, metadane i strumienie różnią się. Gdy brak okładki utworu, używana jest grafika stacji.",
          },
        },
      ],
    },
  },
} as const;
export type ProjectSlug = keyof typeof projects;
