'use client';

import { useState } from 'react';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

export default function Galeria() {
  const [activeCategory, setActiveCategory] = useState('Wszystkie');
  
  const categories = ['Wszystkie', 'Strzyżenia', 'Golenie', 'Brody'];
  
  const galleryItems = [
    { id: 1, category: 'Strzyżenia', title: 'Klasyczne strzyżenie', description: 'Elegancki męski styl' },
    { id: 2, category: 'Brody', title: 'Stylizacja brody', description: 'Precyzyjna stylizacja' },
    { id: 3, category: 'Golenie', title: 'Golenie brzytwą', description: 'Tradycyjne golenie' },
    { id: 4, category: 'Strzyżenia', title: 'Nowoczesny fade', description: 'Modny gradient' },
    { id: 5, category: 'Brody', title: 'Przycinanie brody', description: 'Perfekcyjny kształt' },
    { id: 6, category: 'Golenie', title: 'Pełna obsługa', description: 'Kompletny pakiet' },
    { id: 7, category: 'Strzyżenia', title: 'Undercut', description: 'Ostry styl' },
    { id: 8, category: 'Brody', title: 'Broda z wąsem', description: 'Klasyczny look' },
    // Dodajemy więcej elementów dla różnorodności
    { id: 9, category: 'Strzyżenia', title: 'Buzz cut', description: 'Bardzo krótko' },
    { id: 10, category: 'Golenie', title: 'Gorący kompres', description: 'Relaksujące golenie' },
    { id: 11, category: 'Brody', title: 'Pełna broda', description: 'Gęsta stylizacja' },
    { id: 12, category: 'Strzyżenia', title: 'Pompadour', description: 'Retro elegancja' },
    { id: 13, category: 'Golenie', title: 'Precyzyjne golenie', description: 'Idealna gładkość' },
    { id: 14, category: 'Brody', title: 'Krótka broda', description: 'Minimalistyczny styl' },
    { id: 15, category: 'Strzyżenia', title: 'Crew cut', description: 'Sportowy look' },
    { id: 16, category: 'Golenie', title: 'Stylizacja wąsów', description: 'Artystyczne wykończenie' },
  ];

  const filteredItems = activeCategory === 'Wszystkie' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-24">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Nasza <span className="text-yellow-400">Galeria</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Zobacz efekty naszej pracy. Każde zdjęcie to dowód na to, 
              że dbamy o każdy szczegół i zadowolenie naszych klientów.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button 
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                  activeCategory === category
                    ? 'bg-yellow-400 text-black'
                    : 'border border-gray-600 text-gray-300 hover:border-yellow-400 hover:text-yellow-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Items */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className="group relative overflow-hidden rounded-lg bg-gray-800 aspect-square animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{item.category}</span>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                    <button className="bg-yellow-400 text-black px-4 py-2 rounded text-sm font-semibold hover:bg-yellow-300 transition-colors">
                      Zobacz więcej
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Results count */}
          <div className="text-center mt-8">
            <p className="text-gray-400">
              Pokazano {filteredItems.length} {filteredItems.length === 1 ? 'element' : 'elementów'} 
              {activeCategory !== 'Wszystkie' && ` z kategorii "${activeCategory}"`}
            </p>
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="border border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-colors">
              Załaduj więcej zdjęć
            </button>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Efekty <span className="text-yellow-400">Przed i Po</span>
          </h2>
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
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Co mówią nasi <span className="text-yellow-400">Klienci</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-black font-bold">MK</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Michał Kowalski</h4>
                  <div className="flex text-yellow-400">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                &ldquo;Najlepszy barber w mieście! Profesjonalne podejście, świetna atmosfera i perfekcyjne efekty. Polecam każdemu!&rdquo;
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-black font-bold">PN</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Piotr Nowicki</h4>
                  <div className="flex text-yellow-400">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                &ldquo;Rewelacyjna obsługa i niesamowite umiejętności. Wreszcie znalazłem swojego barbera!&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
