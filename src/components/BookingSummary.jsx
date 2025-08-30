const BookingSummary = ({ selectedFlights, selectedHotels, onPurchase }) => {
  console.log('BookingSummary received hotels:', selectedHotels);
  const calculateFlightTotal = () => {
    if (!selectedFlights || selectedFlights.length === 0) return 0;
    return selectedFlights.reduce((total, flight) => total + flight.price, 0);
  };

  const calculateHotelTotal = () => {
    if (!selectedHotels || selectedHotels.length === 0) return 0;
    return selectedHotels.reduce((total, hotel) => total + hotel.totalPrice, 0);
  };

  const getTotalCost = () => {
    return calculateFlightTotal() + calculateHotelTotal();
  };

  const getCostPerPax = () => {
    const totalCost = getTotalCost();
    const totalPax = 1; // This would come from passenger counts
    return totalPax > 0 ? Math.round((totalCost / totalPax) * 100) / 100 : 0;
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 transition-all duration-300 hover:shadow-2xl" data-step="3">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl shadow-lg mb-4">
          <span className="text-white text-2xl">📋</span>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Booking Summary</h2>
        <p className="text-slate-600 text-lg">
          Review your selected flights and hotels before finalizing
        </p>
      </div>

      <div className="space-y-6">
        
        {/* Flight Details */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
          <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
            <span className="text-2xl">✈️</span>
            Flight Details
          </h3>
          {selectedFlights && selectedFlights.length > 0 ? (
            selectedFlights.map((flight, index) => (
              <div key={flight.id} className="bg-white rounded-xl p-4 mb-3 border border-blue-200 last:mb-0">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-slate-900">{flight.airline}</div>
                    <div className="text-slate-600 text-sm">{flight.from} → {flight.to}</div>
                    <div className="text-slate-500 text-xs">{flight.departure} - {flight.arrival} ({flight.duration})</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-600">${flight.price}</div>
                    <div className="text-xs text-slate-500">per person</div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-xl p-4 border border-blue-200 text-center">
              <div className="text-blue-300 text-4xl mb-2">✈️</div>
              <div className="text-blue-600 font-medium">No flights selected yet</div>
              <div className="text-blue-500 text-sm">Choose your flights to see details here</div>
            </div>
          )}
        </div>

        {/* Hotel Details */}
        <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-2xl p-6 border border-emerald-200">
          <h3 className="text-xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
            <span className="text-2xl">🏨</span>
            Hotel Details
          </h3>
          {selectedHotels && selectedHotels.length > 0 ? (
            selectedHotels.map((hotel, index) => (
              <div key={`${hotel.id}-${index}`} className="bg-white rounded-xl p-4 mb-3 border border-emerald-200 last:mb-0">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-slate-900">{hotel.name}</div>
                    <div className="text-slate-600 text-sm">{hotel.location}</div>
                    <div className="text-slate-500 text-xs">{hotel.checkin} to {hotel.checkout} ({hotel.nights} nights)</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-emerald-600">${hotel.totalPrice}</div>
                    <div className="text-xs text-slate-500">total stay</div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-xl p-4 border border-emerald-200 text-center">
              <div className="text-emerald-300 text-4xl mb-2">🏨</div>
              <div className="text-emerald-600 font-medium">No hotels selected yet</div>
              <div className="text-emerald-500 text-sm">Choose your hotels to see details here</div>
            </div>
          )}
        </div>

        {/* Total Cost */}
        <div className="bg-gradient-to-r from-gold-50 to-gold-100 rounded-2xl p-6 border-2 border-gold-200">
          <h3 className="text-xl font-bold text-gold-800 mb-4 flex items-center gap-2">
            <span className="text-2xl">💰</span>
            Total Package Cost
          </h3>
          <div className="bg-white rounded-xl p-6 border border-gold-200">
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-600 mb-2">${getTotalCost()}</div>
              <div className="text-gold-700 font-medium">Total Package Price</div>
              <div className="text-gold-600 text-sm mt-1">Cost per person: ${getCostPerPax()}</div>
            </div>
          </div>
        </div>

      </div>

      {/* Action Button */}
      <div className="mt-8">
        <button 
          onClick={onPurchase}
          disabled={!selectedFlights || selectedFlights.length === 0}
          className={`w-full py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 ${
            selectedFlights && selectedFlights.length > 0
              ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-white hover:shadow-xl hover:shadow-gold-500/25 transform hover:-translate-y-1'
              : 'bg-slate-200 text-slate-500 cursor-not-allowed'
          }`}
        >
          <span className="flex items-center justify-center gap-3">
            <span className="text-2xl">🕋</span>
            {selectedFlights && selectedFlights.length > 0 
              ? 'Complete Booking - Labbaik Allahumma labbaik' 
              : 'Select Flights to Continue'
            }
          </span>
        </button>
      </div>
    </div>
  );
};

export default BookingSummary;