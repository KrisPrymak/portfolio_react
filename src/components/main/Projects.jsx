import React from "react";
import "./../../style.scss";
import kanbanImg from "./../../media/kanban.png";
import catImg from './../../media/cats.png';
import noemiImg from './../../media/noemi.png';
import repairImg from './../../media/repair.png';
import todoImg from './../../media/todo.png';
import beautyImg from './../../media/beauty.png';
import lkImg from './../../media/lk.png';
import networkImg from './../../media/social.png';
import gamesImg from './../../media/gamesImg.png';

const Projects = () => {
  const icons = {
    html: "https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
    css: "https://cdn-icons-png.flaticon.com/512/888/888847.png",
    scss: "https://cdn-icons-png.flaticon.com/512/919/919831.png",
    react: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
    redux:
      "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
    rt: "",
    mui: "https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png",
    jest: "",
    js: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    ts: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
  };
  const projects = [
    {
      id: (Math.random() * new Date()).toFixed(),
      title: "Kanban",
      img: kanbanImg,
      codeLink: "https://github.com/KrisPrymak/kanban_react",
      pageLink: "https://krisprymak.github.io/kanban_react/",
      stack: [icons.scss, icons.react, icons.redux, icons.js],
    },
    {
      id: (Math.random() * new Date()).toFixed(),
      title: "Games (canvas/js)",
      img: gamesImg,
      codeLink: "https://github.com/KrisPrymak/slider_js",
      pageLink: 'https://krisprymak.github.io/slider_js/',
      stack: [icons.html, icons.css, icons.js],
    },
    {
      id: (Math.random() * new Date()).toFixed(),
      title: "Личный кабинет",
      img: lkImg,
      codeLink: "https://github.com/KrisPrymak/lk_work",
      pageLink: "https://krisprymak.github.io/lk_work/",
      stack: [icons.react, icons.redux, icons.js],
    },
    {
        id: (Math.random() * new Date()).toFixed(),
        title: "Cat shop block",
        img: catImg,
        codeLink: "https://github.com/KrisPrymak/cat_shop_react_ts",
        pageLink: "https://krisprymak.github.io/kanban_react/",
        stack: [icons.react, icons.scss, icons.ts],
      },
    {
        id: (Math.random() * new Date()).toFixed(),
        title: "Blog Noemi",
        img: noemiImg,
        codeLink: "https://github.com/KrisPrymak/Noemi",
        pageLink: "https://krisprymak.github.io/Noemi/",
        stack: [icons.html, icons.css],
      },
      {
        id: (Math.random() * new Date()).toFixed(),
        title: "Repair project",
        img: repairImg,
        codeLink: "https://github.com/KrisPrymak/repairs_project",
        pageLink: "https://krisprymak.github.io/repairs_project/",
        stack: [icons.html, icons.scss, icons.js],
      },
      {
        id: (Math.random() * new Date()).toFixed(),
        title: "Todo list",
        img: todoImg,
        codeLink: "https://github.com/KrisPrymak/todo_redux_toolkit",
        pageLink: "https://krisprymak.github.io/todo_redux_toolkit/",
        stack: [icons.react, icons.redux, icons.js, icons.css],
      },
      {
        id: (Math.random() * new Date()).toFixed(),
        title: "Beauty layout",
        img: beautyImg,
        codeLink: "https://github.com/KrisPrymak/beauty_layout",
        pageLink: "https://krisprymak.github.io/beauty_layout/",
        stack: [icons.html, icons.scss],
      },
      {
        id: (Math.random() * new Date()).toFixed(),
        title: "Social network",
        img: networkImg,
        codeLink: "https://github.com/KrisPrymak/forest_network",
        pageLink: null,
        stack: [icons.react, icons.redux, icons.ts, icons.css],
      },
  ];
  console.log(kanbanImg);
  console.log(projects[0].img);
  return (
    <div className="projects">
      {projects.map((item) => {
        return (
          <div key={item.id} className="projects__item">
            <h2>{item.title}</h2>
            <p className="projects__img-container"><img className="projects__img"  src={item.img} alt="project" /></p>
            <a className="projects__link" href={item.codeLink} target="_blank" rel="noopener noreferrer">Посмотреть код</a>
            {item.pageLink && <a className="projects__link" href={item.pageLink} target="_blank" rel="noopener noreferrer">Перейти на сайт</a>}
            <div className="projects__stack">
            {item.stack.map((icon) => {
              return (
                  <img className="projects__icon" src={icon} alt="stack icon" />
              );
              
            })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
