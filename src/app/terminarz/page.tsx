'use client';

import { useState } from 'react';

export default function Terminarz() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: ''
  });

  const services = [
    { id: 'classic-cut', name: 'Strzyżenie klasyczne', price: '45 zł', duration: '30 min' },
    { id: 'beard-trim', name: 'Stylizacja brody', price: '30 zł', duration: '20 min' },
    { id: 'razor-shave', name: 'Golenie brzytwą', price: '35 zł', duration: '25 min' },
    { id: 'cut-beard', name: 'Strzyżenie + broda', price: '65 zł', duration: '45 min' },
    { id: 'complete-package', name: 'Pakiet kompletny', price: '90 zł', duration: '60 min' },
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30', '18:00', '18:30'
  ];

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate booking process
    if (!selectedService || !selectedDate || !selectedTime || !formData.name || !formData.phone) {
      alert('Proszę wypełnić wszystkie wymagane pola.');
      return;
    }

    // Show success message
    const selectedServiceData = services.find(s => s.id === selectedService);
    alert(`Dziękujemy za rezerwację!

Szczegóły wizyty:
• Usługa: ${selectedServiceData?.name} (${selectedServiceData?.price})
• Data: ${selectedDate}
• Godzina: ${selectedTime}
• Klient: ${formData.name}

Skontaktujemy się z Tobą pod numerem ${formData.phone} w celu potwierdzenia wizyty.`);
    
    // Reset form
    setSelectedService('');
    setSelectedDate('');
    setSelectedTime('');
    setFormData({ name: '', phone: '', email: '', notes: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-24">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              <span className="text-yellow-400">Terminarz</span> & Rezerwacje
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Umów się na wizytę online i ciesz się profesjonalnymi usługami 
              w najlepszym terminie dla Ciebie.
            </p>
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Nasze <span className="text-yellow-400">Usługi</span> i Cennik
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service) => (
              <div 
                key={service.id} 
                className={`bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border cursor-pointer transition-all ${
                  selectedService === service.id 
                    ? 'border-yellow-400 bg-yellow-400/10' 
                    : 'border-gray-700 hover:border-yellow-400/50'
                }`}
                onClick={() => setSelectedService(service.id)}
              >
                <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-yellow-400 font-bold text-lg">{service.price}</span>
                  <span className="text-gray-400 text-sm">{service.duration}</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Profesjonalna usługa wykonana przez doświadczonych barberów
                </p>
                <div className={`w-full py-2 rounded-lg font-semibold text-center transition-colors ${
                  selectedService === service.id
                    ? 'bg-yellow-400 text-black'
                    : 'bg-transparent border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black'
                }`}>
                  {selectedService === service.id ? 'Wybrana usługa' : 'Wybierz usługę'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Umów <span className="text-yellow-400">Wizytę</span>
            </h2>
            <form onSubmit={handleBooking} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Imię i nazwisko *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                    placeholder="Twoje imię i nazwisko"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Telefon *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                    placeholder="+48 123 456 789"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                  placeholder="twoj@email.com"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Wybrana usługa *</label>
                <div className={`w-full p-3 bg-gray-700 border rounded-lg text-white ${
                  selectedService ? 'border-yellow-400' : 'border-gray-600'
                }`}>
                  {selectedService 
                    ? services.find(s => s.id === selectedService)?.name + ' - ' + services.find(s => s.id === selectedService)?.price
                    : 'Wybierz usługę powyżej'
                  }
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Wybierz datę *</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Wybierz godzinę *</label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    required
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                  >
                    <option value="">Wybierz godzinę</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Dodatkowe uwagi (opcjonalne)</label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                  placeholder="Jeśli masz jakieś specjalne życzenia lub uwagi..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors text-lg"
              >
                Zarezerwuj wizytę
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Working Hours */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Godziny <span className="text-yellow-400">Otwarcia</span>
          </h2>
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">Poniedziałek - Piątek</span>
                  <span className="text-yellow-400">9:00 - 19:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">Sobota</span>
                  <span className="text-yellow-400">9:00 - 17:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">Niedziela</span>
                  <span className="text-gray-400">Zamknięte</span>
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold mb-2">Ważne informacje:</h3>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Rezerwacja obowiązkowa</li>
                  <li>• Możliwość odwołania do 2h przed wizytą</li>
                  <li>• Przyjmujemy płatności gotówką i kartą</li>
                  <li>• Parking dostępny przed salonem</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
