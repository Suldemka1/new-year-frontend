import React from 'react';
import Link from "next/link"
import Image from "next/image";
import {FaRegEye} from "react-icons/fa";

const Header = () => {
    return (
        <header>
            <header>
                <div className="container">
                    <div className="header__content">
                        <div className="logo">
                            <Image src="/tuvan_herb.png" width={75} height={75}/>
                            <h1>Новогодний портал Республики Тыва</h1>
                        </div>

                        <ul className="menu">
                            <li className="menu__item">
                                <Link href="/">Главная</Link>
                            </li>
                            <li className="menu__item">
                                <Link href="/events">Мероприятия</Link>
                            </li>
                            <li className="menu__item">
                                <Link href="/news">Новости</Link>
                            </li>
                            <li className="menu__item">
                                <FaRegEye  id="specialButton" size="30px"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </header>
    );
};

export default Header;
