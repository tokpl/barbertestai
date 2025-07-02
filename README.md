# Barber Studio - Wizytówka dla Barbera

Nowoczesna wizytówka internetowa dla profesjonalnego salonu fryzjerskiego/barbera. Projekt został stworzony w Next.js z TypeScript i Tailwind CSS.

## 🚀 Funkcjonalności

### Strony
- **Home** - Strona główna z hero section, usługami, galerią przed/po, cenami, godzinami otwarcia i procesem obsługi
- **O Nas** - Historia firmy, zespół, filozofia, studio i osiągnięcia
- **Galeria** - Interaktywna galeria z filtrowaniem kategorii i komponentami przed/po
- **Terminarz** - Rezerwacja wizyt online z wyborem usług, dat i godzin
- **Kontakt** - Informacje kontaktowe i formularz

### Komponenty
- **Navigation** - Responsywna nawigacja z menu mobilnym
- **Footer** - Stopka z linkami i informacjami kontaktowymi
- **BeforeAfterSlider** - Interaktywny suwak do prezentacji efektów przed/po

### Funkcjonalności techniczne
- ✅ Responsywny design (mobile-first)
- ✅ Interaktywne filtry galerii
- ✅ Formularz rezerwacji z walidacją
- ✅ Smooth scrolling i animacje
- ✅ Dostępność (accessibility)
- ✅ SEO-friendly

## 🎨 Design

### Kolorystyka
- **Główny**: Ciemne tło (gray-900, gray-800, black)
- **Akcent**: Złoty/żółty (#FCD34D - yellow-400)
- **Tekst**: Biały i odcienie szarości

### Style
- Nowoczesny, minimalistyczny design
- Gradient backgrounds
- Glassmorphism effects (backdrop-blur)
- Smooth transitions i hover effects

## 🛠️ Technologie

- **Framework**: Next.js 15 (App Router)
- **Język**: TypeScript
- **Stylowanie**: Tailwind CSS
- **Icons**: Heroicons (SVG)
- **Fonty**: Geist Sans, Geist Mono

## 📦 Instalacja i uruchomienie

```bash
# Klonowanie repozytorium
git clone [repository-url]

# Przejście do katalogu projektu
cd asdasdasd

# Instalacja zależności
pnpm install

# Uruchomienie serwera deweloperskiego
pnpm dev
```

Aplikacja będzie dostępna pod adresem `http://localhost:3000`

## 📝 Struktura projektu

```
src/
├── app/                    # App Router pages
│   ├── galeria/           # Strona galerii
│   ├── kontakt/           # Strona kontaktu
│   ├── o-nas/             # Strona o nas
│   ├── terminarz/         # Strona rezerwacji
│   ├── globals.css        # Globalne style
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Strona główna
├── components/            # Komponenty React
│   ├── BeforeAfterSlider.tsx
│   ├── Footer.tsx
│   └── Navigation.tsx
└── .github/
    └── copilot-instructions.md
```

## 🎯 Funkcjonalności użytkownika

### Strona główna
- Hero section z call-to-action
- Prezentacja usług z ikonami
- Galeria "przed/po" z suwakami
- Cennik usług
- Godziny otwarcia
- Opis procesu obsługi

### Galeria
- Filtrowanie po kategoriach (Wszystkie, Strzyżenia, Golenie, Brody)
- Animowane przejścia między kategoriami
- Komponenty przed/po z interaktywnymi suwakami
- Opinie klientów

### Terminarz
- Wybór usług (interaktywne karty)
- Formularz rezerwacji z walidacją
- Wybór daty i godziny
- Symulacja procesu rezerwacji
- Godziny otwarcia

### O Nas
- Historia firmy
- Prezentacja zespołu
- Filozofia pracy
- Galeria studia
- Osiągnięcia i certyfikaty

## 📱 Responsywność

Projekt został zaprojektowany z podejściem mobile-first:
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Large Desktop: 1280px+

## 🔧 Customizacja

### Zmiana kolorów
Edytuj zmienne w `tailwind.config.ts` lub użyj klas Tailwind:
- Główny akcent: `yellow-400`
- Tło: `gray-900`, `gray-800`
- Tekst: `white`, `gray-300`, `gray-400`

### Dodawanie nowych usług
Edytuj tablicę `services` w `src/app/terminarz/page.tsx`

### Modyfikacja galerii
Dodaj nowe elementy do `galleryItems` w `src/app/galeria/page.tsx`

## 📄 Licencja

Projekt stworzony dla celów edukacyjnych i prezentacyjnych.

## 🤝 Wsparcie

W przypadku pytań lub problemów, skontaktuj się z deweloperem.
