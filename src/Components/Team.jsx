import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import Styled from "styled-components";
import "./Styled/Team.css";

const WrapTeam = Styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:space-evenly;
  width:100%;
  heigth:100vh;
  background:black;
  `;
const CardWrap = Styled.div`
  margin:1em;
  height:20%;
  `;

const Team = () => {
  const urlImgMarion1 = "https://www.namedsport.com/fr/pub/media";
  const urlImgMarion2 = "/wysiwyg/namedsport/RUNNING_mobile.jpg";
  const urlImgMarionFinal = urlImgMarion1.concat(urlImgMarion2);
  const urlImgHarold1 = "https://www.sportscasting.com/wp-content/uploads/";
  const ur2ImgHarold2 = "2016/11/Joakim-Noah-Michael-Reaves-Getty-Images.jpg";
  const urlImgHaroldFinal = urlImgHarold1.concat(ur2ImgHarold2);
  const urlImgAurelien1 =
    "https://media.bleacherreport.com/f_auto,w_800,h_533,q_auto,c_fill/";
  const urlImgAurelien2 =
    "br-img-images/003/773/028/hi-res-aa1745d0f52470069512e13ea1fbed62_crop_north.jpg";
  const urlImgAurelienFinal = urlImgAurelien1.concat(urlImgAurelien2);
  const urlImgAdrien1 = "http://menhairstylist.com/wp-content/uploads/";
  const urlImgAdrien2 = "2016/09/bryce-harper-long-at-the-top-haircut.jpg";
  const urlImgAdrienFinal = urlImgAdrien1.concat(urlImgAdrien2);
  return (
    <WrapTeam>
      <CardWrap>
        <Card className="img-size">
          <CardImg
            className="img"
            top
            width="100%"
            src={urlImgMarionFinal}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">Marion</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Scrum master
            </CardSubtitle>
            <CardText>
              Entre possible et impossible il n&apos;y a que deux lettres et un
              état d&apos;esprit ... Voici mon leitmotiv pour pratiquer 8 fois
              par semaine mes sports favoris dans des spots proches de chez moi,
              grâce à Spot 4 Sport (regardez-moi ce body) !
            </CardText>
          </CardBody>
        </Card>
      </CardWrap>
      <CardWrap>
        <Card className="img-size">
          <CardImg
            className="img"
            top
            width="100%"
            src={urlImgHaroldFinal}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">Harold</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Full stack developer sénior
            </CardSubtitle>
            <CardText>
              J&apos;aime le basket mais surtout la raclette... et la raclette
              en faisant du sport. Je pratique le sport tous les jours, même le
              jour de Noël, il faut éliminer... Ma ville favorite : Toulouse,
              évidemment !
            </CardText>
          </CardBody>
        </Card>
      </CardWrap>
      <CardWrap>
        <Card className="img-size">
          <CardImg
            className="img"
            top
            width="100%"
            src={urlImgAurelienFinal}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">Aurelien</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Full stack developer sénior
            </CardSubtitle>
            <CardText>
              Je suis persévérant, tenace et j&apos;aime plus que tout relever
              les défis. S&apos;entrainer sans souffrir c&apos;est comme vivre
              sans rire. Mes sports préférés sont la boxe et le jiu-jitsu.
              Rendez-vous au fight club ;)
            </CardText>
          </CardBody>
        </Card>
      </CardWrap>
      <CardWrap>
        <Card className="img-size">
          <CardImg
            className="img"
            top
            width="100%"
            src={urlImgAdrienFinal}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">Adrien</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Community Manager
            </CardSubtitle>
            <CardText>
              Salut, moi j&apos;aime le rugby et le volley-ball, j&apos;aime
              faire du sport mais rien ne vaut une bonne soirée entre amis. Vous
              pourrez me retrouver surtout en centre-ville de Toulouse en
              espérant partager une séance avec vous !
            </CardText>
          </CardBody>
        </Card>
      </CardWrap>
    </WrapTeam>
  );
};

export default Team;
