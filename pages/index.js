import dynamic from "next/dynamic";
import Image from "next/image";
import UpcomingEvents from "../components/Events/UpcomingEvents";
import EventCategories from "../components/Events/EventCategories";
import LastNews from "../components/News/LastNews";

export const getServerSideProps = async () => {
    const categories = await fetch(`http://api.new.year.portal.rtyva.ru/api/event-categories`)
        .then((res) => res.json())
        .then((res) => res.data)

    const lastNews = await fetch(`http://api.new.year.portal.rtyva.ru/api/posts?sort[0]=publishedAt%3Adesc&pagination[limit]=5&populate=*`)
        .then((res) => res.json())
        .then((res) => res.data)

    const upcomingEvents = await fetch(`http://api.new.year.portal.rtyva.ru/api/events?pagination[limit]=3&sort[0]=beginning_date%3Aasc&populate[status][$eq]=Ожидает+проведения`)
        .then((res) => res.json())
        .then((res) => res.data)

    return {
        props: {
            upcomingEvents,
            lastNews,
            categories
        }
    }
}

const DynamicCountdown = dynamic(() => import("../components/Countdown"), {
    ssr: false
})

export default function Home({categories, lastNews, upcomingEvents}) {
    return (
        <div>
            <div className="container">

                <div className="congratulations">
                    <h1 className="congratulations__text">С наступающим 2023 годом!</h1>
                    <DynamicCountdown/>
                </div>

                <div className="head__appeal">
                    <h2>Уважаемые граждане!</h2>

                    <div className="head__appeal-content">
                        <p className="head__appeal-text">
                            Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей
                            активности играет важную роль в формировании системы обучения кадров, соответствует насущным
                            потребностям. Идейные соображения высшего порядка, а также рамки и место обучения кадров
                            требуют
                            от нас анализа соответствующий условий активизации. Разнообразный и богатый опыт
                            консультация с
                            широким активом способствует подготовки и реализации существенных финансовых и
                            административных
                            условий.

                            Таким образом укрепление и развитие структуры в значительной степени обуславливает создание
                            направлений прогрессивного развития. Повседневная практика показывает, что реализация
                            намеченных
                            плановых заданий позволяет выполнять важные задания по разработке направлений прогрессивного
                            развития. Таким образом начало повседневной работы по формированию позиции способствует
                            подготовки и реализации соответствующий условий активизации. Таким образом новая модель
                            организационной деятельности позволяет выполнять важные задания по разработке системы
                            обучения
                            кадров, соответствует насущным потребностям. Разнообразный и богатый опыт постоянный
                            количественный рост и сфера нашей активности играет важную роль в формировании новых
                            предложений.
                        </p>

                        <div className="head__appeal-img">
                            <Image src="/glava.jpg" width={250} height={375}/>
                        </div>
                    </div>

                </div>

                <div>
                    <LastNews data={lastNews}/>
                </div>

                <div className="heading">
                    <h2>Новогоднее видеопоздравление правительства Республики Тыва</h2>
                </div>

                <video controls={true}>
                    <source src="/video.mp4" type="video/mp4"/>
                </video>

                <div>
                    <UpcomingEvents data={upcomingEvents}/>
                </div>

                <div>
                    <EventCategories data={categories}/>
                </div>

            </div>
        </div>
    )
}
