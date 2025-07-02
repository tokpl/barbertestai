export default function ONas() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-24">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              O <span className="text-yellow-400">Nas</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Poznaj historię naszego salonu i zespół profesjonalistów, 
              którzy dbają o Twój wygląd z pasją i zaangażowaniem.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Nasza <span className="text-yellow-400">Historia</span>
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Barber Studio powstało z pasji do tradycyjnego rzemiosła fryzjerskiego. 
                Od ponad 10 lat świadczymy usługi na najwyższym poziomie, łącząc 
                klasyczne techniki z nowoczesnymi trendami.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Nasz zespół to doświadczeni mistrzowie swojego fachu, którzy każdy dzień 
                poświęcają na doskonalenie swoich umiejętności i poznawanie najnowszych 
                technik stylizacji.
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">10+</div>
                  <div className="text-sm text-gray-400">Lat doświadczenia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">5000+</div>
                  <div className="text-sm text-gray-400">Zadowolonych klientów</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">100%</div>
                  <div className="text-sm text-gray-400">Profesjonalizm</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Nasja Filozofia</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Jakość bez kompromisów</h4>
                    <p className="text-gray-400 text-sm">Używamy tylko najlepszych produktów i narzędzi</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Indywidualne podejście</h4>
                    <p className="text-gray-400 text-sm">Każdy klient jest dla nas wyjątkowy</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Tradycja i nowoczesność</h4>
                    <p className="text-gray-400 text-sm">Łączymy klasyczne techniki z nowymi trendami</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Nasz <span className="text-yellow-400">Zespół</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-black font-bold text-2xl">MS</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Marek Styliński</h3>
              <p className="text-yellow-400 mb-2">Właściciel & Master Barber</p>
              <p className="text-gray-400 text-sm">
                15 lat doświadczenia w branży fryzjerskiej. Specjalista od klasycznych strzyżeń męskich.
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-black font-bold text-2xl">AK</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Adam Kowalski</h3>
              <p className="text-yellow-400 mb-2">Senior Barber</p>
              <p className="text-gray-400 text-sm">
                Mistrz golenia brzytwą i stylizacji brody. Laureat konkursów fryzjerskich.
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-black font-bold text-2xl">PN</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Piotr Nowak</h3>
              <p className="text-yellow-400 mb-2">Stylist</p>
              <p className="text-gray-400 text-sm">
                Specjalista od nowoczesnych trendów i stylizacji. Zawsze na bieżąco z modą.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Nasze <span className="text-yellow-400">Studio</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Nowoczesne wnętrze łączące klasyczną elegancję z współczesnym komfortem
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Wnętrze stworzone z <span className="text-yellow-400">pasją</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Profesjonalne stanowiska</h4>
                    <p className="text-gray-400 text-sm">Każde stanowisko wyposażone w najlepsze narzędzia i kosmetyki</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Strefa relaksu</h4>
                    <p className="text-gray-400 text-sm">Komfortowy kącik z kawą i prasą dla oczekujących klientów</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Atmosfera vintage</h4>
                    <p className="text-gray-400 text-sm">Klasyczne wnętrze inspirowane tradycyjnymi barbershopami</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Muzyka i atmosfera</h4>
                    <p className="text-gray-400 text-sm">Starannie dobrana playlista tworząca relaksującą atmosferę</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-700 aspect-square rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Wnętrze studia</span>
                </div>
              </div>
              <div className="bg-gray-700 aspect-square rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Stanowisko pracy</span>
                </div>
              </div>
              <div className="bg-gray-700 aspect-square rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Strefa relaksu</span>
                </div>
              </div>
              <div className="bg-gray-700 aspect-square rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Narzędzia pracy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards and Certifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Nasze <span className="text-yellow-400">Osiągnięcia</span>
            </h2>
            <p className="text-gray-300">Jesteśmy dumni z naszych sukcesów i uznania branży</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Najlepszy Barber 2023</h3>
              <p className="text-gray-400 text-sm">Nagroda Warszawa</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Certyfikat jakości</h3>
              <p className="text-gray-400 text-sm">Izba Rzemiosła</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Top 5 Warszawa</h3>
              <p className="text-gray-400 text-sm">Ranking Google</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-lg">5.0</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Ocena klientów</h3>
              <p className="text-gray-400 text-sm">350+ opinii</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
