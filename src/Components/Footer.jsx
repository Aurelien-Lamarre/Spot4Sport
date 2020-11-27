import React from "react";
import styled from "styled-components";
import facebook from "./Img/facebook.png";
import instagram from "./Img/instagram.png";
import twitter from "./Img/twitter.png";

const Footer1 = styled.div`
  display: flex;
  color: #ffffff;
  width: 100%;
  background-color: black;
  align-items: flex-end;
  bottom: 0;
`;

const Border = styled.div`
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

const List = styled.ul`
  list-style-type: none;
  text-align: left;
  flex-direction: column;
  padding-left: 5%;
  padding-top: 5%;
`;

const ListRS = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  margin-left: auto;
  padding-right: 5%;
`;

const Img = styled.img`
  width: 70%;
`;

const Titre = styled.h1`
  text-decoration: underline;
  font-weight: bold;
  font-size: 90%;
  text-align: left;
`;

const Footer = () => (
  <>
    <Border />
    <Footer1>
      <List>
        <Titre>SPOTS 4 SPORT</Titre>
        <li href="#">Team</li>
        <li href="#">Contact</li>
        <li href="#">New Spot</li>
      </List>
      <List>
        <li href="#">Données personnelles</li>
        <li href="#">Conditions Générales</li>
        <li href="#">Mentions Légales</li>
      </List>
      <ListRS>
        <li>
          <Img src={facebook} alt="Facebook" />
        </li>
        <li>
          <Img src={twitter} alt="Twitter" />
        </li>
        <li>
          <Img src={instagram} alt="Instagram" />
        </li>
      </ListRS>
    </Footer1>
  </>
);

export default Footer;
