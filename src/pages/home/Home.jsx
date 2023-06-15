import Button from "../../components/button/Button";
import appleIcon from "../../multimedia/apple-logo-30.png";
import gPlayIcon from "../../multimedia/google-play-30.png";
import CardItem from "../../components/card/CardItem";
import cardImg1 from "../../multimedia/identify-goals.png";
import mobileImg from "../../multimedia/header-iphone.png";

import "./home.css";

function Home() {
  return (
    <>
      <section className="home-container-info">
        <h1 className="home-container-info-title">Mobile App Landing Page</h1>
        <p className="home-container-info-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis,
          possimus! Soluta dicta debitis quia suscipit consequuntur eos enim
          voluptatum optio consectetur molestiae ducimus dolorem doloribus
          excepturi sapiente, vitae itaque quasi.
        </p>
      </section>
      <section className="home-container-buttons">
        <Button btnImage={appleIcon} btnName="DOWNLOAD" />
        <Button btnImage={gPlayIcon} btnName="DOWNLOAD" />
      </section>
      <section className="home-container-mobile">
        <img src={mobileImg} className="home-mobile-img"/>
      </section>
      <section className="home-container-functions">
        <CardItem
          className="identifyBkgd"
          cardImg={cardImg1}
          cardTxt="Identify Goals"
        />
        <CardItem
          className="identifyBkgd"
          cardImg={cardImg1}
          cardTxt="Situation Analysis"
        />
        <CardItem
          className="identifyBkgd"
          cardImg={cardImg1}
          cardTxt="Tasks Settings"
        />
        <CardItem
          className="identifyBkgd"
          cardImg={cardImg1}
          cardTxt="Social Interaction"
        />
        <CardItem
          className="identifyBkgd"
          cardImg={cardImg1}
          cardTxt="Get Things Done"
        />
      </section>
    </>
  );
}

export default Home;
