import Button from "../../components/button/Button";
import appleIcon from "../../multimedia/apple-logo-30.png";
import gPlayIcon from "../../multimedia/google-play-30.png";
import CardItem from "../../components/card/CardItem";
import cardImg1 from "../../multimedia/identify-goals.png";
import cardImg2 from "../../multimedia/situation-analysis.png";
import cardImg3 from "../../multimedia/task-settings.png";
import cardImg4 from "../../multimedia/social-interaction.png";
import cardImg5 from "../../multimedia/get-things-done.png";
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
        <Button btnImage={appleIcon} btnName="DOWNLOAD" style="btn-pink" />
        <Button btnImage={gPlayIcon} btnName="DOWNLOAD" style="btn-pink"/>
      </section>
      <section className="home-container-mobile">
        <img src={mobileImg} className="home-mobile-img"/>
      </section>
      <section className="home-container-functions">
        <CardItem
          style="identify-icon"
          cardImg={cardImg1}
          cardTxt="Identify Goals"
        />
        <CardItem
          style="situation-icon"
          cardImg={cardImg2}
          cardTxt="Situation Analysis"
        />
        <CardItem
          style="tasks-icon"
          cardImg={cardImg3}
          cardTxt="Tasks Settings"
        />
        <CardItem
          style="social-icon"
          cardImg={cardImg4}
          cardTxt="Social Interaction"
        />
        <CardItem
          style="get-icon"
          cardImg={cardImg5}
          cardTxt="Get Things Done"
        />
      </section>
    </>
  );
}

export default Home;
