import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

function TimeAndDate({ information, setInformation }) {
    const navigate = useNavigate();

    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [comment, setComment] = useState('');
    const [showInput, setShowInput] = useState(false);

    const handleRadioChange = (event) => {
        if (event.target.value === 'future') {
            setShowInput(true);
        } else if (event.target.value === 'asap') {
            setInformation({ time: 'asap', date: 'today' });
            setShowInput(false);
        }
    };

    function handleConfirmClick() {
        setShowInput(false);
        setInformation({ time: time, date: date });
    }

    return (
        <>
            <Header />
            <p>When do you want to pick up your order?</p>
            <form>
                <label>
                    <input
                        type="radio"
                        name="option"
                        value="asap"
                        onChange={handleRadioChange}
                    ></input>
                    {'As soon as possible (approx. 15 minutes)'}
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="option"
                        value="future"
                        onChange={handleRadioChange}
                    ></input>
                    {'Sometime in the future'}
                </label>
            </form>
            {showInput && (
                <div>
                    <p>Enter date:</p>
                    <input
                        type="text"
                        placeholder="DD-MM-YYYY"
                        onChange={(event) => setDate(event.target.value)}
                    />
                    <p>Enter time:</p>
                    <input
                        type="text"
                        placeholder="1:23 pm"
                        onChange={(event) => setTime(event.target.value)}
                    />
                    <button onClick={handleConfirmClick}>
                        Confirm Time and Date
                    </button>
                </div>
            )}

            <br />
            <p>Anything to tell us about your order?</p>
            <input
                type="text"
                placeholder="e.g. No onions"
                onChange={(event) =>
                    setInformation({
                        ...information,
                        comment: event.target.value,
                    })
                }
            />
            <button
                onClick={() => {
                    navigate('/payment');
                }}
            >
                Proceed to Payment
            </button>
        </>
    );
}

export default TimeAndDate;
