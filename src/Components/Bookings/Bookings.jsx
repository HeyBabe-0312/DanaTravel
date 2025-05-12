import React, { useState } from "react";
import {
  FaLocationDot,
  FaCalendarDays,
  FaUsers,
  FaMagnifyingGlass,
  FaStar,
} from "react-icons/fa6";
import "./Bookings.scss";
import { useTranslation } from "react-i18next";

const BookingCard = ({ image, title, location, price, rating }) => {
  const { t } = useTranslation();
  return (
    <div className="booking-card">
      <div className="booking-card__image">
        <img src={image} alt={t(title)} loading="lazy" />
        <div className="rating">
          <FaStar className="star" /> {rating}
        </div>
      </div>
      <div className="booking-card__content">
        <div className="booking-card__content-header">
          <h3 className="booking-card__content-title">{t(title)}</h3>
          <div className="booking-card__content-location">
            <FaLocationDot />
            <span>{t(location)}</span>
          </div>
        </div>
        <div className="booking-card__content-footer">
          <div className="booking-card__content-price">{t(price)}</div>
          <button className="booking-card__content-button">
            {t("bookNow")}
          </button>
        </div>
      </div>
    </div>
  );
};

const Bookings = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    guests: "",
  });

  const bookingLocations = [
    {
      id: 1,
      image:
        "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20012109-4c65e4e808a2cf0c2bfee7a8e6e233fe.jpeg?_src=imagekit&tr=c-at_max,f-jpg,h-360,pr-true,q-80,w-640",
      title: "hotels.title1",
      location: "hotels.location1",
      price: "hotels.price1",
      rating: 4.5,
    },
    {
      id: 2,
      image:
        "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10019543-b5b2dcc8e06f92e2997e7beb1b121af7.jpeg?_src=imagekit&tr=c-at_max,f-jpg,h-360,pr-true,q-80,w-640",
      title: "hotels.title2",
      location: "hotels.location2",
      price: "hotels.price2",
      rating: 4.4,
    },
    {
      id: 3,
      image:
        "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20011770-35b9497e0cc027dccd92cf149c52be74.jpeg?_src=imagekit&tr=c-at_max,f-jpg,h-360,pr-true,q-80,w-640",
      title: "hotels.title3",
      location: "hotels.location3",
      price: "hotels.price3",
      rating: 4.5,
    },
    {
      id: 4,
      image:
        "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/10019527-1d8b16208d1f7be10cf1a69fbd4bbb31.jpeg?_src=imagekit&tr=c-at_max,f-jpg,h-360,pr-true,q-80,w-640",
      title: "hotels.title4",
      location: "hotels.location4",
      price: "hotels.price4",
      rating: 4.7,
    },
    {
      id: 5,
      image:
        "https://ik.imagekit.io/tvlk/apr-asset/jW25E6H4jwsNsym3vRZW9pDKSTcrZlP7BvHu9f8hP3-lGYGGaXKkZsCoIWPujriR/imageRepo/7/0/155/843/382/DADHA_8544579956_P.jpg?_src=imagekit&tr=c-at_max,f-jpg,h-360,pr-true,q-80,w-640",
      title: "hotels.title5",
      location: "hotels.location5",
      price: "hotels.price5",
      rating: 4.8,
    },
    {
      id: 6,
      image:
        "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20027093-126d3f36ec32b28ab8db8204fb562c55.jpeg?_src=imagekit&tr=c-at_max,f-jpg,h-360,pr-true,q-80,w-640",
      title: "hotels.title6",
      location: "hotels.location6",
      price: "hotels.price6",
      rating: 4.4,
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching with params:", searchParams);
  };

  return (
    <div className="bookings">
      <div className="bookings__container">
        <div className="bookings__header">
          <h1 className="bookings__title">{t("bookTitle")}</h1>
          <p className="bookings__subtitle">{t("bookDesc")}</p>
        </div>

        <form className="bookings__search-section" onSubmit={handleSearch}>
          <div className="search-group">
            <FaLocationDot className="search-group__icon" />
            <input
              type="text"
              className="search-group__input"
              placeholder={t("placeholder2")}
              value={searchParams.location}
              onChange={(e) =>
                setSearchParams({ ...searchParams, location: e.target.value })
              }
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
              onChange={(e) =>
                setSearchParams({ ...searchParams, checkIn: e.target.value })
              }
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
              onChange={(e) =>
                setSearchParams({ ...searchParams, checkOut: e.target.value })
              }
            />
          </div>

          <div className="separator" />

          <div className="search-group">
            <FaUsers className="search-group__icon" />
            <input
              type="number"
              className="search-group__input"
              placeholder={t("numberPeople")}
              value={searchParams.guests}
              onChange={(e) =>
                setSearchParams({ ...searchParams, guests: e.target.value })
              }
              min="1"
            />
          </div>

          <button type="submit" className="search-button">
            <FaMagnifyingGlass /> {t("all")}
          </button>
        </form>

        <div className="bookings__grid">
          {bookingLocations.map((location) => (
            <BookingCard key={location.id} {...location} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookings;
