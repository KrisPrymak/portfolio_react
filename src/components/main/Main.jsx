import React from "react";
import { useState } from "react";
import List from "./List";
import selfyImg from './../../media/selfy3.png';
import shapeImg from './../../media/shape.png';

const Main = () => {
  const [tecnologies] = useState({
          id: 1,
          main: [
            { id: 2, name: "HTML", src: 'https://cdn-icons-png.flaticon.com/512/5968/5968267.png' },
            { id: 3, name: "CSS", src: 'https://cdn-icons-png.flaticon.com/512/888/888847.png' },
            { id: 4, name: "JS", src: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
            { id: 33, name: "TS", src: 'https://cdn-icons-png.flaticon.com/512/5968/5968381.png' },
            { id: 5, name: "React", src: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png' },
            { id: 34, name: "Redux, Redux Toolkit", src: 'https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg' },
            { id: 6, name: "Sass, Less, БЭМ", src: 'https://cdn-icons-png.flaticon.com/512/919/919831.png' },
            { id: 35, name: "Material-UI", src: 'https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png' },
            { id: 7, name: "Git, Jira, YouTrack, Scrum", src: 'https://cdn-icons-png.flaticon.com/512/4926/4926625.png' },
          ],
          extra: [
            {
              id: 8,
              name: "English and Spanish - Intermediate",
              src: 'https://cdn-icons-png.flaticon.com/512/3269/3269817.png',
            },
            {
              id: 9,
              name: "Love animals and travels",
              src: 'https://cdn-icons-png.flaticon.com/512/761/761488.png',
            },
            {
              id: 10,
              name: "Incurable optimist",
              src: 'https://cdn-icons-png.flaticon.com/512/6807/6807885.png',
            },
          ],
        },
  );

  return (
    <main className="main">
      <div className="main-description">
        <List arrayList={tecnologies.main} listTitle="Development stack:" />
        <List arrayList={tecnologies.extra} listTitle="Also:" />
      </div>

      <img src={shapeImg} alt="round" className="main-round" />

      <div className="main-text">
        <h1 className="main-text__name">Kristina Priimak</h1>
        <p className="main-text__place">Frontend developer</p>
      </div>

      <div className="main-aside">
        <div className="main-aside__box">
          <img
            src={selfyImg}
            alt="selfy"
            className="main-aside__box-img"
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
