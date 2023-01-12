import NewsItemModel from './utils/NewsItem.model';
import PropTypes from 'prop-types';
import { useState } from 'react';

const NewsItem = ({ newsItem }) => {
    const { webTitle, webPublicationDate, webUrl, thumbnail, bodyText } = newsItem;

    const [isExpanded, setIsExpanded] = useState(false);


    return (
        <main>
            <div onClick={() => { setIsExpanded(!isExpanded) }} className="newsImageHeadline">
                <div className="newsContainer">
                    <div className={webPublicationDate}>
                        <img className="picture" src={thumbnail} alt="from the Guardian website" width="100%" />
                    </div>
                    <div className="newsBox">
                        <a href={webUrl} rel="noopener noreferrer" target="blank"><span className="title">{webTitle}</span></a>
                        <p className="fullArticle">full article</p>

                    </div>
                    {isExpanded ? (<div className="expanded">{bodyText}</div>) : null}
                    {/* ideally I would change this to be a new component and render that here instead */}
                </div>
                <div className="space">

                </div>
                <a href="#top" className="topLink">Back to top</a>
            </div>
        </main>
    );
};


NewsItem.propTypes = {
    newsItem: PropTypes.instanceOf(NewsItemModel)
}


export default NewsItem;

