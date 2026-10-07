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
          explanation: "sync",
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
      tagline: "Losuj obrazy z Prnt.sc i zapisuj ulubione.",
      summary:
        "Aplikacja do przeglądania publicznych obrazów z Prnt.sc. Przechowuje historię i ulubione na urządzeniu. Można też włączyć szyfrowaną synchronizację między urządzeniami.",
      alt: "Okno Random Frame przed pierwszym losowaniem: miejsce na obraz i przycisk Draw.",
      intro: "Wracaj do obejrzanych obrazów.",
      overview:
        "Random Frame losuje publiczne obrazy z Prnt.sc. Możesz obejrzeć kolejny, wrócić do wcześniejszych lub dodać wybrany do ulubionych. Najwięcej pracy wymagał zapis historii i łączenie zmian z kilku urządzeń tak, żeby serwer synchronizacji nie miał dostępu do treści tych danych.",
      sections: [
        {
          title: "Przeglądanie z klawiatury.",
          text: "Większość okna zajmuje obraz. Historię, statystyki i synchronizację otwierasz osobno, a losowanie i powrót do wcześniejszych obrazów obsługujesz z klawiatury, bez otwierania menu.",
          detail: {
            topic: "Skróty klawiaturowe i Tauri",
            mechanism:
              "N, spacja lub Enter losują obraz. Strzałkami przeglądasz historię, a klawiszem F dodajesz obraz do ulubionych lub go stamtąd usuwasz. Tauri łączy interfejs w TypeScript z backendem w Rust.",
            constraint:
              "Obrazy pobiera backend aplikacji desktopowej, ponieważ w przeglądarce dostęp do zewnętrznego źródła ogranicza CORS.",
          },
        },
        {
          title: "Historia zostaje na urządzeniu.",
          text: "Historia i ulubione zapisują się lokalnie od pierwszego uruchomienia. Jeśli włączysz synchronizację, aplikacja zaszyfruje kopię danych przed wysłaniem jej na serwer. Ustawienia i statystyki są przechowywane tylko na urządzeniu.",
          detail: {
            topic: "Co obejmuje szyfrowanie",
            mechanism:
              "Na podstawie klucza odzyskiwania kolejne urządzenie oblicza klucze potrzebne do synchronizacji. Identyfikatory obejrzanych obrazów, historia i ulubione są szyfrowane przed wysłaniem. Bez klucza odzyskiwania nie da się ponownie dołączyć do tej synchronizacji.",
            constraint:
              "Ustawienia i statystyki nie są synchronizowane. Serwer widzi jednak metadane połączeń, rozmiar przesyłanych danych i czas ich przesyłania.",
          },
        },
        {
          title: "Dwa urządzenia, wspólna historia.",
          explanation: "sync",
          text: "Gdy dwa urządzenia zapisują zmiany w tym samym czasie, jedno może nadpisać dane drugiego. Dlatego serwer sprawdza numer wersji danych i odrzuca nieaktualny zapis. Aplikacja pobiera wtedy nowszą wersję, łączy ją z lokalnymi zmianami i próbuje ponownie.",
          detail: {
            topic: "Rozwiązywanie konfliktów",
            mechanism:
              "Osobna usługa w Rust, oparta na Axum, porównuje numer wersji i zapisuje kopię danych w jednej operacji atomowej w SQLite. Numer wersji przekazuje nagłówek ETag. Przy konflikcie klient pobiera dane, odszyfrowuje je, scala i ponawia zapis.",
            constraint:
              "Po trzech nieudanych próbach klient zgłasza konflikt i zachowuje lokalne dane. Serwer może porównywać numery wersji bez odszyfrowywania zawartości.",
          },
        },
        {
          title: "Jak zachować usunięcia przy synchronizacji.",
          text: "Po połączeniu danych z dwóch urządzeń usunięty obraz mógłby wrócić do ulubionych. Każdemu dodaniu nadaję więc unikalny identyfikator i zapisuję też informacje o usunięciach. Dzięki temu aplikacja rozpoznaje usunięty wpis w starszej kopii danych. Cofnięcie usunięcia tworzy nową operację.",
          detail: {
            topic: "Łączenie operacji dodawania i usuwania",
            mechanism:
              "Klient łączy operacje z zapisami usunięć, odrzuca operacje oznaczone jako usunięte i na tej podstawie odtwarza historię oraz ulubione. Identyfikatory pozwalają pominąć duplikaty przy kolejnych scaleniach.",
            constraint:
              "Aplikacja przechowuje do 100 000 zapisów usunięć. Jeśli urządzenie wróci do synchronizacji po usunięciu starszych zapisów z tej historii, może przywrócić dawny wpis. Bezterminowe zachowywanie usunięć wymagałoby śledzenia, które urządzenia już je otrzymały.",
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
          explanation: "metadata",
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
      kind: "Aplikacja przeglądarkowa",
      tagline: "Radio internetowe w magnetofonie.",
      summary:
        "Radio internetowe z interfejsem inspirowanym magnetofonem Unitra PS-101. Ma wspólny katalog stacji różnych nadawców i pokazuje informacje o aktualnie nadawanych utworach.",
      alt: "Czerwony odtwarzacz Kajtek przed wyborem stacji, ze szpulami, wskaźnikiem poziomu dźwięku i przyciskami odtwarzania.",
      intro: "Co teraz gra i skąd to wiadomo?",
      overview:
        "Kajtek to radio internetowe w przeglądarce, które wygląda jak magnetofon. Każdy nadawca inaczej udostępnia dane o stacjach i utworach. Przygotowałem integracje RMF, ESKI i Trójki, które łączą ich katalogi, playlisty i informacje ze strumieni w jednym odtwarzaczu.",
      sections: [
        {
          title: "Szpule i wskaźnik reagują na odtwarzanie.",
          text: "Szpule obracają się podczas odtwarzania, a wskaźnik reaguje na dźwięk analizowany przez Web Audio. Po zmianie stacji strumień, informacje o utworze i przyciski interfejsu muszą zaktualizować się jednocześnie.",
          detail: {
            topic: "Odtwarzanie i wizualizacja",
            mechanism:
              "Zdarzenia odtwarzania aktualizują wspólny stan aplikacji, na podstawie którego interfejs wyświetla przyciski i szpule. Osobny moduł wizualizacji odczytuje widmo dźwięku przez Web Audio.",
            constraint:
              "Nie każdy strumień można analizować przez Web Audio. W takim przypadku wskaźnik porusza się w symulowanym rytmie i nie pokazuje rzeczywistego poziomu dźwięku.",
          },
        },
        {
          title: "Jeden odtwarzacz dla różnych nadawców.",
          text: "RMF publikuje playlisty z godzinami emisji. ESKA udostępnia część informacji przez API, a część w strumieniu audio. Trójka ma osobną ramówkę i listy utworów. Sprowadzam te dane do wspólnego formatu. Obsługa poszczególnych nadawców, odtwarzanie i wyświetlanie mają osobne moduły w TypeScript.",
          detail: {
            topic: "Wspólny model utworu",
            mechanism:
              "Każda integracja zwraca PlaylistResult z bieżącym utworem jako TrackInfo oraz listą utworów. Pola z czasem, okładką i informacjami o przerwach są opcjonalne, bo nie każdy nadawca udostępnia te dane.",
            constraint:
              "Wspólny format nie uzupełnia brakujących danych. Jeśli nadawca nie publikuje czasu ani okładki, aplikacja ich nie wyświetla.",
          },
        },
        {
          title: "Dwa źródła mogą wskazywać różne utwory.",
          explanation: "metadata",
          text: "API ESKI podaje tytuły utworów, a informacje o czasie są zapisane w prywatnym tagu strumienia HLS. Dane z obu źródeł mogą zaktualizować się w odstępie kilku sekund. Przed ich połączeniem porównuję tytuły, żeby do nowego utworu nie przypisać czasu poprzedniego.",
          detail: {
            topic: "Łączenie danych z REST i HLS",
            mechanism:
              "Gdy odtwarzanie przechodzi do kolejnego segmentu HLS, integracja odczytuje tag EXT-X-ZPR. Dekoduje tytuł, oblicza początek bloku na podstawie czasu segmentu i porównuje tytuły z HLS i REST po normalizacji. Jeśli się różnią, zachowuje tytuł z REST i pomija czas z HLS.",
            constraint:
              "Dopasowanie po tytule jest przybliżone i daje mniejszą pewność niż identyfikator utworu od nadawcy. Metadane HLS wygasają po trzydziestu sekundach. Jeśli nie pojawi się nowy tag, integracja korzysta tylko z REST.",
          },
        },
        {
          title: "Co pokazać między utworami.",
          text: "Gdy brakuje danych o utworze, na antenie może trwać audycja, serwis wiadomości lub przerwa. Korzystam z odstępów między utworami w playliście RMF i z ramówki Trójki, żeby opisać, co wtedy słychać. Po zakończeniu piosenki ekran może wyświetlić nazwę audycji zamiast nieaktualnego tytułu utworu.",
          detail: {
            topic: "Ramówka i niepełne metadane",
            mechanism:
              "Integracja RMF odczytuje wpisy playlisty i dodaje wiersze przerw tam, gdzie wskazują na nie odstępy między utworami. Integracja Trójki odczytuje ze strony identyfikator buildu Next.js, pobiera ramówkę i playlistę, a następnie dopasowuje utwory do bieżącej audycji według czasu warszawskiego.",
            constraint:
              "Opisy przerw RMF wynikają z odstępów czasowych. Po wdrożeniu nowej wersji strony Trójki mogą zmienić się adresy danych. Po odpowiedzi 404 integracja usuwa zapamiętany identyfikator buildu i pobiera aktualny.",
          },
        },
      ],
    },
  },
  "zielony-koszyk": {
    name: "Zielony Koszyk",
    repo: "https://github.com/amokrzycki/zielony-koszyk",
    backendRepo: "https://github.com/amokrzycki/zielony-koszyk-backend",
    en: {
      kind: "Full-stack web application",
      tagline: "Groceries, from basket to order.",
      summary:
        "A grocery application in English and Polish. Customers build a basket and return to saved orders; staff manage the catalogue and order details. Built with React and NestJS.",
      alt: "Zielony Koszyk’s English fruit catalogue with category and price filters, search, quantities and Add to cart controls.",
      intro: "Both sides of a grocery order.",
      overview:
        "I built Zielony Koszyk around the handoff from choosing groceries to handling an order. Customers shop in English or Polish, use saved delivery details and return to their orders and invoices. Staff work with the same catalogue and order records in an admin workspace. This is a personal project without a payment gateway or commercial launch.",
      sections: [
        {
          title: "One catalogue, two languages.",
          text: "Search, categories and price filters help customers find groceries in their language. Filters stay in the URL, and the basket survives a reload. Staff edit Polish and English names and descriptions together, with one shared price and stock level for each product.",
          detail: {
            topic: "Localized data, shared products",
            mechanism:
              "React and TypeScript use RTK Query for API data. The active language is part of each localized query’s cache key and travels to NestJS in Accept-Language. PostgreSQL stores product translations separately from price and stock; search and name sorting use the requested translation. Redux Persist keeps only the basket.",
            constraint:
              "Missing translations fall back to Polish. The admin interface distinguishes roles, but several management endpoints still need server-side role and ownership checks before the application can be used commercially.",
          },
        },
        {
          title: "Checkout leaves a record.",
          text: "Checkout starts with saved addresses and ends with an order the customer can revisit. The account shows its products, delivery charge and current status, with a PDF invoice to download. Staff can review that same order and update its details and status.",
          detail: {
            topic: "Saving the order and its language",
            mechanism:
              "TypeORM saves addresses, line items and stock deductions in a PostgreSQL transaction. Each order keeps the language chosen at checkout and a snapshot of its product names. Later catalogue edits do not rewrite those names. Invoice generation and the confirmation email template use the stored language after the transaction commits.",
            constraint:
              "Prices still come from checkout, and stock checks do not lock product rows. Invoice generation happens after the order commits; later staff edits do not regenerate that PDF. These are limits to address before taking real orders.",
          },
        },
        {
          title: "Make the extra login step clear.",
          text: "Customers can choose an email code, an authenticator app or a platform authenticator in their account settings. With MFA enabled, a correct password leads to a separate confirmation step. The customer can go back and start again; access to the account waits until verification succeeds.",
          detail: {
            topic: "Pending login and session boundaries",
            mechanism:
              "Pending login credentials stay in React memory. The pending token cannot access account endpoints or refresh a session. A login challenge expires after five minutes and allows five failed attempts. Verification locks and consumes the challenge in a database transaction before issuing the session.",
            constraint:
              "WebAuthn uses a compatible platform authenticator after the password. Refresh sessions have no server-side revocation registry, and request throttling is local to one backend instance.",
          },
        },
      ],
    },
    pl: {
      kind: "Aplikacja webowa full-stack",
      tagline: "Zakupy spożywcze, od koszyka do zamówienia.",
      summary:
        "Sklep spożywczy po polsku i angielsku. Klienci kompletują koszyk i wracają do zapisanych zamówień, a obsługa zarządza katalogiem i danymi zamówień. React i NestJS.",
      alt: "Angielski katalog owoców w Zielonym Koszyku z filtrami kategorii i ceny, wyszukiwarką, wyborem ilości i przyciskami dodania do koszyka.",
      intro: "Zamówienie z perspektywy klienta i obsługi.",
      overview:
        "W Zielonym Koszyku połączyłem wybór produktów z późniejszą obsługą zamówienia. Klient robi zakupy po polsku lub angielsku, korzysta z zapisanych adresów i wraca do swoich zamówień oraz faktur. Obsługa pracuje na tych samych produktach i zamówieniach w panelu administracyjnym. To projekt osobisty, bez bramki płatności i wdrożenia komercyjnego.",
      sections: [
        {
          title: "Jeden katalog w dwóch językach.",
          text: "Wyszukiwarka, kategorie i filtry ceny pomagają znaleźć produkty w wybranym języku. Filtry zostają w adresie strony, a koszyk przetrwa jej odświeżenie. Obsługa edytuje polskie i angielskie nazwy oraz opisy w jednym formularzu. Cena i stan magazynowy są wspólne dla obu wersji produktu.",
          detail: {
            topic: "Tłumaczenia i wspólne dane produktu",
            mechanism:
              "Frontend w React i TypeScript pobiera dane przez RTK Query. Język jest częścią klucza pamięci podręcznej i trafia do NestJS w nagłówku Accept-Language. PostgreSQL przechowuje tłumaczenia osobno od ceny i stanu magazynowego. Wyszukiwanie i sortowanie po nazwie korzystają z wybranego tłumaczenia. Redux Persist zachowuje tylko koszyk.",
            constraint:
              "Jeśli brakuje tłumaczenia, aplikacja używa polskiego tekstu. Panel rozróżnia role użytkowników, ale część endpointów zarządzania wymaga jeszcze sprawdzania roli i dostępu do konkretnych danych po stronie serwera przed użyciem komercyjnym.",
          },
        },
        {
          title: "Do zamówienia można wrócić.",
          text: "Przy składaniu zamówienia klient korzysta z zapisanych adresów. Później na koncie widzi produkty, koszt dostawy i bieżący status oraz może pobrać fakturę PDF. Obsługa otwiera to samo zamówienie, żeby sprawdzić jego dane lub zmienić szczegóły i status.",
          detail: {
            topic: "Zapis zamówienia i jego języka",
            mechanism:
              "TypeORM zapisuje adresy, pozycje zamówienia i zmniejszenie zapasu w jednej transakcji PostgreSQL. Zamówienie zachowuje język wybrany przy zakupie i kopię nazw produktów. Późniejsza edycja katalogu nie zmienia tych nazw. Generowanie faktury i szablon e-maila z potwierdzeniem korzystają z zapisanego języka po zatwierdzeniu transakcji.",
            constraint:
              "Ceny nadal pochodzą z danych przesłanych przy zakupie, a sprawdzenie zapasu nie blokuje wierszy produktów. Faktura powstaje po zapisaniu zamówienia; późniejsza edycja przez obsługę nie generuje jej ponownie. Te ograniczenia trzeba usunąć przed przyjmowaniem rzeczywistych zamówień.",
          },
        },
        {
          title: "Dodatkowy krok logowania ma jasny cel.",
          text: "W ustawieniach konta klient może wybrać kod z e-maila, aplikację uwierzytelniającą lub uwierzytelniacz urządzenia. Przy włączonym MFA poprawne hasło prowadzi do osobnego ekranu potwierdzenia. Można wrócić i zacząć od nowa, a dostęp do konta pojawia się dopiero po poprawnej weryfikacji.",
          detail: {
            topic: "Oczekujące logowanie i dostęp do sesji",
            mechanism:
              "Dane oczekującego logowania pozostają w pamięci Reacta. Token tego etapu nie pozwala korzystać z endpointów konta ani odświeżyć sesji. Weryfikacja wygasa po pięciu minutach i dopuszcza pięć błędnych prób. Serwer blokuje rekord weryfikacji w transakcji bazy danych i oznacza go jako wykorzystany, zanim wyda sesję.",
            constraint:
              "WebAuthn działa po podaniu hasła i wymaga zgodnego uwierzytelniacza urządzenia. Serwer nie prowadzi rejestru unieważnionych sesji refresh, a ograniczanie liczby żądań działa w pamięci jednej instancji backendu.",
          },
        },
      ],
    },
  },
} as const;
export type ProjectSlug = keyof typeof projects;
export const projectOrder = [
  "random-frame",
  "kajtek",
  "zielony-koszyk",
] as const satisfies readonly ProjectSlug[];
