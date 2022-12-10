import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer__content">
                    <div>
                        <div className="footer__content-logo">
                            <img src="/tuvan_herb.png" width="60px" height="60px"/>
                            <h2>Правительство республики Тыва</h2>
                        </div>

                        <div className="sitemap">
                            <Link href="/">Правительство Республики Тыва</Link>
                            <Link href="/">Мэрия города Кызыла</Link>
                            <Link href="/">Министерство цифрового развития</Link>
                            <Link href="/">Министерство экономического развития</Link>
                            <Link href="/"></Link>
                        </div>

                        <div>
                            <p>Сайт разработна КП РТ &quot;ЦИТ РТ&quot;</p>
                        </div>
                    </div>
                    <div className="sitemap">
                        <h3>Мероприятия</h3>
                        <Link href="/">Основные мероприятия</Link>
                        <Link href="/">Культурный Новый год</Link>
                        <Link href="/">Спортивный Новый год</Link>
                        <Link href="/">Здоровый Новый год</Link>
                        <Link href="/">Здоровый Новый год</Link>
                    </div>
                    <div>
                        <div className="sitemap">
                            <h3>Карта сайта</h3>
                            <Link href="/">Главная</Link>
                            <Link href="/">Мероприятия</Link>
                            <Link href="/">Новости</Link>
                            <Link href="/">Контакты</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
