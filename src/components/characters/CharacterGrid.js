import React from 'react';
import moneyheist from '../../moneyHeist.json';
//import song from '../../img/songs_Home.mp3';

const CharacterGrid = () => {
  //<h1>{money.alias}</h1>
  return (
    <div className="cards">
      {moneyheist.map(money => {
        return (
          <div className="card" key={money.id}>
            <div className="card-inner">
              <div className="card-front">
                <img
                  src={
                    money
                      ? money.image
                      : 'https://dummyimage.com/1080x1580/edeaed/fff.png&text=Image+Not+Available'
                  }
                  alt=""
                />
              </div>
              <div className="card-back">
                <h1>{money.name}</h1>
                <ul>
                  <li>
                    <strong>Actor Name:</strong> {money.played_by}
                  </li>
                  <li>
                    <div className="nickname">
                      <strong>Nickname:</strong> {money.alias}
                    </div>
                  </li>
                  <li>
                    <strong>Occupation:</strong> {money.occupation}
                  </li>
                  <li>
                    <strong>Gender:</strong> {money.gender}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CharacterGrid;
