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
    <div className="card-modern animate-on-scroll" data-step="1">
      <div className="section-header">
        <h2>✈️ Select Your Flights</h2>
        <p>
          Choose your departure and return flights to start planning your Umrah journey
        </p>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>👥 Adult(s)</label>
          <select>
            <option value="1">1 Adult</option>
            <option value="2">2 Adults</option>
            <option value="3">3 Adults</option>
            <option value="4">4 Adults</option>
          </select>
        </div>
        <div className="form-group">
          <label>👶 Infant(s) (0-2 years)</label>
          <select>
            <option value="0">0 Infants</option>
            <option value="1">1 Infant</option>
            <option value="2">2 Infants</option>
          </select>
        </div>
        <div className="form-group">
          <label>🧒 Children(s) (2-11 years)</label>
          <select>
            <option value="0">0 Children</option>
            <option value="1">1 Child</option>
            <option value="2">2 Children</option>
            <option value="3">3 Children</option>
          </select>
        </div>
      </div>

      {/* Outbound Flight */}
      <div className="flight-segment">
        <h4 className="section-subheader">🛫 Outbound Flight</h4>
        <div className="form-row">
          <div className="form-group">
            <label>📍 From</label>
            <select 
              value={outboundFlight.origin}
              onChange={(e) => setOutboundFlight({...outboundFlight, origin: e.target.value})}
            >
              <option value="">Select Origin</option>
              {originCities.map(city => (
                <option key={city.code} value={city.code}>{city.name} ({city.code})</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>🕌 To</label>
            <select 
              value={outboundFlight.destination}
              onChange={(e) => setOutboundFlight({...outboundFlight, destination: e.target.value})}
            >
              <option value="">Select Destination</option>
              {saudiCities.map(city => (
                <option key={city.code} value={city.code}>{city.name} ({city.code})</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>📅 Departure Date</label>
            <input 
              type="date" 
              value={outboundFlight.departureDate}
              onChange={(e) => setOutboundFlight({...outboundFlight, departureDate: e.target.value})}
            />
          </div>
        </div>
      </div>

      {/* Return Flight */}
      <div className="flight-segment">
        <h4 className="section-subheader">🛬 Return Flight</h4>
        <div className="form-row">
          <div className="form-group">
            <label>📍 From</label>
            <select 
              value={returnFlight.origin}
              onChange={(e) => setReturnFlight({...returnFlight, origin: e.target.value})}
            >
              <option value="">Select Origin</option>
              {saudiCities.map(city => (
                <option key={city.code} value={city.code}>{city.name} ({city.code})</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>🏠 To</label>
            <select 
              value={returnFlight.destination}
              onChange={(e) => setReturnFlight({...returnFlight, destination: e.target.value})}
            >
              <option value="">Select Destination</option>
              {originCities.map(city => (
                <option key={city.code} value={city.code}>{city.name} ({city.code})</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>📅 Departure Date</label>
            <input 
              type="date" 
              value={returnFlight.departureDate}
              onChange={(e) => setReturnFlight({...returnFlight, departureDate: e.target.value})}
            />
          </div>
        </div>
      </div>

      <button 
        onClick={handleSearch}
        className="btn-primary"
      >
        Search Flights
      </button>

      {showResults && (
        <div className="mt-8">
          <div className="section-header">
            <h2>Available Flights</h2>
            <p>Select your preferred outbound and return flights</p>
          </div>
          
          {/* Outbound Options */}
          <div className="mb-8">
            <h4 className="section-subheader">Outbound Options</h4>
            <div className="grid gap-4">
              {availableFlights.outbound.map((flight, index) => (
                <div 
                  key={flight.id}
                  onClick={() => handleFlightSelection(flight, 'outbound')}
                  className={`option-card ${
                    selectedFlights.outbound?.id === flight.id ? 'selected' : ''
                  }`}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="option-info">
                    <div className="option-details">
                      <h4>{flight.airline}</h4>
                      <p>✈️ {flight.from} → {flight.to}</p>
                      <p>🕐 {flight.departure} - {flight.arrival}</p>
                      <p>⏱️ {flight.duration} • {flight.stops}</p>
                    </div>
                    <div className="option-price">${flight.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Return Options */}
          <div>
            <h4 className="section-subheader">Return Options</h4>
            <div className="grid gap-4">
              {availableFlights.return.map((flight, index) => (
                <div 
                  key={flight.id}
                  onClick={() => handleFlightSelection(flight, 'return')}
                  className={`option-card ${
                    selectedFlights.return?.id === flight.id ? 'selected' : ''
                  }`}
                  style={{animationDelay: `${(index + availableFlights.outbound.length) * 0.1}s`}}
                >
                  <div className="option-info">
                    <div className="option-details">
                      <h4>{flight.airline}</h4>
                      <p>✈️ {flight.from} → {flight.to}</p>
                      <p>🕐 {flight.departure} - {flight.arrival}</p>
                      <p>⏱️ {flight.duration} • {flight.stops}</p>
                    </div>
                    <div className="option-price">${flight.price}</div>
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