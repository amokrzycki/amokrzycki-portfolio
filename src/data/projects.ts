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
      tagline: "From mutable catalogue to durable order.",
      summary:
        "A grocery application in Polish and English. Shared product data, order snapshots and the boundary between a pending MFA login and an authenticated session. React, NestJS and PostgreSQL.",
      alt: "Zielony Koszyk’s English fruit catalogue with category and price filters, search, quantities and Add to cart controls.",
      intro: "Deciding what the server can trust.",
      overview:
        "I built a grocery application in Polish and English with React and NestJS. The catalogue can change; an order has to keep the data captured at checkout. Login has a similar boundary: accepting a password can still leave login pending. These decisions connect the interface to what the backend can store and authorize. This is a personal project without payment processing or a commercial launch.",
      sections: [
        {
          title: "One product, multiple representations.",
          text: "Polish and English names describe the same product. I store translations separately from its identity, price, category and stock. The active language follows the request through the frontend cache and API to the database, so switching language changes the text while keeping the same product.",
          detail: {
            topic: "Locale across cache, API and storage",
            mechanism:
              "RTK Query includes locale in the cache key and sends that value in Accept-Language. NestJS resolves it to Polish or English. PostgreSQL joins the requested product translation with the shared product; search and name sorting use that text, with a Polish fallback. The editor updates both translations under one product ID.",
            constraint:
              "Polish is the default and fallback language. A missing English translation keeps the product visible, but can put Polish text in an English catalogue. Adding a language also requires extending the supported locales and supplying product translations.",
          },
        },
        {
          title: "The order outlives the catalogue.",
          text: "The catalogue can change while a basket is open. At checkout, the backend reads current prices and reduces stock in the transaction that saves the order. It copies product names and prices into the order and keeps its language. Later catalogue edits do not rewrite what the customer bought.",
          detail: {
            topic: "A transaction, then a historical record",
            mechanism:
              "TypeORM locks product rows in ID order before checking stock. Prices come from those records, regardless of the checkout payload. Addresses, name and price snapshots, and stock deductions commit together in PostgreSQL; an unavailable line rolls them all back. The invoice and confirmation email use the saved order’s locale, even if a later request uses another language.",
            constraint:
              "Invoice files and email are produced after commit. Their failure leaves the order saved; reliable retries would need a persisted delivery job. Staff can amend an order, but those amendments do not regenerate the original PDF.",
          },
        },
        {
          title: "A password is not a session yet.",
          explanation: "auth",
          text: "With MFA enabled, accepting a password starts a pending login. Email OTP, TOTP and WebAuthn share that boundary: verify the selected method, consume the challenge once, then issue a normal session. The backend rejects pending credentials at account endpoints.",
          detail: {
            topic: "Verification and access are separate",
            mechanism:
              "React keeps pending login data in memory. The MFA token ties a user and method to a stored login challenge; it cannot access the account or refresh a session. Verification locks that challenge in a transaction. TOTP also records the accepted time step; WebAuthn checks the origin and requires user verification. Normal access still requires an owner or admin check.",
            constraint:
              "WebAuthn is a second factor after the password. Refresh tokens have no server-side revocation registry, and request throttling lives in one backend instance; multiple instances would need shared rate-limit storage.",
          },
        },
      ],
    },
    pl: {
      kind: "Aplikacja webowa full-stack",
      tagline: "Katalog się zmienia. Zamówienie zachowuje dane.",
      summary:
        "Sklep spożywczy po polsku i angielsku. Wspólne dane produktów, zapis danych zakupu i granica między oczekującą weryfikacją MFA a pełną sesją. React, NestJS i PostgreSQL.",
      alt: "Angielski katalog owoców w Zielonym Koszyku z filtrami kategorii i ceny, wyszukiwarką, wyborem ilości i przyciskami dodania do koszyka.",
      intro: "Dane, którym może zaufać serwer.",
      overview:
        "Zbudowałem sklep spożywczy po polsku i angielsku w React i NestJS. Katalog może się zmieniać, ale zamówienie musi zachować dane z chwili zakupu. Podobna granica istnieje przy logowaniu: poprawne hasło może jeszcze nie dawać pełnej sesji. Te decyzje łączą interfejs z tym, co backend zapisuje i do czego udziela dostępu. To projekt osobisty, bez obsługi płatności i wdrożenia komercyjnego.",
      sections: [
        {
          title: "Jeden produkt, różne wersje językowe.",
          text: "Polska i angielska nazwa opisują ten sam produkt. Tłumaczenia przechowuję osobno od jego identyfikatora, ceny, kategorii i zapasu. Język przechodzi przez pamięć podręczną frontendu i API aż do bazy danych. Zmiana języka zmienia tekst, a produkt pozostaje ten sam.",
          detail: {
            topic: "Język w pamięci podręcznej, API i bazie",
            mechanism:
              "RTK Query uwzględnia język w kluczu pamięci podręcznej i wysyła tę samą wartość w Accept-Language. NestJS rozpoznaje polski lub angielski. PostgreSQL łączy wybrane tłumaczenie ze wspólnym rekordem produktu. Wyszukiwanie i sortowanie po nazwie korzystają z tego tekstu, z polskim tłumaczeniem jako fallbackiem. Edytor zapisuje oba tłumaczenia pod jednym ID produktu.",
            constraint:
              "Polski jest językiem domyślnym i zastępuje brakujące tłumaczenie. Produkt pozostaje widoczny, ale w angielskim katalogu może pojawić się polski tekst. Kolejny język wymaga rozszerzenia listy obsługiwanych języków i uzupełnienia tłumaczeń produktów.",
          },
        },
        {
          title: "Zmiany katalogu nie zmieniają historii zakupu.",
          text: "Katalog może się zmienić, gdy klient ma już produkty w koszyku. Przy zakupie backend odczytuje aktualne ceny i zmniejsza zapas w transakcji zapisującej zamówienie. Zapisuje w nim kopię nazw i cen produktów oraz język zakupu. Późniejsza edycja katalogu nie zmienia tych danych.",
          detail: {
            topic: "Transakcja i zapis danych zakupu",
            mechanism:
              "TypeORM blokuje wiersze produktów w kolejności ich ID przed sprawdzeniem zapasu. Ceny pochodzą z tych rekordów, niezależnie od danych przesłanych przez klienta. Adresy, kopie nazw i cen oraz zmniejszenie zapasu zapisują się razem w PostgreSQL. Brak jednej pozycji wycofuje całą transakcję. Faktura i e-mail z potwierdzeniem korzystają z języka zapisanego zamówienia, nawet gdy późniejsze żądanie ma inny język.",
            constraint:
              "Plik faktury i e-mail powstają po zatwierdzeniu transakcji. Ich błąd nie cofa zamówienia; niezawodne ponawianie wymagałoby trwałego zapisu zadania wysyłki. Obsługa może poprawić zamówienie, ale te zmiany nie generują ponownie pierwotnej faktury PDF.",
          },
        },
        {
          title: "Poprawne hasło to jeszcze nie sesja.",
          explanation: "auth",
          text: "Przy włączonym MFA poprawne hasło rozpoczyna oczekujące logowanie. Kod z e-maila, TOTP i WebAuthn korzystają z tej samej granicy: sprawdzenie wybranej metody, jednorazowe wykorzystanie rekordu weryfikacji i dopiero potem wydanie pełnej sesji. Backend odrzuca dane oczekującego logowania przy dostępie do konta.",
          detail: {
            topic: "Weryfikacja i dostęp to osobne etapy",
            mechanism:
              "React trzyma dane oczekującego logowania w pamięci. Token MFA wiąże użytkownika i metodę z zapisanym rekordem weryfikacji; nie pozwala korzystać z konta ani odświeżyć sesji. Weryfikacja blokuje ten rekord w transakcji. TOTP zapisuje też wykorzystany krok czasowy, a WebAuthn sprawdza origin i wymaga weryfikacji użytkownika. Pełna sesja nadal wymaga sprawdzenia właściciela danych lub roli administratora.",
            constraint:
              "WebAuthn jest drugim składnikiem po haśle. Serwer nie prowadzi rejestru unieważnionych tokenów refresh, a ograniczanie żądań działa w jednej instancji backendu. Kilka instancji wymagałoby wspólnego magazynu limitów.",
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
