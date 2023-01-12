import NewsItem from './NewsItem';
import NewsItemModel from './utils/NewsItem.model';
import PropTypes from 'prop-types';

const AllNewsItems = ({ newsData }) => {

    const allNewsItems = newsData.map(aNewsItem => {
        const { webTitle, webPublicationDate, webUrl, fields } = aNewsItem;
        const newsItem = new NewsItemModel(webTitle, webPublicationDate, webUrl, fields.thumbnail, fields.bodyText);
        return <NewsItem newsItem={newsItem} key={webUrl} />
    });


    return (
        <main>
            <div className="row">

                <ul>
                    <li>{allNewsItems}</li>
                </ul>

            </div>

        </main >
    )
};

AllNewsItems.propTypes = {
    newsData: PropTypes.array.isRequired
}


export default AllNewsItems;