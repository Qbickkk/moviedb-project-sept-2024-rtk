import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import ReactSwitch from "react-switch";

import css from './Header.module.css'
import {Search} from "../../SearchContainer/Search";
import '../../../index.css'

const Header = () => {

    const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || 'light');
    const [trig, setTrig] = useState<boolean>(false);

    const changeTrig = () => {
        setTrig(prevState => !prevState)
    }
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        changeTrig();
        localStorage.setItem('theme', newTheme);
    };


    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div className={css.Header}>
            <div className={css.HeaderBanner}>
                <h1>Qbickkk</h1>
            </div>
            <div className={css.Nav}>
                <div className={css.Title}>TheMovieDB</div>
                <div className={css.Links}>
                    <NavLink to={'movies'}>Movies</NavLink>
                    <NavLink to={'genres'}>Genres</NavLink>
                    <Search/>
                </div>
                <ReactSwitch
                    checked={trig}
                    onChange={toggleTheme}
                    onColor="#86d3ff"
                    onHandleColor="#2693e6"
                    handleDiameter={30}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                    height={20}
                    width={48}
                    className="react-switch"
                    id="material-switch"
                />
                <img className={css.User} src={'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt={'user'}/>
            </div>
        </div>
    );
};

export {Header};

