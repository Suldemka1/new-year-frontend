import React, {useEffect, useRef, useState} from 'react';

const tags = [
    "Основные мероприятия",
    "Спортивный Новый год",
    "Культурный новый год",
    "Здоровый новый год",
    "Безопасный новый год",
]

const TagsMenu = () => {
    const [active, setActive] = useState(null)
    const [isDown, setIsDown] = useState(false)
    const [startX, setStartX] = useState();
    const [scrollLeft, setScrollLeft] = useState();
    const ref = useRef()

    useEffect(() => {

    }, [])

    const scrollToLeft = () => {
        const slider = document.querySelector('.tags__menu');
        return slider.offsetLeft
    }

    return (
        <div className="tags__menu" ref={ref}>
            {
                tags.map((item, index) => {

                        return <span key={index}
                                     className={`tags__item ${active === index ? "active" : null}`}

                                     onMouseDown={(e) => {
                                         setIsDown(true);
                                         setActive(index)
                                         const x = scrollToLeft()
                                         setStartX(e.pageX - x)
                                         setScrollLeft(scrollToLeft())
                                         console.log('mousedown')
                                     }}

                                     onDragStart={() => {
                                         setIsDown(true);
                                         setActive(index)
                                         const x = scrollToLeft()
                                         setStartX(e.pageX - x)
                                         setScrollLeft(scrollToLeft())
                                         console.log('dragging started')
                                     }}

                                     onMouseLeave={() => {
                                         setIsDown(false);
                                         setActive(null)
                                     }}

                                     onMouseUp={() => {
                                         setIsDown(false);
                                     }}

                                     onDragEnd={() => {
                                         setIsDown(false);
                                         setActive(null)
                                     }}

                                     onDrag={(e) => {
                                         if (!isDown) return
                                         e.preventDefault();
                                         const x = e.pageX - scrollToLeft();
                                         const walk = (x - startX) * 2; //scroll-fast
                                         setScrollLeft((prev) => prev - walk)
                                         // console.log(walk);
                                         console.log('dragging started')
                                     }}



                                     onMouseMove={(e) => {
                                         if (!isDown) return
                                         e.preventDefault();
                                         const x = e.pageX - scrollToLeft();
                                         const walk = (x - startX) * 2; //scroll-fast
                                         setScrollLeft((prev) => prev - walk)
                                         // console.log(walk);
                                     }}
                        >
                        {item}
                    </span>
                    }
                )
            }
            <span className="tags__item"
            >

            </span>


        </div>
    );
};

export default TagsMenu;
