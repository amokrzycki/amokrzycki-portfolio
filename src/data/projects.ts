export type Language = "en" | "pl";
export const projects = {
  "random-frame": {
    name: "Random Frame",
    repo: "https://github.com/amokrzycki/random-frame",
    en: {
      kind: "Desktop application",
      tagline: "Public images, one frame at a time.",
      summary:
        "A desktop gallery for exploring public images from Prnt.sc, with local history and favorites. Optional encrypted sync keeps them together across devices without giving the server access to their contents.",
      alt: "Random Frame before the first draw, with its image stage and Draw control.",
      intro: "Browsing without losing your place.",
      overview:
        "Random Frame draws a public image from Prnt.sc and lets you keep exploring, revisit earlier frames, or save a favorite. The browsing loop is short. The harder part was keeping a reliable history on the desktop and merging changes between devices without exposing their contents to the sync server.",
      sections: [
        {
          title: "Keep the image at the centre.",
          text: "I kept the image visible and put history, statistics, and sync behind separate controls. You can draw another frame or return to an earlier one from the keyboard, without opening a menu.",
          detail: {
            topic: "Desktop interaction",
            decision:
              "Give history and sync their own views so the browsing screen stays focused on the image.",
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
        "Galeria desktopowa do odkrywania publicznych obrazów z Prnt.sc, z lokalną historią i ulubionymi. Opcjonalna szyfrowana synchronizacja łączy je między urządzeniami bez ujawniania ich zawartości serwerowi.",
      alt: "Random Frame przed pierwszym losowaniem, z głównym obszarem obrazu i przyciskiem Draw.",
      intro: "Przeglądanie z pamięcią.",
      overview:
        "Random Frame losuje publiczny obraz z Prnt.sc. Możesz losować dalej, wrócić do poprzednich obrazów lub zapisać ulubiony. Najwięcej pracy wymagało trwałe przechowywanie historii i scalanie zmian między urządzeniami, bez ujawniania ich zawartości serwerowi synchronizacji.",
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
        "A browser radio inspired by the Unitra PS-101. Behind the cassette controls, separate provider integrations turn different station catalogs and track data into one listening interface.",
      alt: "Kajtek’s complete red cassette player, ready to select a station, with reels, audio meter and playback controls.",
      intro: "What’s playing, and how do you know?",
      overview:
        "Kajtek started with a cassette player: the Polish Unitra PS-101. Bringing internet radio into that interface meant working out what the player could reliably show. RMF publishes timed playlists, ESKA splits track information between a REST API and the audio stream, and Trójka has separate schedules and song lists. I built provider integrations that translate those sources into a shared model of the current track and playlist.",
      sections: [
        {
          title: "The cassette follows the audio.",
          text: "The reels indicate playback, while Web Audio analysis drives the meter. Both belong to the player’s state: a station change has to update the stream, the track display and the physical controls together.",
          detail: {
            topic: "Playback and visualization",
            decision:
              "Drive the cassette’s moving parts from playback state and audio analysis.",
            mechanism:
              "Playback events update shared state; the UI renders the controls and reels. A separate visualizer reads the Web Audio spectrum.",
            constraint:
              "Some streams cannot be analysed through Web Audio. The visualizer falls back to an emulated beat, so meter movement does not always represent measured audio.",
          },
        },
        {
          title: "Keep provider rules out of the controls.",
          text: "The cassette should not need to know which provider calls a song title a name, or whether a playlist comes from one request or two. Each integration returns the same current-track and playlist structure. Playback, state and rendering use that structure in separate vanilla TypeScript modules.",
          detail: {
            topic: "A shared track model",
            decision: "Normalize data at the provider boundary.",
            mechanism:
              "Provider integrations return PlaylistResult: a current TrackInfo and a list of tracks. Optional fields carry timing, artwork and break information without requiring every source to supply them.",
            constraint:
              "The shared model cannot create information a provider does not publish. Timing and artwork remain optional.",
          },
        },
        {
          title: "Two sources can name different songs.",
          text: "ESKA’s REST API supplies readable track names, but timing lives in a private HLS tag. They can change songs a few seconds apart. Combining them blindly would put the previous song’s clock on the new title. The integration compares normalized titles before attaching timing and drops stream metadata when it becomes stale.",
          detail: {
            topic: "Reconciling REST and HLS",
            decision:
              "Attach stream timing only when the titles describe the same song.",
            mechanism:
              "The HLS fragment-change event reads EXT-X-ZPR as playback enters a segment. The integration decodes its title, derives the block start from the segment timestamp, and compares normalized titles with REST. During a mismatch, the REST title remains without HLS timing.",
            constraint:
              "Title matching is a heuristic, rather than a provider-issued track ID. HLS metadata expires after thirty seconds; without a fresh tag, the integration uses REST alone.",
          },
        },
        {
          title: "A gap in the playlist needs context.",
          text: "Missing song data can mean speech, news or a break. RMF’s integration examines timestamps and gaps between songs; Trójka’s combines the programme schedule with its song list. When a Trójka song is no longer current, the programme title gives the listener more useful context than leaving the old song on screen.",
          detail: {
            topic: "Schedules and incomplete metadata",
            decision:
              "Use the provider’s schedule and timing to explain gaps in song data.",
            mechanism:
              "RMF maps timed playlist entries and inserts break rows for qualifying gaps. Trójka discovers the website’s Next.js build ID, fetches schedule and playlist data, and matches the active programme to its songs using Warsaw time.",
            constraint:
              "RMF break labels are inferred from timing. Trójka’s website data can change with a deployment; the integration clears a cached build ID after a 404 so it can discover the new one.",
          },
        },
      ],
    },
    pl: {
      kind: "Aplikacja webowa",
      tagline: "Radio internetowe w magnetofonie.",
      summary:
        "Radio w przeglądarce inspirowane Unitrą PS-101. Za kontrolkami magnetofonu osobne integracje łączą różne katalogi stacji i dane o utworach we wspólny interfejs.",
      alt: "Cały czerwony odtwarzacz Kajtek, gotowy do wyboru stacji, ze szpulami, wskaźnikiem audio i kontrolkami odtwarzania.",
      intro: "Co teraz gra i skąd to wiadomo?",
      overview:
        "Kajtek zaczął się od magnetofonu: polskiej Unitry PS-101. Przeniesienie radia internetowego do tego interfejsu wymagało ustalenia, jakie informacje odtwarzacz może wiarygodnie pokazać. RMF publikuje playlisty z czasem emisji, ESKA rozdziela dane o utworze między API REST a strumień audio, a Trójka ma osobną ramówkę i listy utworów. Przygotowałem integracje, które przekładają te źródła na wspólny model bieżącego utworu i playlisty.",
      sections: [
        {
          title: "Magnetofon podąża za dźwiękiem.",
          text: "Szpule sygnalizują odtwarzanie, a analiza Web Audio steruje wskaźnikiem. Oba elementy są powiązane ze stanem odtwarzacza: zmiana stacji musi jednocześnie zaktualizować strumień, informacje o utworze i fizyczne kontrolki.",
          detail: {
            topic: "Odtwarzanie i wizualizacja",
            decision:
              "Powiązać ruchome elementy magnetofonu ze stanem odtwarzania i analizą audio.",
            mechanism:
              "Zdarzenia odtwarzania aktualizują wspólny stan; interfejs renderuje kontrolki i szpule. Osobny moduł wizualizacji odczytuje widmo Web Audio.",
            constraint:
              "Nie każdy strumień pozwala na analizę przez Web Audio. Wtedy wizualizacja emuluje rytm, więc ruch wskaźnika nie zawsze przedstawia pomiar dźwięku.",
          },
        },
        {
          title: "Kontrolki nie muszą znać reguł dostawcy.",
          text: "Magnetofon nie musi wiedzieć, jak dostawca nazywa pole z tytułem ani czy playlista wymaga jednego czy dwóch zapytań. Każda integracja zwraca tę samą strukturę bieżącego utworu i playlisty. Odtwarzanie, stan i renderowanie korzystają z niej w osobnych modułach czystego TypeScriptu.",
          detail: {
            topic: "Wspólny model utworu",
            decision: "Normalizować dane na granicy integracji z dostawcą.",
            mechanism:
              "Integracje zwracają PlaylistResult: bieżący TrackInfo i listę utworów. Opcjonalne pola przechowują czas, okładki i informacje o przerwach, bez wymagania ich od każdego źródła.",
            constraint:
              "Wspólny model nie uzupełni informacji, których dostawca nie publikuje. Czas i okładki pozostają opcjonalne.",
          },
        },
        {
          title: "Dwa źródła mogą wskazywać różne utwory.",
          text: "API REST ESKI dostarcza czytelne nazwy utworów, ale dane o czasie znajdują się w prywatnym tagu HLS. Źródła mogą zmienić utwór w odstępie kilku sekund. Połączenie ich bez sprawdzenia przypisałoby zegar poprzedniego utworu do nowego tytułu. Integracja porównuje znormalizowane tytuły przed dołączeniem czasu i odrzuca nieaktualne metadane strumienia.",
          detail: {
            topic: "Uzgadnianie REST i HLS",
            decision:
              "Dołączać czas ze strumienia tylko wtedy, gdy tytuły opisują ten sam utwór.",
            mechanism:
              "Zdarzenie zmiany fragmentu HLS odczytuje EXT-X-ZPR przy wejściu odtwarzania w segment. Integracja dekoduje tytuł, wyznacza początek bloku z czasu segmentu i porównuje znormalizowane tytuły z REST. Przy rozbieżności zostaje tytuł REST bez czasu HLS.",
            constraint:
              "Porównanie tytułów jest heurystyką, a nie identyfikatorem utworu od dostawcy. Metadane HLS wygasają po trzydziestu sekundach; bez świeżego tagu integracja korzysta tylko z REST.",
          },
        },
        {
          title: "Przerwa w playliście potrzebuje kontekstu.",
          text: "Brak danych o utworze może oznaczać audycję, wiadomości lub przerwę. Integracja RMF analizuje czas emisji i odstępy między utworami; integracja Trójki łączy ramówkę z listą piosenek. Gdy utwór w Trójce już się skończył, tytuł audycji daje słuchaczowi więcej informacji niż pozostawiony na ekranie stary utwór.",
          detail: {
            topic: "Ramówka i niepełne metadane",
            decision:
              "Wykorzystać ramówkę i czas emisji do wyjaśnienia przerw w danych o utworach.",
            mechanism:
              "RMF mapuje wpisy playlisty i dodaje wiersze przerw dla odpowiednich odstępów. Trójka odczytuje identyfikator buildu Next.js ze strony, pobiera ramówkę i playlistę, a następnie łączy bieżącą audycję z utworami według czasu warszawskiego.",
            constraint:
              "Etykiety przerw RMF są wnioskowane z czasu. Dane strony Trójki mogą zmienić się po wdrożeniu; po odpowiedzi 404 integracja usuwa zapamiętany identyfikator buildu, aby pobrać nowy.",
          },
        },
      ],
    },
  },
} as const;
export type ProjectSlug = keyof typeof projects;
