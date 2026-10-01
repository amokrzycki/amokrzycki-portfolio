export type Language = "en" | "pl";
export const projects = {
  "random-frame": {
    name: "Random Frame",
    repo: "https://github.com/amokrzycki/random-frame",
    en: {
      kind: "Desktop application",
      tagline: "Public images, one frame at a time.",
      summary:
        "A desktop viewer for public images from Prnt.sc. History and favorites stay on the device, with optional encrypted sync across devices.",
      alt: "Random Frame before the first draw, with its image stage and Draw control.",
      intro: "Browsing without losing your place.",
      overview:
        "Random Frame draws an image from Prnt.sc, lets you revisit earlier frames and save favorites. I kept that browsing loop small. The deeper work is in local persistence and merging changes across devices while the sync server stores only encrypted data.",
      sections: [
        {
          title: "Keep the image at the centre.",
          text: "The image has the main window to itself. History and other tools open when needed; drawing and moving through earlier frames work from the keyboard. A TypeScript interface calls into Rust through Tauri for image fetching and local storage.",
          detail: {
            topic: "Desktop interaction",
            mechanism:
              "N, Space or Enter draws; arrows move through history; F toggles a favorite. Tauri connects TypeScript controls to the Rust image-fetching backend.",
            constraint:
              "Fetching the external source requires the desktop backend to work beyond browser CORS restrictions.",
          },
        },
        {
          title: "Keep history on the device.",
          text: "History and favorites work locally from the first launch. Sync is optional. Each snapshot is encrypted on the device before it leaves; settings and statistics stay local.",
          detail: {
            topic: "Encryption boundary",
            mechanism:
              "A recovery key lets another device derive the keys needed to join. Seen IDs, history and favorites are encrypted before transfer. Losing the key means losing the ability to join that sync again.",
            constraint:
              "Settings and statistics stay local. Connection metadata, transfer size and timing are still visible to the server.",
          },
        },
        {
          title: "Two devices, one evolving history.",
          text: "If two devices save at once, the later write must preserve the earlier changes. I used revision checks to reject stale writes, then merge and retry on the device.",
          detail: {
            topic: "Conflict resolution",
            mechanism:
              "The independent Rust/Axum service uses an atomic SQLite update to compare the revision and save the snapshot together. ETags carry that revision. On a conflict, the client fetches, decrypts, merges and retries.",
            constraint:
              "Retries are bounded to three attempts. Continued contention returns a conflict; local data is retained. The service can check revisions without reading the contents.",
          },
        },
        {
          title: "A deletion is a change too.",
          text: "Merging lists is easy until someone deletes an entry. I store additions with unique operation IDs and keep records of removals, so fetching an older snapshot does not simply restore a deleted favorite. Undo creates a fresh operation.",
          detail: {
            topic: "Merging additions and removals",
            mechanism:
              "The client combines operations and removal records, removes the matching operations, then rebuilds the visible history and favorites. Repeated merges deduplicate operations by ID.",
            constraint:
              "Removal records are capped at 100,000. A device offline for longer than that removal history can reintroduce an old entry; indefinite retention would need a way to track which devices have received each removal.",
          },
        },
      ],
    },
    pl: {
      kind: "Aplikacja desktopowa",
      tagline: "Publiczne obrazy, po jednym.",
      summary:
        "Aplikacja desktopowa do przeglądania publicznych obrazów z Prnt.sc. Historia i ulubione zostają na urządzeniu, z opcjonalną szyfrowaną synchronizacją.",
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
            mechanism:
              "N, Spacja lub Enter losuje obraz; strzałki poruszają się po historii; F przełącza ulubione. Tauri łączy TypeScript z backendem Rust.",
            constraint:
              "Pobieranie z zewnętrznego źródła wymaga backendu desktopowego działającego poza ograniczeniami CORS przeglądarki.",
          },
        },
        {
          title: "Historia zostaje na urządzeniu.",
          text: "Historia i ulubione działają lokalnie od pierwszego uruchomienia. Synchronizacja jest opcjonalna, a każda migawka zostaje zaszyfrowana na urządzeniu przed wysłaniem. Ustawienia i statystyki zostają lokalnie.",
          detail: {
            topic: "Granica szyfrowania",
            mechanism:
              "Klucz odzyskiwania pozwala kolejnemu urządzeniu wyprowadzić klucze potrzebne do dołączenia. Identyfikatory obejrzanych obrazów, historia i ulubione są szyfrowane przed wysłaniem. Utrata klucza uniemożliwia ponowne dołączenie do tej synchronizacji.",
            constraint:
              "Ustawienia i statystyki zostają lokalnie. Serwer nadal widzi metadane połączeń, rozmiar i czas transferów.",
          },
        },
        {
          title: "Dwa urządzenia, wspólna historia.",
          text: "Gdy dwa urządzenia zapisują jednocześnie, późniejszy zapis musi zachować wcześniejsze zmiany. Sprawdzam rewizję, odrzucam nieaktualny zapis i scalam dane na urządzeniu przed ponowną próbą.",
          detail: {
            topic: "Rozwiązywanie konfliktów",
            mechanism:
              "Osobna usługa Rust/Axum atomowo porównuje rewizję i zapisuje migawkę w SQLite. Rewizję przekazuje ETag. Przy konflikcie klient pobiera dane, odszyfrowuje je, scala i ponawia zapis.",
            constraint:
              "Po trzech nieudanych próbach klient zgłasza konflikt i zachowuje dane lokalne. Usługa sprawdza rewizje bez odczytywania zawartości.",
          },
        },
        {
          title: "Usunięcie też jest zmianą.",
          text: "Scalanie list komplikuje się, gdy ktoś usuwa wpis. Zapisuję dodania z unikalnymi identyfikatorami operacji i przechowuję informacje o usunięciach, aby starsza migawka nie przywracała po prostu usuniętego ulubionego. Cofnięcie usunięcia tworzy nową operację.",
          detail: {
            topic: "Scalanie dodań i usunięć",
            mechanism:
              "Klient łączy operacje i zapisy usunięć, usuwa odpowiadające im operacje, a potem odtwarza widoczną historię i ulubione. Kolejne scalenia eliminują duplikaty według identyfikatora operacji.",
            constraint:
              "Zapisy usunięć mają limit 100 000. Urządzenie pozostające offline dłużej, niż obejmuje ta historia, może przywrócić stary wpis. Dłuższe przechowywanie wymagałoby śledzenia, które urządzenia otrzymały dane usunięcie.",
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
        "A browser radio inspired by the Unitra PS-101. The cassette controls bring together live audio, station catalogs and track information from several providers.",
      alt: "Kajtek’s complete red cassette player, ready to select a station, with reels, audio meter and playback controls.",
      intro: "What’s playing, and how do you know?",
      overview:
        "Kajtek brings internet radio into a cassette-inspired interface. The controls are familiar; the information behind them is less consistent. I built integrations for RMF, ESKA and Trójka so their different catalogs, playlists and audio metadata could work in one player.",
      sections: [
        {
          title: "The cassette follows the audio.",
          text: "The reels indicate playback, while Web Audio analysis drives the meter. Both belong to the player’s state: a station change has to update the stream, the track display and the physical controls together.",
          detail: {
            topic: "Playback and visualization",
            mechanism:
              "Playback events update shared state; the UI renders the controls and reels. A separate visualizer reads the Web Audio spectrum.",
            constraint:
              "Some streams cannot be analysed through Web Audio. The visualizer falls back to an emulated beat, so meter movement does not always represent measured audio.",
          },
        },
        {
          title: "Keep provider rules out of the controls.",
          text: "RMF publishes timed playlists. ESKA splits track information between an API and its audio stream. Trójka has separate schedules and song lists. I normalize these sources into a shared track model, keeping provider rules separate from playback and rendering in vanilla TypeScript.",
          detail: {
            topic: "A shared track model",
            mechanism:
              "Provider integrations return PlaylistResult: a current TrackInfo and a list of tracks. Optional fields carry timing, artwork and break information without requiring every source to supply them.",
            constraint:
              "The shared model cannot create information a provider does not publish. Timing and artwork remain optional.",
          },
        },
        {
          title: "Two sources can name different songs.",
          text: "ESKA’s API supplies track names; timing lives in a private HLS stream tag. The sources can change songs a few seconds apart. I compare their titles before combining them, so the new song does not inherit the previous one’s clock.",
          detail: {
            topic: "Reconciling REST and HLS",
            mechanism:
              "The HLS fragment-change event reads EXT-X-ZPR as playback enters a segment. The integration decodes its title, derives the block start from the segment timestamp, and compares normalized titles with REST. During a mismatch, the REST title remains without HLS timing.",
            constraint:
              "Title matching is a heuristic, rather than a provider-issued track ID. HLS metadata expires after thirty seconds; without a fresh tag, the integration uses REST alone.",
          },
        },
        {
          title: "A gap in the playlist needs context.",
          text: "Missing song data can mean speech, news or a break. I use RMF’s timing gaps and Trójka’s programme schedule to give that absence context. When a song ends, the display can move to the programme instead of leaving an old title on screen.",
          detail: {
            topic: "Schedules and incomplete metadata",
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
        "Radio w przeglądarce inspirowane Unitrą PS-101. Kontrolki magnetofonu łączą dźwięk na żywo, katalogi stacji i informacje o utworach od różnych dostawców.",
      alt: "Cały czerwony odtwarzacz Kajtek, gotowy do wyboru stacji, ze szpulami, wskaźnikiem audio i kontrolkami odtwarzania.",
      intro: "Co teraz gra i skąd to wiadomo?",
      overview:
        "Kajtek przenosi radio internetowe do interfejsu inspirowanego magnetofonem. Kontrolki są znajome; dane, które za nimi stoją, bywają niespójne. Przygotowałem integracje RMF, ESKI i Trójki, aby różne katalogi, playlisty i metadane audio działały w jednym odtwarzaczu.",
      sections: [
        {
          title: "Magnetofon podąża za dźwiękiem.",
          text: "Szpule sygnalizują odtwarzanie, a analiza Web Audio steruje wskaźnikiem. Oba elementy są powiązane ze stanem odtwarzacza: zmiana stacji musi jednocześnie zaktualizować strumień, informacje o utworze i fizyczne kontrolki.",
          detail: {
            topic: "Odtwarzanie i wizualizacja",
            mechanism:
              "Zdarzenia odtwarzania aktualizują wspólny stan; interfejs renderuje kontrolki i szpule. Osobny moduł wizualizacji odczytuje widmo Web Audio.",
            constraint:
              "Nie każdy strumień pozwala na analizę przez Web Audio. Wtedy wizualizacja emuluje rytm, więc ruch wskaźnika nie zawsze przedstawia pomiar dźwięku.",
          },
        },
        {
          title: "Kontrolki nie muszą znać reguł dostawcy.",
          text: "RMF publikuje playlisty z czasem emisji. ESKA rozdziela informacje między API i strumień audio, a Trójka ma osobną ramówkę i listy utworów. Normalizuję te źródła do wspólnego modelu utworu. Reguły dostawców, odtwarzanie i renderowanie pozostają w osobnych modułach TypeScriptu.",
          detail: {
            topic: "Wspólny model utworu",
            mechanism:
              "Integracje zwracają PlaylistResult: bieżący TrackInfo i listę utworów. Opcjonalne pola przechowują czas, okładki i informacje o przerwach, bez wymagania ich od każdego źródła.",
            constraint:
              "Wspólny model nie uzupełni informacji, których dostawca nie publikuje. Czas i okładki pozostają opcjonalne.",
          },
        },
        {
          title: "Dwa źródła mogą wskazywać różne utwory.",
          text: "API ESKI dostarcza nazwy utworów; czas znajduje się w prywatnym tagu strumienia HLS. Źródła mogą zmienić piosenkę w odstępie kilku sekund. Porównuję ich tytuły przed połączeniem danych, aby nowy utwór nie dostał zegara poprzedniego.",
          detail: {
            topic: "Uzgadnianie REST i HLS",
            mechanism:
              "Zdarzenie zmiany fragmentu HLS odczytuje EXT-X-ZPR przy wejściu odtwarzania w segment. Integracja dekoduje tytuł, wyznacza początek bloku z czasu segmentu i porównuje znormalizowane tytuły z REST. Przy rozbieżności zostaje tytuł REST bez czasu HLS.",
            constraint:
              "Porównanie tytułów jest heurystyką, a nie identyfikatorem utworu od dostawcy. Metadane HLS wygasają po trzydziestu sekundach; bez świeżego tagu integracja korzysta tylko z REST.",
          },
        },
        {
          title: "Przerwa w playliście potrzebuje kontekstu.",
          text: "Brak danych o utworze może oznaczać audycję, wiadomości lub przerwę. Wykorzystuję odstępy między utworami RMF i ramówkę Trójki, aby nadać temu kontekst. Po zakończeniu piosenki ekran może pokazać audycję zamiast starego tytułu.",
          detail: {
            topic: "Ramówka i niepełne metadane",
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
