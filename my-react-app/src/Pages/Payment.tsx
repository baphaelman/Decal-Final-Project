import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import PaymentSummaryItem from '../components/PaymentSummaryItem.tsx';

function Payment({ cart, order, setOrder, information, setInformation }) {
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState('');

    const subtotalItem = {
        quantity: 0,
        name: 'Tax',
        price: 9.57,
    };

    const totalItem = {
        quantity: 0,
        name: 'Total',
        price: 25.4,
    };

    const paymentType = (event) => {
        if (event.target.value === 'cash') {
            setPaymentMethod('cash');
        } else if (event.target.value === 'card') {
            setPaymentMethod('card');
        }
        setInformation({ ...information, paymentMethod: paymentMethod });
    };

    function confirmOrder() {
        setOrder(cart, information);
        navigate('/confirmation');
    }

    const lineStyle = {
        width: '85%',
        height: '0.25vw',
        backgroundColor: 'var(--red20)',
        borderRadius: '100vw',
        margin: '2vw',
    };

    const innerPaymentStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '50%',
        transform: 'translate(0, -4vw)',
    };

    const cartStyle = {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const borderStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '0.35vw solid var(--red40)',
        borderRadius: '2vw',
        padding: '2vw',
    };

    const proceedStyle = {
        color: 'var(--white)',
        fontFamily: 'Sansation-bold',
        border: 'none',
        borderRadius: '1.5vw',
        padding: '1.5vw',
        width: '21vw',
        position: 'relative',
        transform: 'translate(0, 6vw)',
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
            <div
                className="page"
                style={{ flexDirection: 'row', marginTop: '3vw' }}
            >
                <div style={innerPaymentStyle}>
                    <div className="heading-0" style={{ textAlign: 'center' }}>
                        Payment
                    </div>
                    <p className="big-basic" style={{ textAlign: 'center' }}>
                        How would you like to pay for your order?
                    </p>
                    <form
                        style={{
                            textAlign: 'center',
                            transform: 'translate(-3vw, 0)',
                        }}
                    >
                        <label>
                            <input
                                type="radio"
                                name="option"
                                value="cash"
                                className="basic"
                                onClick={() => {
                                    paymentType(event);
                                }}
                            ></input>
                            {'Cash'}
                        </label>
                        <br />
                        <label>
                            <input
                                type="radio"
                                name="option"
                                value="card"
                                className="basic"
                                onClick={() => {
                                    paymentType(event);
                                }}
                            ></input>
                            {'Card'}
                        </label>
                    </form>
                    <button
                        onClick={() => {
                            confirmOrder();
                        }}
                        style={proceedStyle}
                        className="proceed"
                    >
                        CONFIRM ORDER
                    </button>
                </div>
                <div style={cartStyle}>
                    <p className="heading-0">Your Order</p>
                    <div style={borderStyle}>
                        {cart.map((item) => (
                            <PaymentSummaryItem
                                key={item.cartNumber}
                                item={item}
                                font={'old-basic'}
                            />
                        ))}
                        <div style={lineStyle}></div>
                        <PaymentSummaryItem
                            item={subtotalItem}
                            font={'big-basic'}
                        />
                        <div style={lineStyle}></div>
                        <PaymentSummaryItem
                            item={totalItem}
                            font={'big-basic'}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Payment;
