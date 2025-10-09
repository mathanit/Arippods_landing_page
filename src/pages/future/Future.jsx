import React from "react";
import "./Future.css";
import image1 from '../../assets/img/about/card_noise_cancellation.jpg';
import image2 from '../../assets/img/about/card_spatial_audio__uga42js3h4ya_large.jpg';
import image3 from '../../assets/img/about/card_hearing_health__ss2uxyv3j5m6_large.jpg';
import image4 from '../../assets/img/about/hey_siri.gif';
import image5 from '../../assets/img/about/card_iphone__c7gcuw15pxiu_large.jpg';

const cards = [
  {
    title: "Active Noise Cancellation",
    text: "Control what you hear. And what you don’t.",
    img: image1,
    alt: "Active Noise Cancellation reduces unwanted sounds so you can immerse yourself in what you’re listening to or simply stay focused. And Transparency lets you comfortably hear the world around you."
  },
  {
    title: "Personalised Spatial Audio",
    text: "Immersive sound. Fine‑tuned to you.",
    img:image2,
    alt: "Personalised Spatial Audio brings you 3D sound suited to your specific ear shape for a theatre-like experience that surrounds you with sound.3"
  },
  {
    title: "Hearing Health",
    text: "Minimise your exposure to loud noise.",
    img: image3,
    alt: "With AirPods Pro 3, Loud Sound Reduction minimises your exposure to loud environmental noise.Feature availability varies by region."
  },
  {
    title: "Siri",
    text: "Your always-on intelligent assistant.",
    img:image4,
    alt: "Live Translation lets you communicate across languages like never before. While having a conversation with someone."
  },
  {
    title: "Magical Experience",
    text: "Simply effortless.",
    img:image5,
    alt: "With AirPods Pro 3, Loud Sound Reduction minimises your exposure to loud environmental noise.Feature availability varies by region."
  }
];

 function Future() {
  return (
    <section id="future" className="future">
      <div className="future-content">
        <span>Get to know AirPods.</span>
      </div>

      <div className="cards">
        {cards.map((card, idx) => (
          <article className="future-card" key={idx} aria-labelledby={`card-title-${idx}`}>
            <div className="card-text">
              <h1 id={`card-title-${idx}`}>{card.title}</h1>
              <p>{card.text}</p>
            </div>
            <div className="card-image">
              <img src={card.img} alt={card.alt} />
            </div>
            <div><h1 className="alt">{card.alt}</h1></div>
          </article>
        ))}
      </div>
    </section>
  );
}
export default Future;
