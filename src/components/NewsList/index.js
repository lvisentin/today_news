import React, { useEffect, useState } from 'react'
import NewsController from '../../controllers/NewsController';
import NotFound from '../../shared/NotFound';
import News from '../News';
import './index.scss';
import ClipLoader from "react-spinners/ClipLoader";

function NewsList(props) {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // setLoading(true);
        // setTimeout(() => {
        //     setLoading(false);
        // }, 5000)
        changeContent(props.searchContent)
    }, [props.searchContent]);

    const changeContent = async (searchTerm) => {
        setLoading(true);
        if (searchTerm && searchTerm.length > 0) {
            const news = await NewsController.getSearch(searchTerm);
            setNews(news.data.articles);
            setLoading(false);
        } else {
            const news = await NewsController.getNews();
            setNews(news.data.articles);
            setLoading(false);
        }
    };

    return (
        <div>
            {
                loading ?
                    <div className="loading">
                        <ClipLoader color={"#999998"} loading={loading} size={150} />
                    </div>
                    : <div className="news-list">
                        {news && news.map((news, key) => (
                            <News key={key} news={news} />
                        ))}
                    </div>
            }
        </div>
        // <NotFound />
    )
}

export default NewsList
