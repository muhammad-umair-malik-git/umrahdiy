import { useState } from 'react';
import { hotelData } from '../data/mockData';

const HotelSelector = ({ onHotelSelect, flightDateRange }) => {
  const [hotelBookings, setHotelBookings] = useState([]);

  const addHotelBooking = () => {
    if (hotelBookings.length < 4) {
      const newBooking = {
        id: Date.now(),
        location: '',
        checkinDate: '',
        checkoutDate: '',
        selectedHotel: null,
        availableHotels: []
      };
      setHotelBookings([...hotelBookings, newBooking]);
    }
  };

  const removeHotelBooking = (bookingId) => {
    const updatedBookings = hotelBookings.filter(booking => booking.id !== bookingId);
    setHotelBookings(updatedBookings);
    updateParentSelection(updatedBookings);
  };

  const updateBooking = (bookingId, field, value) => {
    const updatedBookings = hotelBookings.map(booking => {
      if (booking.id === bookingId) {
        const updated = { ...booking, [field]: value };
        
        if (field === 'location' && value) {
          updated.availableHotels = hotelData.filter(hotel => hotel.location === value);
          updated.selectedHotel = null;
        }
        
        return updated;
      }
      return booking;
    });
    
    setHotelBookings(updatedBookings);
    updateParentSelection(updatedBookings);
  };

  const selectHotel = (bookingId, hotel) => {
    const updatedBookings = hotelBookings.map(booking => {
      if (booking.id === bookingId) {
        return { ...booking, selectedHotel: hotel };
      }
      return booking;
    });
    
    setHotelBookings(updatedBookings);
    updateParentSelection(updatedBookings);
  };

  const updateParentSelection = (bookings) => {
    console.log('All bookings:', bookings);
    
    const validBookings = bookings.filter(booking => {
      const isValid = booking.selectedHotel && booking.checkinDate && booking.checkoutDate;
      console.log('Booking validity:', {
        id: booking.id,
        hasHotel: !!booking.selectedHotel,
        hasCheckin: !!booking.checkinDate,
        hasCheckout: !!booking.checkoutDate,
        isValid
      });
      return isValid;
    });
    
    console.log('Valid bookings:', validBookings);
    
    const hotelSelections = validBookings.map(booking => {
      const checkinDate = new Date(booking.checkinDate);
      const checkoutDate = new Date(booking.checkoutDate);
      const nights = Math.ceil((checkoutDate - checkinDate) / (1000 * 60 * 60 * 24));
      
      const selection = {
        ...booking.selectedHotel,
        id: `${booking.selectedHotel.id}-${booking.id}`,
        checkin: booking.checkinDate,
        checkout: booking.checkoutDate,
        nights: nights,
        totalPrice: booking.selectedHotel.price * nights
      };
      
      console.log('Hotel selection created:', selection);
      return selection;
    });
    
    console.log('Final hotel selections:', hotelSelections);
    onHotelSelect(hotelSelections);
  };

  const getMinDate = () => {
    return new Date().toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    return maxDate.toISOString().split('T')[0];
  };

  return (
    <div className="card-modern animate-on-scroll" data-step="2">
      <div className="section-header">
        <h2>🏨 Select Your Hotels</h2>
        <p>Add hotel bookings for your trip. You can book up to 4 different locations.</p>
      </div>

      {hotelBookings.map((booking, index) => (
        <div key={booking.id} className="hotel-booking-section">
          <div className="hotel-booking-header">
            <h4 className="section-subheader">Hotel Booking {index + 1}</h4>
            {index > 0 && (
              <button
                onClick={() => removeHotelBooking(booking.id)}
                className="btn-danger"
              >
                Remove
              </button>
            )}
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>📍 Location</label>
              <select 
                value={booking.location}
                onChange={(e) => updateBooking(booking.id, 'location', e.target.value)}
              >
                <option value="">Select Location</option>
                <option value="Jeddah">🏙️ Jeddah</option>
                <option value="Mecca">🕋 Mecca (Makkah)</option>
                <option value="Medina">🕌 Medina (Madinah)</option>
              </select>
            </div>
            <div className="form-group">
              <label>📅 Check-in Date</label>
              <input 
                type="date" 
                value={booking.checkinDate}
                onChange={(e) => updateBooking(booking.id, 'checkinDate', e.target.value)}
                min={getMinDate()}
                max={getMaxDate()}
              />
            </div>
            <div className="form-group">
              <label>📅 Check-out Date</label>
              <input 
                type="date" 
                value={booking.checkoutDate}
                onChange={(e) => updateBooking(booking.id, 'checkoutDate', e.target.value)}
                min={booking.checkinDate ? (() => {
                  const nextDay = new Date(booking.checkinDate);
                  nextDay.setDate(nextDay.getDate() + 1);
                  return nextDay.toISOString().split('T')[0];
                })() : getMinDate()}
                max={getMaxDate()}
              />
            </div>
          </div>

          {booking.availableHotels.length > 0 && (
            <div>
              <h5 className="section-subheader">Available Hotels</h5>
              <div className="grid gap-4">
                {booking.availableHotels.map((hotel, hotelIndex) => (
                  <div 
                    key={hotel.id}
                    onClick={() => selectHotel(booking.id, hotel)}
                    className={`option-card ${
                      booking.selectedHotel?.id === hotel.id ? 'selected' : ''
                    }`}
                    style={{animationDelay: `${hotelIndex * 0.1}s`}}
                  >
                    <div className="option-info">
                      <div className="hotel-image-section">
                        <img 
                          src={hotel.image} 
                          alt={hotel.name}
                          className="hotel-image"
                        />
                        <div className="option-details">
                          <h4>{hotel.name}</h4>
                          <p className="hotel-rating">
                            ⭐ {'★'.repeat(hotel.rating)} {hotel.rating} stars
                          </p>
                          <p>📍 {hotel.location}</p>
                        </div>
                      </div>
                      <div className="option-price">${hotel.price}/night</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}

      <button 
        onClick={addHotelBooking}
        disabled={hotelBookings.length >= 4}
        className={hotelBookings.length >= 4 ? 'btn-secondary' : 'btn-primary'}
        style={{width: '100%', opacity: hotelBookings.length >= 4 ? 0.6 : 1, cursor: hotelBookings.length >= 4 ? 'not-allowed' : 'pointer'}}
      >
        Add Hotel Booking ({hotelBookings.length}/4)
      </button>
    </div>
  );
};

export default HotelSelector;