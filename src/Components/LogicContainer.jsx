import React, { Component } from "react";
import { geolocated } from "react-geolocated";
import Styled from "styled-components";
import CITIES from "./Static/Cities";
import SPORTS from "./Static/Sports";
import FilterSelector from "./FilterSelector";
import FilterByKM from "./FilterByKm";
import MapLayer from "./MapLayer";
import swipe from "./Img/swipe.gif";
import "./Styled/Accordion.css";

// CSS styled components
const Paragraph = Styled.p`
  color: white;
`;

const WrapFilter = Styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content: space-evenly;
  align-items: baseline;
  background: black;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items:center;
    justify-content: center;
  }
`;

const WrapSelectP = Styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap:wrap;
`;

const Label = Styled.label`
  background: black;
  margin: auto;
  width: 100%;
  padding-bottom: 2em;
`;

const Swipe = Styled.img`
  display: flex;
  justify-content:center;
`;

const Border = Styled.div`
  height: 0.5em;
  width: 100%;
  margin-top: 0;
  background: linear-gradient(
    90deg,
    rgba(255, 230, 0, 1) 0%,
    rgba(255, 0, 77, 1) 34%,
    rgba(23, 255, 186, 1) 69%,
    rgba(255, 153, 0, 1) 95%
  );
`;

const URL_API_BASE = `https://sportplaces.api.decathlon.com/api/v1/places?origin=`;

// First Lat Long (Toulouse) Limit parametre for Url
let lat = 43.6047;
let long = 1.4442;
let radius = 99;
const limit = 100;

// Name of sport // 127 for begining
let idOfSport = 127;

// Url Base for API request
const urlBaseForFirstRender = URL_API_BASE.concat(
  `43.6047,1.4442&radius=99&sports=127&limit=100`
);

let api = urlBaseForFirstRender;

// Variable use in all component for modification with filter. At the end it send to MapLayer
class LogicContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenCity: CITIES[0].name,
      chosenSport: SPORTS[0].id,
      cities: CITIES,
      sport: SPORTS,
      chosenRadius: radius,
    };
  }

  // FilterSport Logic imported here
  componentDidMount() {
    const { chosenCity } = this.state;
    this.giveLatAndLongForCity(chosenCity);
  }

  // Create Api Link
  createApiLink = () => {
    const newUrl = URL_API_BASE.concat(
      lat,
      ",",
      long,
      "&radius=",
      radius,
      "&sports=",
      idOfSport,
      "&limit=",
      limit
    );
    api = newUrl;
  };

  // Attribute good lat and long from city choice
  giveLatAndLongForCity = (city) => {
    switch (city) {
      case "Toulouse":
        long = 43.6047;
        lat = 1.4442;
        break;
      case "Bordeaux":
        long = 44.8378;
        lat = 0.5792;
        break;
      case "Paris":
        long = 48.8566;
        lat = 2.3522;
        break;
      case "Lille":
        long = 50.6292;
        lat = 3.0573;
        break;
      case "Lyon":
        long = 45.764;
        lat = 4.8357;
        break;
      case "Montreal":
        long = 45.511;
        lat = -73.582;
        break;
      default:
    }
  };

  // Convert ID of Sport on Name
  convertSportIdInSportName = (sport) => {
    for (let i = 0; i < SPORTS.length; i += 1) {
      if (SPORTS[i].name === sport) {
        idOfSport = SPORTS[i].id;
      }
    }
    return idOfSport;
  };

  handleChangeSport = (e) => {
    const newFilter = e.target.value;
    const sportId = this.convertSportIdInSportName(newFilter);
    this.createApiLink();
    this.setState({
      chosenSport: sportId,
    });
  };

  handleChangeCity = (e) => {
    const newFilter = e.target.value;
    this.giveLatAndLongForCity(newFilter);
    this.createApiLink();
    this.setState({
      chosenCity: newFilter,
    });
  };

  handleChangeRadius = (e) => {
    const newRadius = e.target.value;
    this.createApiLink();
    radius = newRadius;
    this.setState({
      chosenRadius: newRadius,
    });
  };

  render() {
    const { chosenCity, chosenSport, sport, cities, chosenRadius } = this.state;
    const { handleChangeCity } = this;
    const { handleChangeSport } = this;
    const { handleChangeRadius } = this;
    return (
      <>
        <input type="checkbox" id="filter-options" className="toggle" />
        <Label className="title" htmlFor="filter-options">
          <Swipe src={swipe} alt="swipe" />
        </Label>
        <WrapFilter className="content">
          <WrapSelectP>
            <Paragraph>Sport :</Paragraph>
            <FilterSelector
              chosenSport={chosenSport}
              handleChange={handleChangeSport}
              option={sport}
            />
          </WrapSelectP>
          <WrapSelectP>
            <Paragraph>Ville :</Paragraph>
            <FilterSelector
              chosenCity={chosenCity}
              handleChange={handleChangeCity}
              option={cities}
            />
          </WrapSelectP>
          <WrapSelectP>
            <Paragraph>Distance max :</Paragraph>
            <FilterByKM
              handleChange={handleChangeRadius}
              value={chosenRadius}
            />
          </WrapSelectP>
        </WrapFilter>
        <Border />
        <MapLayer
          url={api}
          chosenCity={chosenCity}
          handleChange={handleChangeCity}
          option={cities}
        />
      </>
    );
  }
}
export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  userDecisionTimeout: 100,
})(LogicContainer);
