import React from 'react';
import Image from "next/image";
import Link from "next/link"

const EventCategories = (props) => {
    return (
        <div>
            <div className="heading">
                <h2>По категориям</h2>
            </div>

            <div className="category__container">
                {
                    props.data.map((item) => {
                        return (
                            <div key={item.id} className="category__card">
                                <div className="category__card-title">
                                    <h2>{item.category_name}</h2>
                                </div>
                                <div className="responsive-image-container">
                                    <Image src="/sport.jpeg" layout="fill" className="" objectFit="cover"/>
                                </div>
                                <div>
                                    <Link href={`/events?category=${item.category_name}`} className="category__card-button button">Мероприятия</Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>


    );
};

export default EventCategories;
