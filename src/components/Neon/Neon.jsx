import React, { useState } from 'react';
import './Neon.css';
import Card from '../Card/Card';

const Neon = () => {
  const headerText = 'NEON LIGHTS';

  const headerArray = headerText.split('');

  const [classNames, setClassNames] = useState(Array(headerArray.length).fill('glow'));

  const handleHeaderCLick = (newClass, id) => {
    const newClassNames = classNames;
    newClassNames[id] = newClass;
    setClassNames(newClassNames);
    console.log(classNames);
  };

  return (
    <div className="neon-wrapper">
      <h1 className="flex-center flex-wrap">
        {/* <span className="glowing">NEON TE</span>
        <span className="broken glowing">X</span>
        <span className="glowing">T IDK</span> */}

        {/* <span className="glowing">NEON&nbsp;</span> */}
        <div>
          {headerArray.map((e, id) => {
            return (
              <span className={classNames[id]} onClick={() => handleHeaderCLick('glow broken', id)}>
                {e}
              </span>
            );
          })}
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
      <div className="flex-center main-wrapper">
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

        <img src="src\images\neon-gas.jpg" alt="Neon gas" className="main-img" />
      </div>

      <h2>Gallery</h2>
      <div className="flex cards">
        <Card header={'SomeCard'} img="//unsplash.it/300/300" url={''} />
        <Card header={'SomeCard'} img="//unsplash.it/301/300" url={''} />
        <Card header={'SomeCard'} img="//unsplash.it/302/300" url={''} />
        <Card header={'SomeCard'} img="//unsplash.it/303/300" url={''} />
        <Card header={'SomeCard'} img="//unsplash.it/304/300" url={''} />
        <Card header={'SomeCard'} img="//unsplash.it/305/300" url={''} />
        <Card header={'SomeCard'} img="//unsplash.it/306/300" url={''} />
        <Card header={'SomeCard'} img="//unsplash.it/307/300" url={''} />
        <Card header={'SomeCard'} img="//unsplash.it/308/300" url={''} />
        <Card header={'SomeCard'} img="//unsplash.it/309/300" url={''} />
        <Card header={'SomeCard'} img="//unsplash.it/310/300" url={''} />
        <Card header={'SomeCard'} img="//unsplash.it/311/300" url={''} />
      </div>
    </div>
  );
};

export default Neon;
