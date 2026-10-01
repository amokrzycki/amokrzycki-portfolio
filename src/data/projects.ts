export type Language = "en" | "pl";
export const projects = {
  "random-frame": {
    name: "Random Frame",
    repo: "https://github.com/amokrzycki/random-frame",
    en: {
      kind: "Desktop application",
      tagline: "A small window into a very large internet.",
      summary:
        "Random public images, one at a time. A quiet desktop application with local history, keyboard-first interaction and optional encrypted sync.",
      scope: "Product UI · Desktop · Synchronization · Infrastructure",
      alt: "Random Frame’s desktop interface: a quiet image stage, history and tools, and a Draw control. Shown in its empty state.",
      capture:
        "The existing application frontend, shown in its empty state. Captured in a browser without the Tauri backend.",
      intro: "A simple interface. A substantial system.",
      overview:
        "Random Frame is a desktop application for browsing public images from Prnt.sc. One image occupies the stage. Drawing another, revisiting a frame and keeping a favorite are the central actions. The interface stays small while the application takes responsibility for persistence, distribution and synchronization.",
      sections: [
        {
          title: "Keep the image at the centre.",
          text: "The stage is the product. Custom window chrome keeps the surrounding controls compact; history, statistics and settings sit behind deliberate actions. Keyboard shortcuts support the browsing loop without adding permanent instructions to every control.",
          detail: {
            topic: "Desktop interaction",
            decision:
              "Keep the image stage clear; put secondary tools behind deliberate actions.",
            mechanism:
              "N, Space or Enter draws; arrows move through history; F toggles a favorite. Tauri connects TypeScript controls to the Rust image-fetching backend.",
            constraint:
              "Fetching the external source requires the desktop backend to work beyond browser CORS restrictions.",
          },
        },
        {
          title: "Local first. Sync by choice.",
          text: "Browsing history and favorites belong on the device. Synchronization is optional. Settings and statistics stay local, even when sync is enabled.",
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
          text: "Synchronization is more than transferring a file. Devices can change their state independently, and those changes need to merge without silently replacing one another.",
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
          title: "The application includes its delivery.",
          text: "Linux and Windows packages, automatic updates and an independently deployed sync service are part of the same ownership boundary.",
          detail: {
            topic: "Distribution and operations",
            decision:
              "Treat desktop distribution and the sync service as part of the product.",
            mechanism:
              "Rust/Axum and SQLite run behind authentication, nginx and systemd, supported by backups and operational tooling.",
            constraint:
              "Linux uses AppImage and .deb; Windows uses NSIS/MSI. Automatic updates are published through GitHub Releases.",
          },
        },
      ],
      result:
        "A restrained desktop product spanning interface design, Rust integration, local persistence, client-side cryptography and service operations.",
      note: "Images come from an unmoderated external source. Random Frame is independent of Prnt.sc and Lightshot.",
    },
    pl: {
      kind: "Aplikacja desktopowa",
      tagline: "Małe okno na ogromny internet.",
      summary:
        "Losowe publiczne obrazy, po jednym. Spokojny interfejs, lokalna historia, obsługa klawiaturą i opcjonalna szyfrowana synchronizacja.",
      scope: "Interfejs · Desktop · Synchronizacja · Infrastruktura",
      alt: "Interfejs Random Frame: obszar obrazu, historia, narzędzia i przycisk Draw. Aplikacja przed wylosowaniem pierwszego obrazu.",
      capture:
        "Istniejący frontend aplikacji przed wylosowaniem pierwszego obrazu. Zrzut z przeglądarki, bez backendu Tauri.",
      intro: "Prosty interfejs. Rozbudowany system.",
      overview:
        "Random Frame to aplikacja desktopowa do przeglądania publicznych obrazów z Prnt.sc. Jeden obraz zajmuje główny obszar. Losowanie kolejnego, powrót do historii i zapisywanie ulubionych to podstawowe działania. Interfejs pozostaje niewielki, a aplikacja odpowiada za trwałość danych, dystrybucję i synchronizację.",
      sections: [
        {
          title: "Obraz pozostaje w centrum.",
          text: "Główny obszar obrazu jest sercem produktu. Własny pasek okna ogranicza otaczające kontrolki. Historia, statystyki i ustawienia pojawiają się dopiero na żądanie. Skróty klawiaturowe wspierają przeglądanie.",
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
          title: "Lokalne dane. Synchronizacja z wyboru.",
          text: "Historia i ulubione należą do urządzenia. Synchronizacja jest opcjonalna. Ustawienia i statystyki pozostają lokalne także po jej włączeniu.",
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
          text: "Synchronizacja to więcej niż przesłanie pliku. Urządzenia mogą zmieniać dane niezależnie. Zmiany trzeba połączyć bez cichego nadpisywania.",
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
          title: "Dostarczenie też jest częścią aplikacji.",
          text: "Pakiety Linux i Windows, automatyczne aktualizacje oraz niezależnie wdrożona usługa synchronizacji należą do tego samego zakresu odpowiedzialności.",
          detail: {
            topic: "Dystrybucja i utrzymanie",
            decision:
              "Dystrybucja desktopu i usługa synchronizacji należą do produktu.",
            mechanism:
              "Rust/Axum i SQLite działają z uwierzytelnianiem, nginx i systemd, wspierane przez kopie zapasowe i narzędzia operacyjne.",
            constraint:
              "Linux korzysta z AppImage i .deb, Windows z NSIS/MSI. Automatyczne aktualizacje trafiają przez GitHub Releases.",
          },
        },
      ],
      result:
        "Powściągliwy produkt obejmujący projektowanie interfejsu, integrację z Rust, lokalne dane, kryptografię po stronie klienta i utrzymanie serwera.",
      note: "Obrazy pochodzą z zewnętrznego, niemoderowanego źródła. Random Frame nie jest powiązany z Prnt.sc ani Lightshot.",
    },
  },
  kajtek: {
    name: "Kajtek",
    repo: "https://github.com/amokrzycki/kajtek",
    en: {
      kind: "Web application",
      tagline: "Internet radio. A familiar feeling.",
      summary:
        "A lightweight radio player with a cassette-player soul. Tactile controls, animated mechanics and the engineering to keep the music playing.",
      scope: "Product design · TypeScript · Audio · Integrations",
      alt: "Kajtek’s red cassette-inspired radio player, with a speaker grille, cassette reels, playback control and a stereo label.",
      capture:
        "The actual Kajtek interface, shown ready to play. Inspired by the Polish Unitra PS-101 cassette player.",
      intro: "An old familiar object. A new set of problems.",
      overview:
        "Kajtek brings the character of a Polish cassette player to internet radio. Its interface is intentionally physical; its frontend is deliberately framework-light. Behind the play control are live audio streams, provider integrations and behavior designed around the interruptions of real radio.",
      sections: [
        {
          title: "Make the controls feel like the object.",
          text: "The cassette mechanics, VU meter and shell themes give the player a coherent identity. The interface is playful because its behavior belongs to a radio, rather than because decoration has been added around it.",
          detail: {
            topic: "Mechanics and audio analysis",
            decision:
              "Let the player’s behavior give its physical interface meaning.",
            mechanism:
              "Cassette reels animate during playback. Web Audio spectrum analysis drives the visualization. Themes and case colors keep the same interaction model.",
            constraint:
              "When audio analysis is unavailable, beat emulation provides a fallback.",
          },
        },
        {
          title: "Stay light, stay explicit.",
          text: "Plain TypeScript and custom CSS keep the application close to the browser. Product UI, state and playback are separated into focused modules without a large frontend framework.",
          detail: {
            topic: "State and rendering",
            decision:
              "Keep UI, state and playback in focused TypeScript modules.",
            mechanism:
              "The state store connects playback, provider metadata and rendering. Favorites, track history, sleep timer and station catalog extend that model.",
            constraint:
              "esbuild produces the frontend; CI and deployment workflows handle checks and releases without a large UI framework.",
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
          title: "Work with the services that exist.",
          text: "The integrations bring together different station catalogs, metadata formats and stream behavior. Understanding external services is part of making the product work.",
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
      result:
        "A lightweight web product joining interface craft, audio APIs, unreliable streams and external integrations into one listening experience.",
      note: "An independent project inspired by Unitra hardware. Station content and artwork belong to their respective owners.",
    },
    pl: {
      kind: "Aplikacja webowa",
      tagline: "Radio internetowe. Znajome uczucie.",
      summary:
        "Lekki odtwarzacz z duszą magnetofonu. Fizyczne kontrolki, animowane mechanizmy i rozwiązania, dzięki którym muzyka gra dalej.",
      scope: "Projektowanie produktu · TypeScript · Audio · Integracje",
      alt: "Czerwony odtwarzacz Kajtek inspirowany magnetofonem: maskownica głośnika, szpule kasety, przycisk odtwarzania i napis stereo.",
      capture:
        "Rzeczywisty interfejs Kajtka, gotowy do odtwarzania. Inspiracją jest polski magnetofon Unitra PS-101.",
      intro: "Znajomy przedmiot. Nowe problemy.",
      overview:
        "Kajtek przenosi charakter polskiego magnetofonu do radia internetowego. Interfejs celowo przypomina fizyczne urządzenie, a frontend pozostaje lekki. Za przyciskiem odtwarzania kryją się strumienie audio, integracje i zachowanie dostosowane do przerw w prawdziwym radiu.",
      sections: [
        {
          title: "Kontrolki pasujące do przedmiotu.",
          text: "Mechanizmy kasety, wskaźnik VU i kolory obudowy tworzą spójną tożsamość. Charakter wynika z zachowania odtwarzacza i jego funkcji.",
          detail: {
            topic: "Mechanizmy i analiza audio",
            decision:
              "Zachowanie odtwarzacza nadaje fizycznemu interfejsowi znaczenie.",
            mechanism:
              "Szpule animują się podczas odtwarzania. Analiza widma Web Audio steruje wizualizacją. Motywy i kolory zachowują ten sam model interakcji.",
            constraint:
              "Gdy analiza audio jest niedostępna, wizualizacja korzysta z emulacji rytmu.",
          },
        },
        {
          title: "Lekko i jawnie.",
          text: "TypeScript i własny CSS utrzymują aplikację blisko przeglądarki. Interfejs, stan i odtwarzanie mają osobne moduły bez dużego frameworka.",
          detail: {
            topic: "Stan i renderowanie",
            decision:
              "Interfejs, stan i odtwarzanie pozostają w osobnych modułach TypeScript.",
            mechanism:
              "Magazyn stanu łączy odtwarzanie, metadane i renderowanie. Ulubione, historia, wyłącznik czasowy i katalog stacji rozszerzają ten model.",
            constraint:
              "esbuild buduje frontend, a CI i workflow wdrożeniowy obsługują wydania bez dużego frameworka UI.",
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
          title: "Integracja z tym, co istnieje.",
          text: "Dostawcy różnią się katalogami, formatami metadanych i zachowaniem strumieni. Zrozumienie zewnętrznych usług jest częścią budowania produktu.",
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
      result:
        "Lekki produkt webowy łączący dopracowany interfejs, API audio, zawodne strumienie i zewnętrzne integracje w jedno doświadczenie słuchania.",
      note: "Niezależny projekt inspirowany sprzętem Unitra. Treści stacji i grafiki należą do ich właścicieli.",
    },
  },
} as const;
export type ProjectSlug = keyof typeof projects;
