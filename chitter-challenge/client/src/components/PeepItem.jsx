import PeepItemModel from './utils/PeepItem.model.js';
import PropTypes from 'prop-types';

const PeepItem = ({ peepItem }) => {
    const { _id, peepMessage, peepDateCreated, name, userHandle } = peepItem;
    const dateCreatedString = new Date(peepDateCreated).toUTCString().slice(0, 22);


    return (

        <main className={_id}>
            <div className="peep-container">

                <div className="peeps-parent">

                    <div className="name-date">

                        <div className="user-name">
                            <p>{name}</p>
                        </div>

                        <div className="date">
                            {dateCreatedString}
                        </div>


                    </div>

                    <div className="message">
                        <p>{userHandle}</p>
                        {peepMessage}
                    </div>

                </div>

            </div>

        </main >


    );
};


PeepItem.propTypes = {
    peepItem: PropTypes.instanceOf(PeepItemModel)
};


export default PeepItem;

