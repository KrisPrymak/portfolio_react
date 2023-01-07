import React from 'react';
import { useState } from 'react';
import socialNetwork from './../media/socialNetwork.jpg';
import todo from './../media/todo.jpg';
import kanban from './../media/kanban.jpg';

const ReactProjects = () => {
    const [projects, setProjects] = useState([
        {id: 11, name: 'Kanban board', link: 'https://krisprymak.github.io/kanban_react/', src: {kanban}},
        {id: 12, name: 'Todo list', link: 'https://krisprymak.github.io/todo_list/', src: {todo}},
        {id: 13, name: 'Social network', link: 'https://github.com/KrisPrymak/forest_network/', src: {socialNetwork}},
    ])
    return (
        <div>
            {projects.map(p => {
                return (
                    <div className='list'>
                        <a className='itemList reactList' href={p.link}>{p.name}</a>
                    </div>
                )
            })}
        </div>
    );
};

export default ReactProjects;
