import React from 'react';
import styles from "./post-card.module.css"
import Image from "next/image";
import imageLoader from "../../../loader";

const PostCard = ({title, short_description, preview_image, pusblishedAt}) => {
    return (
        <div className={styles.card}>
            <div className={styles.card__image}>
                <Image loader={imageLoader} src={preview_image.url} width={300} height={200} objectFit="cover"/>
            </div>

            <div className={styles.card__content}>
                <div className={styles.card_header}>
                    {title}
                </div>
                <div className={styles.card_body}>
                    <div>
                        {short_description}
                    </div>
                </div>
                <div>
                    <div className={styles.card_footer}>
                        {pusblishedAt}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PostCard;
