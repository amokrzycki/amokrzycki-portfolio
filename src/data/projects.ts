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
          detail:
            "N, Space or Enter draws a frame. Arrow keys move through history; F toggles a favorite. Tauri connects the plain TypeScript interface to the Rust backend, which resolves source identifiers and fetches images beyond browser cross-origin restrictions.",
        },
        {
          title: "Local first. Sync by choice.",
          text: "Browsing history and favorites belong on the device. Synchronization is optional. Settings and statistics stay local, even when sync is enabled.",
          detail:
            "The client encrypts snapshots before sending them. A recovery key gives the user control over access. The server stores encrypted data; it cannot read the plaintext history or favorites. It can still observe connection metadata, transfer size and timing.",
        },
        {
          title: "Two devices, one evolving history.",
          text: "Synchronization is more than transferring a file. Devices can change their state independently, and those changes need to merge without silently replacing one another.",
          detail:
            "The sync protocol uses revision ETags and compare-and-swap updates. A client submits against the revision it read; a conflict requires fetching the current snapshot, merging, and trying against the new revision. Client-side merge logic and optimistic concurrency keep the state transition explicit.",
        },
        {
          title: "The application includes its delivery.",
          text: "Linux and Windows packages, automatic updates and an independently deployed sync service are part of the same ownership boundary.",
          detail:
            "The separate Rust/Axum service uses SQLite for durability. Authentication, nginx, systemd, backups and operational tooling support deployment. The desktop client is distributed as AppImage and .deb on Linux, and NSIS/MSI on Windows, with updates published through GitHub Releases.",
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
          detail:
            "N, Spacja lub Enter losuje obraz. Strzałki poruszają się po historii, F przełącza ulubione. Tauri łączy interfejs TypeScript z backendem Rust, który rozwiązuje identyfikatory źródła i pobiera obrazy poza ograniczeniami CORS przeglądarki.",
        },
        {
          title: "Lokalne dane. Synchronizacja z wyboru.",
          text: "Historia i ulubione należą do urządzenia. Synchronizacja jest opcjonalna. Ustawienia i statystyki pozostają lokalne także po jej włączeniu.",
          detail:
            "Klient szyfruje migawki przed wysłaniem. Klucz odzyskiwania zapewnia użytkownikowi kontrolę nad dostępem. Serwer przechowuje zaszyfrowane dane i nie odczytuje historii ani ulubionych. Nadal widzi metadane połączeń, rozmiary transferów i ich czas.",
        },
        {
          title: "Dwa urządzenia, wspólna historia.",
          text: "Synchronizacja to więcej niż przesłanie pliku. Urządzenia mogą zmieniać dane niezależnie. Zmiany trzeba połączyć bez cichego nadpisywania.",
          detail:
            "Protokół używa ETagów rewizji i aktualizacji compare-and-swap. Klient zapisuje względem odczytanej rewizji. Konflikt wymaga pobrania aktualnej migawki, scalenia i ponownej próby względem nowej rewizji. Logika scalania działa po stronie klienta.",
        },
        {
          title: "Dostarczenie też jest częścią aplikacji.",
          text: "Pakiety Linux i Windows, automatyczne aktualizacje oraz niezależnie wdrożona usługa synchronizacji należą do tego samego zakresu odpowiedzialności.",
          detail:
            "Osobna usługa Rust/Axum korzysta z SQLite. Uwierzytelnianie, nginx, systemd, kopie zapasowe i narzędzia operacyjne wspierają wdrożenie. Klient jest dystrybuowany jako AppImage i .deb na Linux oraz NSIS/MSI na Windows. Aktualizacje trafiają przez GitHub Releases.",
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
          detail:
            "Cassette reels animate during playback. Web Audio spectrum analysis drives the visualization, with a beat-emulation fallback when analysis is unavailable. Themes and case colors change the product surface without changing the interaction model.",
        },
        {
          title: "Stay light, stay explicit.",
          text: "Plain TypeScript and custom CSS keep the application close to the browser. Product UI, state and playback are separated into focused modules without a large frontend framework.",
          detail:
            "The state store connects player behavior, provider metadata and UI rendering. Favorites, track history, sleep timer and station catalog extend the same model. esbuild produces the shipped frontend; CI and deployment workflows handle checks and releases.",
        },
        {
          title: "Keep listening when a stream fails.",
          text: "A live stream can stall or disappear. The player handles those failures as part of normal operation, with alternative stream mounts and bounded retries.",
          detail:
            "Playback error and stalled events can trigger automatic failover to secondary MP3 mounts. A three-retry / thirty-second limiter prevents endless switching. Provider-specific metadata supports track handling, ad detection and switching away from blacklisted tracks.",
        },
        {
          title: "Work with the services that exist.",
          text: "The integrations bring together different station catalogs, metadata formats and stream behavior. Understanding external services is part of making the product work.",
          detail:
            "RMF, ESKA, Trójka and generic MP3/HLS streams have separate provider paths. API investigation and reverse engineering inform those integrations. Album art uses track artwork with station-cover fallbacks; automatic ad handling and favorites remain part of one listening experience.",
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
          detail:
            "Szpule kasety animują się podczas odtwarzania. Analiza widma Web Audio steruje wizualizacją, z emulacją rytmu, gdy analiza jest niedostępna. Motywy i kolory obudowy zmieniają wygląd, zachowując model interakcji.",
        },
        {
          title: "Lekko i jawnie.",
          text: "TypeScript i własny CSS utrzymują aplikację blisko przeglądarki. Interfejs, stan i odtwarzanie mają osobne moduły bez dużego frameworka.",
          detail:
            "Magazyn stanu łączy odtwarzacz, metadane dostawców i renderowanie. Ulubione, historia utworów, wyłącznik czasowy i katalog stacji rozszerzają ten sam model. esbuild buduje frontend, a CI i workflow wdrożeniowy obsługują wydania.",
        },
        {
          title: "Muzyka gra dalej.",
          text: "Strumień na żywo może się zatrzymać lub zniknąć. Odtwarzacz traktuje te awarie jako część normalnego działania, z alternatywnymi adresami i ograniczoną liczbą prób.",
          detail:
            "Błąd lub zatrzymanie odtwarzania może przełączyć na zapasowy strumień MP3. Limit trzech prób w ciągu trzydziestu sekund zapobiega niekończącemu się przełączaniu. Metadane dostawców wspierają wykrywanie reklam i pomijanie zablokowanych utworów.",
        },
        {
          title: "Integracja z tym, co istnieje.",
          text: "Dostawcy różnią się katalogami, formatami metadanych i zachowaniem strumieni. Zrozumienie zewnętrznych usług jest częścią budowania produktu.",
          detail:
            "RMF, ESKA, Trójka i ogólne strumienie MP3/HLS mają osobne integracje. Badanie API i reverse engineering pomagają je zbudować. Okładki utworów mają zapasowe grafiki stacji. Obsługa reklam i ulubione pozostają częścią wspólnego doświadczenia słuchania.",
        },
      ],
      result:
        "Lekki produkt webowy łączący dopracowany interfejs, API audio, zawodne strumienie i zewnętrzne integracje w jedno doświadczenie słuchania.",
      note: "Niezależny projekt inspirowany sprzętem Unitra. Treści stacji i grafiki należą do ich właścicieli.",
    },
  },
} as const;
export type ProjectSlug = keyof typeof projects;
