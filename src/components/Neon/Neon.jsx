import React from 'react';
import './Neon.css';

const Neon = () => {
  return (
    <div className="neon-wrapper">
      <h1 className="flex-center flex-wrap">
        {/* <span className="glowing">NEON TE</span>
        <span className="broken glowing">X</span>
        <span className="glowing">T IDK</span> */}

        <span className="glowing">NEON&nbsp;</span>
        <div>
          <span className="glowing"> LI</span>
          <span className="broken glowing">G</span>
          <span className="glowing">HTS</span>
        </div>
      </h1>
      <div className="flex-center">
        <p className="sub-header">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corporis, earum facere nobis
          soluta nihil accusamus explicabo exercitationem voluptatem magnam aspernatur deserunt.
        </p>
      </div>
      <div className="flex-center gap-small flex-wrap hero-buttons">
        <a href="">Renaissance</a>
        <a href="">Roman</a>
        <a href="">Gothic</a>
        <a href="">Modernism</a>
      </div>
      <div className="gradient-element"></div>
      <div className="flex main-wrapper">
        <div className="main-text">
          <p className>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod veritatis odit suscipit
            qui deserunt aut corrupti soluta illum. Ipsam accusamus in veritatis temporibus minima
            iste earum tenetur dolore commodi voluptatibus accusantium repellat rerum voluptate quae
            laboriosam placeat, maxime voluptatum laudantium deserunt sunt aliquid. Quasi doloribus
            nihil et. Ipsum aliquid incidunt amet natus exercitationem nulla labore voluptatibus
            eaque cupiditate facilis, praesentium inventore harum quos hic earum vitae qui vel?
          </p>
          <p className>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nemo mollitia incidunt
            obcaecati laboriosam tempore suscipit expedita maiores ratione nesciunt?
          </p>
        </div>

        <img src="src\images\neon-gas.jpg" alt="Neon gas" />
      </div>
    </div>
  );
};

export default Neon;
