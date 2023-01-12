import PeepItemModel from './utils/PeepItem.model.js';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function AddPeep({ setLoginUser }) {

    const [peepMessage, setPeepMessage] = useState('');
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (submitted) navigate("/allPeeps");
    }, [submitted, navigate]);

    const onSubmit = async (e) => {

        e.preventDefault()
        const peep = { peepMessage: peepMessage }
        try {
            const res = await axios.post(process.env.REACT_APP_ADD_PEEP, peep)
            console.log(res.data)
            setPeepMessage('');
            setSubmitted(true);

            return { peep: res.data, status: res.status };

        }
        catch (e) {
            alert(e)
            setError("There is an error: " + e)
        }
    }

    return (

        <main>
            <div className="new-peep">

                <div className="input-box">
                    <form onSubmit={onSubmit} id="peep">

                        <p className="new-peep-label">Peep your peops...</p>
                        <input
                            type="text"
                            name="peep"
                            id="peep"
                            userhandle="peep"
                            onChange={(e) => setPeepMessage(e.target.value)}
                            value={peepMessage}>

                        </input>
                        <button type="submit" className="button">
                            PEEP
                        </button>

                    </form>
                    {/* you need a form with a textarea input */}
                </div>
            </div>

        </main >

    );
};




AddPeep.propTypes = {
    peepItem: PropTypes.instanceOf(PeepItemModel)
};

