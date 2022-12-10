import React from 'react';
import EventCard from "../../components/Events/EventCard";
import {fetch} from "next/dist/compiled/@edge-runtime/primitives/fetch";
import {useRouter} from "next/router";

export const getServerSideProps = async ({query: {name = "", status = "", location = "", date = "2022-12-01", category = ""}}) => {
    const res = await fetch(`http://localhost:1337/api/events?filters[title][$containsi]=${name}&filters[status][$containsi]=${status}&filters[region][name][$containsi]=${location}&filters[beginning_date][$gte]=${date}&filters[event_categories][category_name][$containsi]=${category}`)
        .then((res) => res.json())
        .then((res) => res.data)
    const str = '&filters[beginning_date][$qte]=${date}'
    return {
        props: {
            events: res
        }
    }
}

const Events = ({events}) => {

    const router = useRouter()

    return (
        <div className="container">
            <div className="events__page">
                <div className="events__container">
                    {
                        events.length === 0 ?
                            <p>По вашему запросу не найдено ни одного мероприятия</p>
                            :
                            events.map((item) => {
                                return <EventCard
                                    key={item}
                                    id={item.id}
                                    title={item.title}
                                    description={item.short_description}
                                    place={item.place}
                                    date={item.beginning_date}/>
                            })
                    }
                </div>

                <div className="events__filter">
                    <div className="events__filter-item events__filter-title">
                        <p>По названию</p>
                        <input type="text" placeholder="" onChange={(e) => {
                            router.query.name = e.target.value
                            router.push(router)
                        }}/>
                    </div>

                    <div className="events__filter-item events__filter-date">
                        <p>По дате проведения</p>
                        <input type="date" onChange={(e) => {
                            let selectedDate = new Date(e.target.value)
                            router.query.date = e.target.value
                            router.push(router)
                        }}/>
                    </div>

                    <div className="events__filter-item events__filter-location">
                        <p>По административному делению</p>
                        <select defaultValue="Все" onChange={(e) => {
                            router.query.location = e.target.value
                            router.push(router)
                        }}>
                            <option value="">Все</option>
                            <option value="Кызыл">Кызыл</option>
                            <option value="Ак-Довурак">Ак-Довурак</option>
                            <option value="Кызылский кожуун">Кызылский кожуун</option>
                            <option value="Каа-Хемский кожуун">Каа-Хемский кожуун</option>
                            <option value="Пий-Хемский кожуун">Пий-Хемский кожуун</option>
                            <option value="Чаа-Холский кожуун">Чаа-Холский кожуун</option>
                            <option value="Улуг-Хемский кожуун">Улуг-Хемский кожуун</option>
                            <option value="Тандинский кожуун">Тандинский кожуун</option>
                            <option value="Монгун-Тайгинский кожуун">Монгун-Тайгинский кожуун</option>
                            <option value="Бай-Тайгинский кожуун">Бай-Тайгинский кожуун</option>
                            <option value="Барун-Хемчикский кожуун">Барун-Хемчикский кожуун</option>
                            <option value="Сут-Холский кожуун">Сут-Холский кожуун</option>
                            <option value="Дзун-Хемчикский кожуун">Дзун-Хемчикский кожуун</option>
                            <option value="Тес-Хемский кожуун">Тес-Хемский кожуун</option>
                            <option value="Чеди-Холский кожуун">Чеди-Холский кожуун</option>
                            <option value="Овюрский кожуун">Овюрский кожуун</option>
                            <option value="Эрзинский кожуун">Эрзинский кожуун</option>
                            <option value="Тере-Холский кожуун">Тере-Холский кожуун</option>
                            <option value="Тоджинский кожуун">Тоджинский кожуун</option>
                        </select>
                    </div>

                    <div className="events__filter-item events__filter-status">
                        <p>По статусу</p>
                        <select defaultValue="Все" onChange={(e) => {
                            router.query.status = e.target.value
                            router.push(router)
                        }}>
                            <option value="">Все</option>
                            <option value="Ожидается проведение">Ожидается проведение</option>
                            <option value="Завершено">Завершено</option>
                        </select>
                    </div>

                    <div className="events__filter-item events__filter-status">
                        <p>По категории</p>

                        <select defaultValue="Все" onChange={(e) => {
                            router.query.category = e.target.value
                            router.push(router)
                        }}>
                            <option value="">Все</option>
                            <option value="Основные мероприятия">Основные мероприятия</option>
                            <option value="Культурный Новый год">Кульурный Новый год</option>
                            <option value="Безопасный Новый год">Безопасный Новый год</option>
                            <option value="Здоровый Новый год">Здоровый Новый год</option>
                            <option value="Спортивный новый год">Спортивный новый год</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;
