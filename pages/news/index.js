import React from 'react';
import PostCard from "../../components/Posts/PostCard";
import TagsMenu from "../../components/News/TagsMenu";

export const getServerSideProps = async () => {
    const posts = await fetch(`http://api.new.year.portal.rtyva.ru/api/posts?populate=*`)
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
            <TagsMenu />
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
