import { NavLink, Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { languageChanged } from './languageSlice';
import { i18n } from '@lingui/core';

import { menu } from "./menu"
import Logo from "../../Assets/Logo"
import './style.scss'
import { useEffect } from "react";

const Sidebar = () => {
    const dispatch = useDispatch()
    const {activeLanguage} = useSelector((state:any) => state.language)

    useEffect(() => {
        i18n.activate(activeLanguage)
    }, [activeLanguage])

    return (
        <>
            <aside className="sidebar">
                <Link className="logo" to='/'>
                    <Logo />
                </Link>
                <nav className="menu">
                    {menu.map((item, i) => (
                        <div key={i} className="menu-item">
                            <NavLink className="menu-link" to={item.link}>
                                {item.icon}
                                {item.title()}
                            </NavLink>
                        </div>
                    ))}
                </nav>
                <select name="language" id="language" onChange={(e) => dispatch(languageChanged(e.currentTarget.value))} value={activeLanguage}>
                    <option value="ru">Русский</option>
                    <option value="en">English</option>
                </select>
            </aside>
        </>
    )
}

export default Sidebar