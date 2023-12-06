import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

function TimeAndDate({ information, setInformation }) {
    const navigate = useNavigate();

    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
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

    const borderStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexWrap: 'wrap',
        border: '0.35vw solid var(--red40)',
        borderRadius: '3vw',
        marginLeft: '10vw',
        marginRight: '10vw',
        marginBottom: '10vw',
        padding: '2vw',
        width: '80vw',
    };

    const timeStyle = {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const lineStyle = {
        width: '70vw',
        height: '0.25vw',
        backgroundColor: 'var(--red20)',
        borderRadius: '100vw',
        margin: '2vw',
    };

    const commentStyle = {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const leftStyle = {
        width: '50%',
        marginLeft: '7vw',
    };

    const rightStyle = {
        width: '50%',
    };

    const inputStyle = {
        borderRadius: '0.5vw',
        border: '0.15vw solid var(--red40)',
        backgroundColor: 'var(--red20)',
        width: '85%',
        height: '10vw',
    };

    const proceedStyle = {
        color: 'var(--white)',
        fontFamily: 'Sansation-bold',
        border: 'none',
        borderRadius: '1.5vw',
        padding: '1.5vw',
    };

    return (
        <>
            <Header />
            <p
                className="link"
                onClick={() => {
                    navigate('/cart');
                }}
            >
                {'< CART'}
            </p>
            <div className="page" style={{ marginTop: '6vw' }}>
                <div className="heading-0">Time and Date</div>
                <div style={borderStyle}>
                    <div style={timeStyle}>
                        <div style={leftStyle}>
                            <p className="big-basic">
                                When would you like to pick up your order?
                            </p>
                        </div>
                        <div style={rightStyle}>
                            <form>
                                <label>
                                    <input
                                        type="radio"
                                        name="option"
                                        value="asap"
                                        onChange={handleRadioChange}
                                    ></input>
                                    {'As soon as possible (approx. 25 minutes)'}
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
                                        onChange={(event) =>
                                            setDate(event.target.value)
                                        }
                                    />
                                    <p>Enter time:</p>
                                    <input
                                        type="text"
                                        placeholder="1:23 pm"
                                        onChange={(event) =>
                                            setTime(event.target.value)
                                        }
                                    />
                                    <button onClick={handleConfirmClick}>
                                        Confirm Time and Date
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div style={lineStyle}></div>
                    <div style={commentStyle}>
                        <div style={leftStyle}>
                            <p className="big-basic">
                                Anything to tell us about your order?
                            </p>
                        </div>
                        <div style={rightStyle}>
                            <input
                                style={inputStyle}
                                type="text"
                                placeholder="e.g. No onions"
                                onChange={(event) =>
                                    setInformation({
                                        ...information,
                                        comment: event.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                    <div style={lineStyle}></div>
                    <button
                        onClick={() => navigate('/payment')}
                        style={proceedStyle}
                        className="proceed"
                    >
                        {'PROCEED TO PAYMENT >'}
                    </button>
                </div>
            </div>
        </>
    );
}

export default TimeAndDate;
