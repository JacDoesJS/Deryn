import PeepItem from './PeepItem';
import PeepItemModel from './utils/PeepItem.model';

import PropTypes from 'prop-types';

const AllPeeps = ({ peepData }) => {

    const allPeeps = peepData.map(aPeepItem => {
        // const { peepMessage, id, peepDateCreated, name } = aPeepItem;
        const peepItem = new PeepItemModel(aPeepItem.peepMessage, aPeepItem.peepDateCreated, aPeepItem._id, aPeepItem.name, aPeepItem.userHandle);
        return <PeepItem peepItem={peepItem} key={peepItem._id} />
    });

    return (
        <div>
            <ul>
                <li>{allPeeps}</li>
            </ul>
        </div >
    )
};

AllPeeps.propTypes = {
    peepData: PropTypes.array.isRequired
}

export default AllPeeps;

// getPeeps = async () => {
//     try {
//         const res = await axios.get("http://localhost:4000/getPeeps");
//         if (res.data?.length > 0) return { todos: res.data };
//         throw new Error(`There are no todos to retrieve, please add one`);
//     } catch (e) {
//         return { todos: [], error: { message: `Data not available from the server: ${e.message}`, count: 0 } }
//     };

// const sortPeeps = peeps.sort(
//     (objA, objB) => Number(objA.dateCreated) - Number(objB.dateCreated),
// );