import { useState } from 'react';
import { hotelData } from '../data/mockData';
import { useLanguage } from '../contexts/LanguageContext';

const HotelSelector = ({ onHotelSelect, flightDateRange }) => {
  const { t } = useLanguage();
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
    <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 transition-all duration-300 hover:shadow-2xl" data-step="2">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl shadow-lg">
              <span className="text-white text-2xl">🏨</span>
            </div>
{t('hotelSelection')}
          </h2>
          <p className="text-slate-600 text-lg mt-2">
{t('addHotelBookings')}
          </p>
        </div>
        <div className="hidden md:block">
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-4 border border-emerald-200">
            <p className="text-emerald-800 font-semibold text-sm">{t('stepTwoOfThree')}</p>
            <p className="text-emerald-600 text-xs">{t('selectHotels')}</p>
          </div>
        </div>
      </div>

      {hotelBookings.map((booking, index) => (
        <div key={booking.id} className="hotel-booking-section">
          <div className="hotel-booking-header">
            <h4 className="section-subheader">{t('hotelBooking')} {index + 1}</h4>
            {index > 0 && (
              <button
                onClick={() => removeHotelBooking(booking.id)}
                className="btn-danger"
              >
{t('remove')}
              </button>
            )}
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>📍 {t('location')}</label>
              <select 
                value={booking.location}
                onChange={(e) => updateBooking(booking.id, 'location', e.target.value)}
              >
                <option value="">{t('selectLocation')}</option>
                <option value="Jeddah">🏙️ {t('jeddah')}</option>
                <option value="Mecca">🕋 {t('mecca')}</option>
                <option value="Medina">🕌 {t('medina')}</option>
              </select>
            </div>
            <div className="form-group">
              <label>📅 {t('checkinDate')}</label>
              <input 
                type="date" 
                value={booking.checkinDate}
                onChange={(e) => updateBooking(booking.id, 'checkinDate', e.target.value)}
                min={getMinDate()}
                max={getMaxDate()}
              />
            </div>
            <div className="form-group">
              <label>📅 {t('checkoutDate')}</label>
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
              <h5 className="section-subheader">{t('availableHotels')}</h5>
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
⭐ {'★'.repeat(hotel.rating)} {hotel.rating} {t('rating')}
                          </p>
                          <p>📍 {hotel.location}</p>
                        </div>
                      </div>
                      <div className="option-price">${hotel.price}/{t('perNight')}</div>
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
{t('addAnotherHotel')} ({hotelBookings.length}/4)
      </button>
    </div>
  );
};

export default HotelSelector;