import React from 'react';
import { useState } from 'react';
import Slide from './Slide';

const Landings = () => {
    const [landings, setLandings] = useState([
        {id: 17, srcImg: 'https://github.com/KrisPrymak/web_portfolio/blob/main/media/repairs.png?raw=true', link: 'https://krisprymak.github.io/repairs_project/', isActive: true},
        {id: 18, srcImg: 'https://github.com/KrisPrymak/web_portfolio/blob/main/media/cristmas.jpg?raw=true', link: 'https://krisprymak.github.io/christmas/', isActive: false},
        {id: 19, srcImg: 'https://github.com/KrisPrymak/web_portfolio/blob/main/media/noemi.jpg?raw=true', link: 'https://krisprymak.github.io/Noemi/', isActive: false},
    ])

    const changeSlide = (slide) => {
        setLandings([...landings.map(b => b.isActive ? {...b, isActive: false} : b)])
        setLandings(prevLandings => [...prevLandings.map(b => b.id === slide ? {...b, isActive: true} : b)])
    }
    
    return (
        <div class="landings">
            <div class="landings__container">
            {landings.map(l => {
                return (
                    <div className={l.isActive ? 'landingsSlide active' : 'landingsSlide'} style={{backgroundImage: `url(${l.srcImg})`}} onClick={() => {changeSlide(l.id)}}>
                    <Slide key={l.id} style={l.style} link={l.link} text='Перейти на страницу' divClass='landingsSlide' h3Class='landingsSlide__title' aClass='landingsSlide__link'/>
                    </div>
                )
            })}
                </div>
            </div>
    );
};

export default Landings;
