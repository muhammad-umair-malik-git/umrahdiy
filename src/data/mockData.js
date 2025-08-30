export const flightData = [
  {
    id: 'f1',
    from: 'AKL',
    to: 'JED',
    airline: 'Emirates',
    departure: '10:30',
    arrival: '06:45+1',
    duration: '17h 15m',
    stops: '1 stop',
    price: 1850
  },
  {
    id: 'f2',
    from: 'AKL',
    to: 'JED',
    airline: 'Qatar Airways',
    departure: '14:20',
    arrival: '10:15+1',
    duration: '16h 55m',
    stops: '1 stop',
    price: 1920
  },
  {
    id: 'f3',
    from: 'SYD',
    to: 'JED',
    airline: 'Emirates',
    departure: '22:15',
    arrival: '18:30+1',
    duration: '17h 15m',
    stops: '1 stop',
    price: 1780
  },
  {
    id: 'f4',
    from: 'MEL',
    to: 'JED',
    airline: 'Qatar Airways',
    departure: '23:45',
    arrival: '19:50+1',
    duration: '16h 05m',
    stops: '1 stop',
    price: 1820
  },
  {
    id: 'f5',
    from: 'JED',
    to: 'AKL',
    airline: 'Emirates',
    departure: '08:15',
    arrival: '09:30+1',
    duration: '18h 15m',
    stops: '1 stop',
    price: 1850
  },
  {
    id: 'f6',
    from: 'JED',
    to: 'SYD',
    airline: 'Qatar Airways',
    departure: '02:35',
    arrival: '22:20',
    duration: '15h 45m',
    stops: '1 stop',
    price: 1780
  },
  {
    id: 'f7',
    from: 'MED',
    to: 'AKL',
    airline: 'Saudi Airlines',
    departure: '11:45',
    arrival: '12:20+1',
    duration: '17h 35m',
    stops: '1 stop',
    price: 1780
  },
  {
    id: 'f8',
    from: 'MED',
    to: 'MEL',
    airline: 'Emirates',
    departure: '14:20',
    arrival: '16:45+1',
    duration: '18h 25m',
    stops: '1 stop',
    price: 1820
  },
  // Jakarta flights
  {
    id: 'f9',
    from: 'CGK',
    to: 'JED',
    airline: 'Garuda Indonesia',
    departure: '00:30',
    arrival: '06:15',
    duration: '8h 45m',
    stops: 'Direct',
    price: 1450
  },
  {
    id: 'f10',
    from: 'CGK',
    to: 'MED',
    airline: 'Saudia',
    departure: '22:45',
    arrival: '05:30+1',
    duration: '9h 45m',
    stops: 'Direct',
    price: 1520
  },
  {
    id: 'f11',
    from: 'JED',
    to: 'CGK',
    airline: 'Garuda Indonesia',
    departure: '08:30',
    arrival: '22:15',
    duration: '8h 45m',
    stops: 'Direct',
    price: 1450
  },
  {
    id: 'f12',
    from: 'MED',
    to: 'CGK',
    airline: 'Saudia',
    departure: '07:15',
    arrival: '20:30',
    duration: '9h 15m',
    stops: 'Direct',
    price: 1520
  },
  // Kuala Lumpur flights
  {
    id: 'f13',
    from: 'KUL',
    to: 'JED',
    airline: 'Malaysia Airlines',
    departure: '01:15',
    arrival: '06:30',
    duration: '8h 15m',
    stops: 'Direct',
    price: 1380
  },
  {
    id: 'f14',
    from: 'KUL',
    to: 'MED',
    airline: 'Saudia',
    departure: '23:30',
    arrival: '05:45+1',
    duration: '9h 15m',
    stops: 'Direct',
    price: 1420
  },
  {
    id: 'f15',
    from: 'JED',
    to: 'KUL',
    airline: 'Malaysia Airlines',
    departure: '09:45',
    arrival: '23:30',
    duration: '8h 45m',
    stops: 'Direct',
    price: 1380
  },
  {
    id: 'f16',
    from: 'MED',
    to: 'KUL',
    airline: 'Saudia',
    departure: '08:00',
    arrival: '21:15',
    duration: '9h 15m',
    stops: 'Direct',
    price: 1420
  },
  // Singapore flights
  {
    id: 'f17',
    from: 'SIN',
    to: 'JED',
    airline: 'Singapore Airlines',
    departure: '01:45',
    arrival: '07:00',
    duration: '8h 15m',
    stops: 'Direct',
    price: 1520
  },
  {
    id: 'f18',
    from: 'SIN',
    to: 'MED',
    airline: 'Saudia',
    departure: '23:45',
    arrival: '06:00+1',
    duration: '9h 15m',
    stops: 'Direct',
    price: 1580
  },
  {
    id: 'f19',
    from: 'JED',
    to: 'SIN',
    airline: 'Singapore Airlines',
    departure: '10:30',
    arrival: '00:15+1',
    duration: '8h 45m',
    stops: 'Direct',
    price: 1520
  },
  {
    id: 'f20',
    from: 'MED',
    to: 'SIN',
    airline: 'Saudia',
    departure: '08:15',
    arrival: '21:30',
    duration: '9h 15m',
    stops: 'Direct',
    price: 1580
  }
];

export const hotelData = [
  {
    id: 'h1',
    name: 'Fairmont Makkah Clock Royal Tower',
    location: 'Mecca',
    rating: 5,
    price: 450,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 'h2',
    name: 'Hilton Suites Makkah',
    location: 'Mecca',
    rating: 4,
    price: 320,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 'h3',
    name: 'Hyatt Regency Makkah',
    location: 'Mecca',
    rating: 5,
    price: 380,
    image: 'https://images.unsplash.com/photo-1587985064135-0366536eab42?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 'h4',
    name: 'Movenpick Hotel & Residences Hajar Tower',
    location: 'Medina',
    rating: 5,
    price: 280,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 'h5',
    name: 'Pullman Zamzam Madina',
    location: 'Medina',
    rating: 5,
    price: 320,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 'h6',
    name: 'InterContinental Dar Al Tawhid',
    location: 'Medina',
    rating: 4,
    price: 240,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 'h7',
    name: 'Rosewood Jeddah',
    location: 'Jeddah',
    rating: 5,
    price: 350,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 'h8',
    name: 'Park Hyatt Jeddah',
    location: 'Jeddah',
    rating: 5,
    price: 320,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop&crop=center'
  }
];

export const cities = [
  { code: 'AKL', name: 'Auckland', country: 'New Zealand' },
  { code: 'SYD', name: 'Sydney', country: 'Australia' },
  { code: 'MEL', name: 'Melbourne', country: 'Australia' },
  { code: 'CGK', name: 'Jakarta', country: 'Indonesia' },
  { code: 'KUL', name: 'Kuala Lumpur', country: 'Malaysia' },
  { code: 'SIN', name: 'Singapore', country: 'Singapore' },
  { code: 'JED', name: 'Jeddah', country: 'Saudi Arabia' },
  { code: 'MED', name: 'Medina', country: 'Saudi Arabia' }
];