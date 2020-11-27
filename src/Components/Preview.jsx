import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  width: 100%;
`;
const Title = styled.h1`
  text-align: center;
`;
const Dscrip = styled.p`
  text-align: center;
`;

const Preview = ({ name, img, address, siteweb, email, phone }) => {
  const ImgURL = [
    "https://zupimages.net/up/20/48/hnfv.jpg",
    "https://zupimages.net/up/20/47/mhqt.jpg",
    "https://zupimages.net/up/20/48/hnfv.jpg",
    "https://zupimages.net/up/20/47/2x4c.jpg",
  ];

  let newName = "";
  let newAddress = "";
  let newSiteweb = "";
  let newImg = "";
  let newEmail = "";
  let newPhone = "";

  function getRandomImg(url) {
    const randomImg = url[Math.floor(Math.random() * url.length)];
    return randomImg;
  }

  // Line 42 to 79 is to define default data when API data is empty
  if (
    typeof name === "undefined" ||
    name.includes("Under review, proposed: -")
  ) {
    newName = "Nom en cours d'acceptation";
  } else {
    newName = name;
  }

  if (img === null) {
    newImg = getRandomImg(ImgURL);
  } else {
    newImg = img;
  }

  if (address === null) {
    newAddress = "cet établissement n'a pas encore d'adresse";
  } else {
    newAddress = address;
  }

  if (phone === null) {
    newPhone = "cet établisssement n'a pas précisé son numéro";
  } else {
    newPhone = phone;
  }

  if (email === null) {
    newEmail = "cet établissement n'a pas encore d'email";
  } else {
    newEmail = email;
  }

  if (siteweb === null) {
    newSiteweb = "cet établissement n'a pas encore de site internet";
  } else {
    newSiteweb = siteweb;
  }

  return (
    <Wrap>
      <Img src={newImg} alt={newName} />
      <div>
        <Title>{newName}</Title>
        <Dscrip>
          Retrouvez ici les informations du spot grâce à votre meilleur
          partenaire sportif : SPOT 4 SPORT...{" "}
        </Dscrip>
        <ul>
          <span role="img" aria-label="">
            📍 {newAddress}
          </span>
        </ul>
        <ul>
          <span role="img" aria-label="">
            {" "}
            📞 {newPhone}
          </span>
        </ul>
        <ul>
          <span role="img" aria-label="">
            {" "}
            📩 {newEmail}
          </span>
        </ul>
        <ul>
          <span role="img" aria-label="">
            {" "}
            💻 {newSiteweb}
          </span>
        </ul>
      </div>
    </Wrap>
  );
};

export default Preview;
