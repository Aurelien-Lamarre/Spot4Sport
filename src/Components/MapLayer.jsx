import React, { Component } from "react";
import axios from "axios";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { geolocated } from "react-geolocated";
import styled from "styled-components";
import { divIcon } from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import Preview from "./Preview";
import "./Styled/MapLayer.css";

const DEFAULT_LATITUDE = 46.327024;
const DEFAULT_LONGITUDE = 2.487453;

const StyledPop = styled(Popup)`
  border-radius: 6;
  z-index: 100;
  .leaflet-popup-content-wrapper {
    border-radius: 0;
    color: #f8f8ff;
    background-color: #000000;
  }

  .leaflet-popup-tip-container {
    visibility: hidden;
  }
`;

const StyledPreview = styled(Preview)`
  background-color: #000000;
`;

class MapLayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api: [],
    };
  }

  componentDidMount() {
    const { url } = this.props;
    this.fetchApi(url);
  }

  componentDidUpdate(prevPros) {
    const { url } = this.props;
    if (prevPros.url !== url) {
      this.fetchApi(url);
    }
  }

  // AXIOS request with url from LogicContainer
  fetchApi(url) {
    axios
      .get(url)
      .then((res) => res.data.data.features)
      .then((data) => {
        const newData = data.map((el) => {
          const firstArrayLat = el.geometry.coordinates[0];
          const subArrayLat = el.geometry.coordinates[0][0];
          const firstArrayLng = el.geometry.coordinates[1];
          const subArrayLng = el.geometry.coordinates[0][1];
          const alt = el.geometry.coordinates[2];
          let newLat = "";
          let newLng = "";

          // Check if lat & long are in sub array
          if (typeof subArrayLat === "undefined") {
            newLat = firstArrayLat;
            newLng = firstArrayLng;
          } else {
            newLat = subArrayLat;
            newLng = subArrayLng;
          }

          return {
            ...el,
            geometry: {
              coordinates: [newLng, newLat, alt],
            },
          };
        });
        return newData;
      })
      .then((newData) => {
        this.setState({ api: newData });
      });
  }

  render() {
    const { api } = this.state;
    const { coords } = this.props;
    const longitude = coords ? coords.longitude : DEFAULT_LONGITUDE;
    const latitude = coords ? coords.latitude : DEFAULT_LATITUDE;

    const iconMarkup = renderToStaticMarkup(
      <i className=" fa fa-map-marker-alt fa-3x" />
    );
    const iconLoc = divIcon({ html: iconMarkup });

    const iconMyLocMarkup = renderToStaticMarkup(
      <i className="fas fa-map-marker-alt fa-3x" />
    );
    const iconMyLoc = divIcon({ html: iconMyLocMarkup });

    return (
      <>
        <Map center={[latitude, longitude]} zoom={6.42}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          />
          !coords ?
          {api.map((geo) => (
            <Marker
              icon={iconLoc}
              key={geo.properties.uuid}
              position={geo.geometry.coordinates}
            >
              <StyledPop>
                <StyledPreview
                  name={geo.properties.name}
                  img={geo.properties.photo_reference}
                  address={geo.properties.address_components.address}
                  siteweb={geo.properties.contact_details.website}
                  email={geo.properties.contact_details.email}
                  phone={geo.properties.contact_details.phone}
                />
              </StyledPop>
            </Marker>
          ))}
          :
          <Marker icon={iconMyLoc} position={[latitude, longitude]}>
            <Popup>Vous êtes ici</Popup>
          </Marker>
        </Map>
      </>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 100,
})(MapLayer);
