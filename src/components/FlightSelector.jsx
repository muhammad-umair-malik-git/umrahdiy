import { useState, useEffect } from 'react';
import { flightData, cities } from '../data/mockData';

const FlightSelector = ({ onFlightSelect, passengerCounts }) => {
  const [outboundFlight, setOutboundFlight] = useState({
    origin: '',
    destination: '',
    departureDate: ''
  });
  
  const [returnFlight, setReturnFlight] = useState({
    origin: '',
    destination: '',
    departureDate: ''
  });

  const [availableFlights, setAvailableFlights] = useState({
    outbound: [],
    return: []
  });

  const [selectedFlights, setSelectedFlights] = useState({
    outbound: null,
    return: null
  });

  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    if (!outboundFlight.origin || !outboundFlight.destination || !outboundFlight.departureDate ||
        !returnFlight.origin || !returnFlight.destination || !returnFlight.departureDate) {
      alert('Please fill in all required flight details for both flights');
      return;
    }

    const outboundOptions = flightData.filter(f => 
      f.from === outboundFlight.origin && f.to === outboundFlight.destination
    );

    const returnOptions = flightData.filter(f => 
      f.from === returnFlight.origin && f.to === returnFlight.destination
    );

    setAvailableFlights({ outbound: outboundOptions, return: returnOptions });
    setShowResults(true);
  };

  const handleFlightSelection = (flight, type) => {
    const newSelection = { ...selectedFlights, [type]: flight };
    setSelectedFlights(newSelection);
    
    if (newSelection.outbound && newSelection.return) {
      onFlightSelect([newSelection.outbound, newSelection.return]);
    }
  };

  const originCities = cities.filter(city => ['AKL', 'SYD', 'MEL'].includes(city.code));
  const saudiCities = cities.filter(city => ['JED', 'MED'].includes(city.code));

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 transition-all duration-300 hover:shadow-2xl" data-step="1">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg">
              <span className="text-white text-2xl">✈️</span>
            </div>
            Flight Selection
          </h2>
          <p className="text-slate-600 text-lg mt-2">
            Choose your departure and return flights to start planning your Umrah journey
          </p>
        </div>
        <div className="hidden md:block">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 border border-blue-200">
            <p className="text-blue-800 font-semibold text-sm">Step 1 of 3</p>
            <p className="text-blue-600 text-xs">Select Flights</p>
          </div>
        </div>
      </div>

      {/* Passenger Selection */}
      <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-6 mb-8 border border-slate-200">
        <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <span className="text-2xl">👥</span>
          Passenger Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">Adults</label>
            <select className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 appearance-none cursor-pointer">
              <option value="1">1 Adult</option>
              <option value="2">2 Adults</option>
              <option value="3">3 Adults</option>
              <option value="4">4 Adults</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">Children (2-11 years)</label>
            <select className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 appearance-none cursor-pointer">
              <option value="0">0 Children</option>
              <option value="1">1 Child</option>
              <option value="2">2 Children</option>
              <option value="3">3 Children</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">Infants (0-2 years)</label>
            <select className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 appearance-none cursor-pointer">
              <option value="0">0 Infants</option>
              <option value="1">1 Infant</option>
              <option value="2">2 Infants</option>
            </select>
          </div>
        </div>
      </div>

      {/* Flight Selection */}
      <div className="space-y-8">
        
        {/* Outbound Flight */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
          <h3 className="text-xl font-semibold text-green-800 mb-6 flex items-center gap-3">
            <div className="p-2 bg-green-600 rounded-xl">
              <span className="text-white text-lg">🛫</span>
            </div>
            Outbound Flight (To Saudi Arabia)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-green-700">From</label>
              <select 
                value={outboundFlight.origin}
                onChange={(e) => setOutboundFlight({...outboundFlight, origin: e.target.value})}
                className="w-full px-4 py-3 bg-white border-2 border-green-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 appearance-none cursor-pointer"
              >
                <option value="">Select Origin City</option>
                {originCities.map(city => (
                  <option key={city.code} value={city.code}>{city.name} ({city.code})</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-green-700">To</label>
              <select 
                value={outboundFlight.destination}
                onChange={(e) => setOutboundFlight({...outboundFlight, destination: e.target.value})}
                className="w-full px-4 py-3 bg-white border-2 border-green-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 appearance-none cursor-pointer"
              >
                <option value="">Select Destination</option>
                {saudiCities.map(city => (
                  <option key={city.code} value={city.code}>{city.name} ({city.code})</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-green-700">Departure Date</label>
              <input 
                type="date" 
                value={outboundFlight.departureDate}
                onChange={(e) => setOutboundFlight({...outboundFlight, departureDate: e.target.value})}
                className="w-full px-4 py-3 bg-white border-2 border-green-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200"
              />
            </div>
          </div>
        </div>

        {/* Return Flight */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 border-2 border-blue-200">
          <h3 className="text-xl font-semibold text-blue-800 mb-6 flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-xl">
              <span className="text-white text-lg">🛬</span>
            </div>
            Return Flight (From Saudi Arabia)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-blue-700">From</label>
              <select 
                value={returnFlight.origin}
                onChange={(e) => setReturnFlight({...returnFlight, origin: e.target.value})}
                className="w-full px-4 py-3 bg-white border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 appearance-none cursor-pointer"
              >
                <option value="">Select Origin</option>
                {saudiCities.map(city => (
                  <option key={city.code} value={city.code}>{city.name} ({city.code})</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-blue-700">To</label>
              <select 
                value={returnFlight.destination}
                onChange={(e) => setReturnFlight({...returnFlight, destination: e.target.value})}
                className="w-full px-4 py-3 bg-white border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 appearance-none cursor-pointer"
              >
                <option value="">Select Destination</option>
                {originCities.map(city => (
                  <option key={city.code} value={city.code}>{city.name} ({city.code})</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-blue-700">Departure Date</label>
              <input 
                type="date" 
                value={returnFlight.departureDate}
                onChange={(e) => setReturnFlight({...returnFlight, departureDate: e.target.value})}
                className="w-full px-4 py-3 bg-white border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Search Button */}
      <div className="mt-8">
        <button 
          onClick={handleSearch}
          className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-white py-4 px-8 rounded-2xl font-semibold text-lg hover:shadow-xl hover:shadow-gold-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 group"
        >
          <span className="text-2xl group-hover:scale-110 transition-transform">🔍</span>
          Search Available Flights
        </button>
      </div>

      {showResults && (
        <div className="mt-12 animate-fadeInUp">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-slate-900 mb-2">Available Flights</h3>
            <p className="text-slate-600 text-lg">Select your preferred outbound and return flights</p>
          </div>
          
          {/* Outbound Options */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-600 rounded-xl">
                <span className="text-white text-lg">🛫</span>
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Outbound Flights</h4>
            </div>
            
            <div className="space-y-4">
              {availableFlights.outbound.map((flight, index) => (
                <div 
                  key={flight.id}
                  onClick={() => handleFlightSelection(flight, 'outbound')}
                  className={`bg-white rounded-2xl border-2 p-6 cursor-pointer transition-all duration-300 hover:shadow-xl ${
                    selectedFlights.outbound?.id === flight.id 
                      ? 'border-green-500 bg-green-50 shadow-lg shadow-green-100' 
                      : 'border-slate-200 hover:border-green-300'
                  }`}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-bold text-slate-900">{flight.airline}</h4>
                        {selectedFlights.outbound?.id === flight.id && (
                          <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Selected
                          </div>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-slate-500 font-medium">Route</p>
                          <p className="text-slate-900 font-semibold">{flight.from} → {flight.to}</p>
                        </div>
                        <div>
                          <p className="text-slate-500 font-medium">Time</p>
                          <p className="text-slate-900 font-semibold">{flight.departure} - {flight.arrival}</p>
                        </div>
                        <div>
                          <p className="text-slate-500 font-medium">Duration</p>
                          <p className="text-slate-900 font-semibold">{flight.duration}</p>
                        </div>
                        <div>
                          <p className="text-slate-500 font-medium">Stops</p>
                          <p className="text-slate-900 font-semibold">{flight.stops}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="ml-6 text-right">
                      <div className="text-3xl font-bold text-green-600">${flight.price}</div>
                      <div className="text-slate-500 text-sm">per person</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Return Options */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-600 rounded-xl">
                <span className="text-white text-lg">🛬</span>
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Return Flights</h4>
            </div>
            
            <div className="space-y-4">
              {availableFlights.return.map((flight, index) => (
                <div 
                  key={flight.id}
                  onClick={() => handleFlightSelection(flight, 'return')}
                  className={`bg-white rounded-2xl border-2 p-6 cursor-pointer transition-all duration-300 hover:shadow-xl ${
                    selectedFlights.return?.id === flight.id 
                      ? 'border-blue-500 bg-blue-50 shadow-lg shadow-blue-100' 
                      : 'border-slate-200 hover:border-blue-300'
                  }`}
                  style={{animationDelay: `${(index + availableFlights.outbound.length) * 0.1}s`}}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-bold text-slate-900">{flight.airline}</h4>
                        {selectedFlights.return?.id === flight.id && (
                          <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Selected
                          </div>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-slate-500 font-medium">Route</p>
                          <p className="text-slate-900 font-semibold">{flight.from} → {flight.to}</p>
                        </div>
                        <div>
                          <p className="text-slate-500 font-medium">Time</p>
                          <p className="text-slate-900 font-semibold">{flight.departure} - {flight.arrival}</p>
                        </div>
                        <div>
                          <p className="text-slate-500 font-medium">Duration</p>
                          <p className="text-slate-900 font-semibold">{flight.duration}</p>
                        </div>
                        <div>
                          <p className="text-slate-500 font-medium">Stops</p>
                          <p className="text-slate-900 font-semibold">{flight.stops}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="ml-6 text-right">
                      <div className="text-3xl font-bold text-blue-600">${flight.price}</div>
                      <div className="text-slate-500 text-sm">per person</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightSelector;