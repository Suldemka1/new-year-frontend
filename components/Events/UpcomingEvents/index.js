import React from 'react';
import Link from "next/link";

const UpcomingEvents = (props) => {
    return (
        <div>
            <div className="heading">
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <h2>
                        Ближайшие мероприятия
                    </h2>
                    <Link href="/events">все мероприятия</Link>
                </div>
            </div>

            <div className="upcoming-events">
                {
                    props.data.map((item) => {

                        const date = new Date(item.beginning_date)
                        const timestamp = date.valueOf()

                        return (
                            <div className="upcoming-events__card" key={item}>
                                <div className="upcoming-events__card-header">
                                    <h3>{String(item.title).substring(0, 30)}...</h3>
                                </div>

                                <div className="upcoming-events__card-body">
                                    Значимость этих проблем настолько очевидна, что постоянный количественный рост и
                                    сфера нашей активности играет важную роль в формировании системы обучения кадров,
                                    соответствует насущным потребностям. Идейные соображения высшего порядка
                                </div>

                                <div className="upcoming-events__card-footer">
                                    <div>
                                        <div>
                                            {new Intl.DateTimeFormat("ru-RU", { year: "numeric", month: 'long', day: 'numeric' }).format(timestamp)}
                                        </div>
                                        <div>
                                            Дворец молодежи
                                        </div>
                                    </div>
                                    <div className="upcoming-events__card-footer__button">
                                        <button className="button">Подробнее</button>
                                    </div>
                                </div>
                            </div>)

                    })
                }


            </div>

        </div>
    );
};

export default UpcomingEvents;
