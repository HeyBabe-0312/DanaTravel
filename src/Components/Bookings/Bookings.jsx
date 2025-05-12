import React, { useState } from 'react';
import { FaLocationDot, FaCalendarDays, FaUsers, FaMagnifyingGlass, FaStar } from 'react-icons/fa6';
import './Bookings.scss';

const BookingCard = ({ image, title, location, price, rating }) => (
  <div className="booking-card">
    <div className="booking-card__image">
      <img src={image} alt={title} />
      <div className="rating">
        <FaStar className="star" /> {rating}
      </div>
    </div>
    <div className="booking-card__content">
      <div className="booking-card__content-header">
        <h3 className="booking-card__content-title">{title}</h3>
        <div className="booking-card__content-location">
          <FaLocationDot />
          <span>{location}</span>
        </div>
      </div>
      <div className="booking-card__content-footer">
        <div className="booking-card__content-price">${price}</div>
        <button className="booking-card__content-button">Book Now</button>
      </div>
    </div>
  </div>
);

const Bookings = () => {
  const [searchParams, setSearchParams] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: ''
  });

  const bookingLocations = [
    {
      id: 1,
      image: '/image/baNa/baNa1.webp',
      title: 'Ba Na Hills',
      location: 'Da Nang, Vietnam',
      price: '45',
      rating: 4.8
    },
    {
      id: 2,
      image: '/image/nguHanhSon/nguHanhSon1.jpg',
      title: 'Marble Mountains',
      location: 'Da Nang, Vietnam',
      price: '25',
      rating: 4.6
    },
    {
      id: 3,
      image: '/image/chuaLinhUng/chuaLinhUng1.jpg',
      title: 'Linh Ung Pagoda',
      location: 'Da Nang, Vietnam',
      price: '15',
      rating: 4.7
    },
    {
      id: 4,
      image: '/image/cauRong/cauRong1.jpg',
      title: 'Dragon Bridge',
      location: 'Da Nang, Vietnam',
      price: '0',
      rating: 4.9
    },
    {
      id: 5,
      image: '/image/bienMyKhe/bienMyKhe1.webp',
      title: 'My Khe Beach',
      location: 'Da Nang, Vietnam',
      price: '0',
      rating: 4.8
    },
    {
      id: 6,
      image: '/image/btCham/btCham1.webp',
      title: 'Cham Museum',
      location: 'Da Nang, Vietnam',
      price: '10',
      rating: 4.5
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching with params:', searchParams);
  };

  return (
    <div className="bookings">
      <div className="bookings__container">
        <div className="bookings__header">
          <h1 className="bookings__title">Book Your Travel Experience</h1>
          <p className="bookings__subtitle">Discover and book amazing places in Da Nang</p>
        </div>

        <form className="bookings__search-section" onSubmit={handleSearch}>
          <div className="search-group">
            <FaLocationDot className="search-group__icon" />
            <input
              type="text"
              className="search-group__input"
              placeholder="Where are you going?"
              value={searchParams.location}
              onChange={(e) => setSearchParams({ ...searchParams, location: e.target.value })}
            />
          </div>
          
          <div className="separator" />
          
          <div className="search-group">
            <FaCalendarDays className="search-group__icon" />
            <input
              type="date"
              className="search-group__input"
              placeholder="Check in"
              value={searchParams.checkIn}
              onChange={(e) => setSearchParams({ ...searchParams, checkIn: e.target.value })}
            />
          </div>
          
          <div className="separator" />
          
          <div className="search-group">
            <FaCalendarDays className="search-group__icon" />
            <input
              type="date"
              className="search-group__input"
              placeholder="Check out"
              value={searchParams.checkOut}
              onChange={(e) => setSearchParams({ ...searchParams, checkOut: e.target.value })}
            />
          </div>
          
          <div className="separator" />
          
          <div className="search-group">
            <FaUsers className="search-group__icon" />
            <input
              type="number"
              className="search-group__input"
              placeholder="Number of guests"
              value={searchParams.guests}
              onChange={(e) => setSearchParams({ ...searchParams, guests: e.target.value })}
              min="1"
            />
          </div>
          
          <button type="submit" className="search-button">
            <FaMagnifyingGlass /> Search
          </button>
        </form>

        <div className="bookings__grid">
          {bookingLocations.map(location => (
            <BookingCard key={location.id} {...location} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookings;