import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";

const LastNews = (props) => {

    const router = useRouter()

    return (<div className="last-news">
        <div className="heading">
            <div>
                <h1>Новости</h1>
                <Link href="/news">все новости</Link>
            </div>
        </div>

        <div className="last-news__container">
            {props.data.map((item) => {

                const date = new Date(item.publishedAt)
                const timestamp = date.valueOf()

                return (
                    <div key={item} className="last-news__card">

                        <div className="responsive-image-container">
                            <Image src={"http://api.new.year.portal.rtyva.ru"+item.preview_image.url} layout="fill" objectFit="cover"/>
                        </div>

                        <div className="last-news__card-content__container">
                            <div className="last-news__card-content">
                                <div className="last-news__card-title" onClick={() => router.push(`/news/${item.id}`)}>
                                    {item.title}
                                </div>
                                <div className="last-news__card-date">
                                    {new Intl.DateTimeFormat("ru-RU", { month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }).format(timestamp)}
                                </div>
                            </div>
                        </div>

                    </div>)
            })}
        </div>

    </div>);
};

export default LastNews;
