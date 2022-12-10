import React from 'react';
import PostCard from "../../components/Posts/PostCard";

export const getServerSideProps = async () => {
    const posts = await fetch(`http://localhost:1337/api/posts?populate=*`)
        .then((res) => res.json())
        .then((res) => res.data)

    return {
        props: {
            posts
        }
    }
}

const News = ({posts}) => {
    return (
        <div className="container">
            {
                posts.map((item) => {
                    return <PostCard
                        key={item.id}
                        title={item.title}
                        short_description={item.short_description}
                        preview_image={item.preview_image}
                        pusblishedAt={item.publishedAt}/>
                })
            }
        </div>
    );
};

export default News;
