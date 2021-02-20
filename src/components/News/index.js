import React from 'react'
import './index.scss';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

function News(props) {
    console.log(props)

    return (
        <div className="news">
            <div className="news-image" style={{
            backgroundImage: `url(${props.news.urlToImage})`
        }}>
                {/* <img src={props.news.urlToImage} /> */}
            </div>
            <div className="news-information">
                <h2 className="news-title"> {props.news.title} </h2>
                <p className="news-description"> {props.news.description} </p>

                <div className="separator" />
                <div className="news-footer">
                    <div className="author-info">
                        <p className="written-by">
                            Escrito por
                    </p>
                        <p className="author-name">{props.news.author}</p>
                    </div>
                    <div className="read-more-div">
                        <a href={props.news.url} className="read-more">
                            Ler mais <KeyboardArrowRightIcon />
                        </a>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default News
