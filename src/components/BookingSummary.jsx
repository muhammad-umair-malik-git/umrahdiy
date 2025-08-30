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
    <div className="card-modern animate-on-scroll" data-step="3">
      <div className="section-header">
        <h2>📋 Booking Summary</h2>
        <p>
          Review your selected flights and hotels before finalizing
        </p>
      </div>

      {/* Flight Details */}
      <div className="summary-section">
        <h3>✈️ Flight Details</h3>
        {selectedFlights && selectedFlights.length > 0 ? (
          selectedFlights.map((flight, index) => (
            <div key={flight.id} className="summary-item">
              <div className="summary-item-title">{flight.airline} - {flight.from} → {flight.to}</div>
              <div className="summary-item-details">{flight.departure} - {flight.arrival} ({flight.duration})</div>
              <div className="summary-item-price">${flight.price}</div>
            </div>
          ))
        ) : (
          <div className="text-gray-500 italic">No flights selected yet</div>
        )}
      </div>

      {/* Hotel Details */}
      <div className="summary-section">
        <h3>🏨 Hotel Details</h3>
        {selectedHotels && selectedHotels.length > 0 ? (
          selectedHotels.map((hotel, index) => (
            <div key={`${hotel.id}-${index}`} className="summary-item">
              <div className="summary-item-title">{hotel.name} - {hotel.location}</div>
              <div className="summary-item-details">{hotel.checkin} to {hotel.checkout} ({hotel.nights} nights)</div>
              <div className="summary-item-price">${hotel.totalPrice}</div>
            </div>
          ))
        ) : (
          <div className="text-gray-500 italic">No hotels selected yet</div>
        )}
      </div>

      {/* Total Cost */}
      <div className="summary-section">
        <h3>💰 Total Cost</h3>
        <div className="summary-item">
          <div className="summary-item-price" style={{fontSize: '2rem'}}>${getTotalCost()}</div>
          <div className="summary-item-details">Cost per Pax: ${getCostPerPax()}</div>
        </div>
      </div>

      <button 
        onClick={onPurchase}
        disabled={!selectedFlights || selectedFlights.length === 0}
        className={selectedFlights && selectedFlights.length > 0 ? 'btn-success' : 'btn-secondary'}
        style={{opacity: selectedFlights && selectedFlights.length > 0 ? 1 : 0.6, cursor: selectedFlights && selectedFlights.length > 0 ? 'pointer' : 'not-allowed'}}
      >
        🕋 Labbaik Allahumma labbaik
      </button>
    </div>
  );
};

export default BookingSummary;