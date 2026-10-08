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
      tagline: "An online grocery store, back office included.",
      summary:
        "An online grocery store with checkout, customer accounts and an admin panel for products, orders and users. Built with React, NestJS and PostgreSQL, with stock-aware checkout, PDF invoices and MFA.",
      alt: "Zielony Koszyk’s English homepage: a carousel slide of red apples headed Daily deliveries, with Browse products and About us buttons, above notes on local delivery, organic farms and wholesale prices.",
      intro: "The parts a customer never sees.",
      overview:
        "Zielony Koszyk is an online grocery store with an admin panel behind it. Customers check out and keep their addresses, orders and invoices in an account; staff manage products, orders and users. I built both the React frontend and the NestJS backend. Most of the work went into checkout, where the server has the final word on price and stock, and into login with a second factor. It is a personal project, without payments or a commercial launch.",
      sections: [
        {
          title: "One catalogue, both sides of the counter.",
          text: "Customers browse, search and filter the catalogue. Staff edit the same products in the admin panel, where price, stock and category sit next to the Polish and English names and descriptions. The endpoints for managing products check the admin role on the server, whatever the interface shows.",
          detail: {
            topic: "Products, translations and admin access",
            mechanism:
              "Translations live in their own table, keyed by product ID and language. RTK Query adds the language to its cache key and sends it as Accept-Language. NestJS joins the matching translation, falling back to Polish, and search and name sorting use that text. Adding, editing and deleting products requires a signed-in admin.",
            constraint:
              "If the English translation is missing, the product stays visible with Polish text in the English catalogue. A third language would mean extending the supported locales and translating every product.",
          },
        },
        {
          title: "The last apple can only be sold once.",
          text: "Prices in the browser’s basket are only for display. At checkout, the server locks the product rows, reads current prices and checks stock, then saves the order and the stock change in one transaction. When two customers buy the last unit at the same moment, one order goes through and the other gets a conflict. If any line is unavailable, nothing is saved.",
          detail: {
            topic: "Row locks and the saved order",
            mechanism:
              "TypeORM takes write locks on products in ID order, so two checkouts with the same products cannot deadlock. Quantities must be positive whole numbers. The order keeps a copy of each product name and price in the customer’s language, so later catalogue edits leave past orders alone. The invoice and confirmation email use that saved language too.",
            constraint:
              "The PDF invoice and email are produced after the commit. If they fail, the order stays saved; reliable retries would need a stored delivery job. Staff can amend an order later, but that does not regenerate the original PDF.",
          },
        },
        {
          title: "A password is not a session yet.",
          explanation: "auth",
          text: "With MFA turned on, the right password only starts the login. The user still confirms it with an emailed code, an authenticator app (TOTP) or WebAuthn, and each confirmation can open only one session. Until then, account endpoints reject the pending token.",
          detail: {
            topic: "Pending login and full session",
            mechanism:
              "React keeps the pending login in memory only. The MFA token points to a stored challenge for one user and method; it cannot read account data or refresh a session. Verification locks the challenge row in a transaction and deletes it on success. TOTP also remembers the last accepted time step, and WebAuthn checks the origin and requires user verification.",
            constraint:
              "WebAuthn is a second factor after the password. Refresh tokens have no server-side revocation list, and rate limits are counted per backend instance; running several instances would need shared storage for them.",
          },
        },
      ],
    },
    pl: {
      kind: "Aplikacja webowa full-stack",
      tagline: "Sklep spożywczy online razem z zapleczem.",
      summary:
        "Sklep spożywczy online z koszykiem, kontami klientów i panelem do zarządzania produktami, zamówieniami i użytkownikami. React, NestJS i PostgreSQL obsługują checkout ze stanami magazynowymi, faktury PDF i MFA.",
      alt: "Angielska strona główna Zielonego Koszyka: slajd karuzeli z jabłkami i nagłówkiem Daily deliveries, przyciski Browse products i About us oraz informacje o lokalnej dostawie, ekologicznych gospodarstwach i cenach hurtowych.",
      intro: "Czego klient nie widzi.",
      overview:
        "Zielony Koszyk to sklep spożywczy online z panelem administracyjnym. Klient ma konto z adresami, historią zamówień i fakturami. Pracownicy sklepu zarządzają w panelu produktami, zamówieniami i użytkownikami. Napisałem frontend w React i backend w NestJS. Najwięcej pracy wymagały składanie zamówień, przy którym o cenie i dostępności decyduje serwer, oraz logowanie dwuskładnikowe. To mój własny projekt: nie ma płatności online i nie został uruchomiony komercyjnie.",
      sections: [
        {
          title: "Ten sam katalog po obu stronach lady.",
          text: "Klienci przeglądają, wyszukują i filtrują produkty, a pracownicy sklepu edytują te same produkty w panelu administracyjnym. Cena, stan magazynowy i kategoria są zapisane przy produkcie, obok polskiej i angielskiej nazwy oraz opisu. Endpointy do zarządzania produktami sprawdzają rolę administratora na serwerze, niezależnie od tego, co pokazuje interfejs.",
          detail: {
            topic: "Produkty, tłumaczenia i uprawnienia",
            mechanism:
              "Tłumaczenia są w osobnej tabeli, z kluczem złożonym z ID produktu i języka. RTK Query dodaje język do klucza cache i wysyła go w nagłówku Accept-Language. NestJS dołącza pasujące tłumaczenie, a gdy go brakuje, bierze polskie. Wyszukiwanie i sortowanie po nazwie korzystają z tego tekstu. Dodawanie, edycja i usuwanie produktów wymagają zalogowanego administratora.",
            constraint:
              "Jeśli brakuje angielskiego tłumaczenia, produkt nadal jest widoczny, ale w angielskim katalogu ma polski tekst. Trzeci język wymagałby rozszerzenia listy obsługiwanych języków i przetłumaczenia wszystkich produktów.",
          },
        },
        {
          title: "Ostatnie jabłko można sprzedać tylko raz.",
          text: "Ceny w koszyku po stronie przeglądarki są tylko poglądowe. Przy składaniu zamówienia serwer blokuje wiersze produktów, pobiera aktualne ceny i sprawdza stany magazynowe, a potem w jednej transakcji zapisuje zamówienie i zmniejsza stan. Gdy dwie osoby kupują ostatnią sztukę w tym samym momencie, jedno zamówienie przechodzi, a drugie kończy się konfliktem. Jeśli brakuje którejkolwiek pozycji, nic się nie zapisuje.",
          detail: {
            topic: "Blokady wierszy i zapisane zamówienie",
            mechanism:
              "TypeORM zakłada blokady zapisu na wiersze produktów w kolejności ich ID, żeby dwa zamówienia z tymi samymi produktami nie wpadły w deadlock. Ilości muszą być dodatnimi liczbami całkowitymi. Zamówienie przechowuje kopię nazwy i ceny każdego produktu w języku klienta, więc późniejsze zmiany w katalogu nie ruszają starych zamówień. Faktura i e-mail z potwierdzeniem też są w tym języku.",
            constraint:
              "Faktura PDF i e-mail powstają po zatwierdzeniu transakcji. Jeśli coś się przy tym nie uda, zamówienie i tak zostaje zapisane. Żeby to pewnie ponawiać, trzeba by zapisywać zadania wysyłki. Pracownik sklepu może później poprawić zamówienie, ale pierwotna faktura PDF nie jest wtedy generowana od nowa.",
          },
        },
        {
          title: "Poprawne hasło to jeszcze nie sesja.",
          explanation: "auth",
          text: "Przy włączonym MFA poprawne hasło tylko rozpoczyna logowanie. Trzeba je jeszcze potwierdzić kodem z e-maila, aplikacją uwierzytelniającą (TOTP) albo przez WebAuthn, a jedno potwierdzenie otwiera najwyżej jedną sesję. Do tego czasu endpointy konta odrzucają tymczasowy token.",
          detail: {
            topic: "Niedokończone logowanie i pełna sesja",
            mechanism:
              "React trzyma dane rozpoczętego logowania tylko w pamięci. Token MFA wskazuje zapisane wyzwanie dla konkretnego użytkownika i metody. Nie daje dostępu do danych konta ani do odświeżenia sesji. Weryfikacja blokuje wiersz z wyzwaniem w transakcji, a po udanej weryfikacji go usuwa. TOTP zapamiętuje też ostatni zaakceptowany krok czasowy, a WebAuthn sprawdza origin i wymaga weryfikacji użytkownika.",
            constraint:
              "WebAuthn jest tu drugim składnikiem po haśle. Serwer nie ma listy unieważnionych refresh tokenów, a limity żądań są liczone osobno w każdej instancji backendu. Przy kilku instancjach liczniki trzeba by trzymać we wspólnym miejscu.",
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
