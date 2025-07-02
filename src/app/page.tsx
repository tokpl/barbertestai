import Link from 'next/link';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              <span className="text-yellow-400">Profesjonalny</span> Barber Studio
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Najwyższej jakości usługi fryzjerskie dla wymagających mężczyzn. 
              Tradycyjne techniki połączone z nowoczesnym stylem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/terminarz" className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors text-center">
                Umów wizytę
              </Link>
              <Link href="/galeria" className="border border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-colors text-center">
                Zobacz usługi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Nasze <span className="text-yellow-400">Usługi</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Strzyżenie klasyczne</h3>
              <p className="text-gray-400">Tradycyjne techniki strzyżenia dostosowane do Twoich potrzeb</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Golenie brzytwą</h3>
              <p className="text-gray-400">Klasyczne golenie brzytwą z gorącym komresem</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Stylizacja brody</h3>
              <p className="text-gray-400">Profesjonalne przycinanie i stylizacja zarostu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Gotowy na <span className="text-yellow-400">przemianę</span>?
          </h2>
          <p className="text-gray-300 mb-8">
            Skontaktuj się z nami i umów wizytę już dziś
          </p>
          <Link href="tel:+48123456789" className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors inline-block">
            Zadzwoń teraz: +48 123 456 789
          </Link>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Nasze <span className="text-yellow-400">Ceny</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Strzyżenie klasyczne</h3>
              <div className="text-2xl font-bold text-yellow-400 mb-2">45 zł</div>
              <p className="text-gray-400 text-sm">Profesjonalne strzyżenie dopasowane do Twojego stylu</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Golenie brzytwą</h3>
              <div className="text-2xl font-bold text-yellow-400 mb-2">35 zł</div>
              <p className="text-gray-400 text-sm">Tradycyjne golenie z gorącym kompresem</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Stylizacja brody</h3>
              <div className="text-2xl font-bold text-yellow-400 mb-2">30 zł</div>
              <p className="text-gray-400 text-sm">Modelowanie i pielęgnacja zarostu</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 text-center border-yellow-400">
              <h3 className="text-lg font-semibold text-white mb-2">Pakiet kompletny</h3>
              <div className="text-2xl font-bold text-yellow-400 mb-2">90 zł</div>
              <p className="text-gray-400 text-sm">Strzyżenie + golenie + stylizacja</p>
              <div className="text-yellow-400 text-sm mt-2">Oszczędzasz 20 zł!</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Nasze <span className="text-yellow-400">Przemiany</span>
            </h2>
            <p className="text-gray-300">Zobacz efekty przed i po naszej pracy</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BeforeAfterSlider
              title="Klasyczna przemiana"
              description="Od długich włosów do eleganckiego stylu biznesowego"
            />
            <BeforeAfterSlider
              title="Stylizacja brody"
              description="Perfekcyjne ukształtowanie i stylizacja zarostu"
            />
            <BeforeAfterSlider
              title="Nowoczesny fade"
              description="Precyzyjny gradient od długiego do bardzo krótkiego"
            />
            <BeforeAfterSlider
              title="Kompletna obsługa"
              description="Strzyżenie + golenie + stylizacja brody"
            />
            <BeforeAfterSlider
              title="Retro pompadour"
              description="Klasyczny styl w nowoczesnej interpretacji"
            />
            <BeforeAfterSlider
              title="Undercut z brodą"
              description="Odważny styl z precyzyjnie wymodelowaną brodą"
            />
          </div>
          <div className="text-center mt-8">
            <Link href="/galeria" className="border border-yellow-400 text-yellow-400 px-6 py-2 rounded-lg hover:bg-yellow-400 hover:text-black transition-colors inline-block">
              Zobacz pełną galerię
            </Link>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Godziny <span className="text-yellow-400">Otwarcia</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Dni robocze</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Poniedziałek - Piątek</span>
                  <span className="text-yellow-400">9:00 - 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sobota</span>
                  <span className="text-yellow-400">9:00 - 17:00</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Weekend</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Niedziela</span>
                  <span className="text-red-400">Zamknięte</span>
                </div>
                <div className="text-sm text-gray-400 mt-4">
                  * Możliwość umówienia wizyty poza godzinami po wcześniejszym kontakcie
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/terminarz" className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors inline-block">
              Umów wizytę online
            </Link>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Nasze <span className="text-yellow-400">Podejście</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Wierzymy, że każdy klient zasługuje na indywidualne podejście i najwyższą jakość usług
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Konsultacja</h3>
              <p className="text-gray-400 text-sm">Dokładnie poznajemy Twoje oczekiwania i potrzeby</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Stylizacja</h3>
              <p className="text-gray-400 text-sm">Dobieramy styl idealnie pasujący do Twojej osobowości</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Precyzja</h3>
              <p className="text-gray-400 text-sm">Każdy ruch jest przemyślany i wykonany z najwyższą precyzją</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Zadowolenie</h3>
              <p className="text-gray-400 text-sm">Twoja satysfakcja to nasz priorytet i cel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Jak wygląda <span className="text-yellow-400">wizyta</span>?
            </h2>
            <p className="text-gray-300">Poznaj nasz proces obsługi krok po kroku</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-black font-bold text-2xl">1</span>
                </div>
                <div className="absolute top-10 left-1/2 transform translate-x-8 hidden md:block">
                  <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Powitanie i konsultacja</h3>
              <p className="text-gray-400">Omawiamy Twoje oczekiwania, analizujemy typ włosów i kształt twarzy</p>
            </div>
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-black font-bold text-2xl">2</span>
                </div>
                <div className="absolute top-10 left-1/2 transform translate-x-8 hidden md:block">
                  <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Realizacja usługi</h3>
              <p className="text-gray-400">Profesjonalne wykonanie usługi z dbałością o każdy szczegół</p>
            </div>
            <div className="text-center">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-black font-bold text-2xl">3</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Finalne wykończenie</h3>
              <p className="text-gray-400">Stylizacja, porady pielęgnacyjne i prezentacja finalnego efektu</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
