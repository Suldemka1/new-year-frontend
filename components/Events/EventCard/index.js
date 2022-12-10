import React from 'react';
import Link from "next/link"
import {IoLocation, IoTime} from "react-icons/io5";

const EventCard = ({id, title, description, date, place}) => {
    return (
        <div>
            <div className="card">
                <div className="card__header"><p>{title}</p></div>
                <div className="card__body">{description}</div>
                <div className="card__footer">
                    <div className="card__footer-info">
                        <div className="card__footer-date">
                            <IoTime size="25px"/>
                            <p>{date}</p>
                        </div>
                        <div className="card__footer-place">
                            <IoLocation size="25px"/>
                            <p>{place}</p>
                        </div>
                    </div>
                    <div>
                        <Link className="button" href={`/events/${id}`}>Перейти</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
