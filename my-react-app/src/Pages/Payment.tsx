import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import PaymentSummaryItem from '../components/PaymentSummaryItem.tsx';

function Payment({ cart, order, setOrder, information, setInformation }) {
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState('');

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

    return (
        <>
            <Header />
            Payment <br />
            How would you like to pay for your order?
            <form>
                <label>
                    <input
                        type="radio"
                        name="option"
                        value="cash"
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
            >
                Confirm Order
            </button>
            <div>
                <p>Cart</p>
                {cart.map((item) => (
                    <PaymentSummaryItem key={item.cartNumber} item={item} />
                ))}
            </div>
        </>
    );
}

export default Payment;
