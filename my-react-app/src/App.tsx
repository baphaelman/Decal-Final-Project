import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import HoursAndLocation from './Pages/HoursAndLocation';
import OurStory from './Pages/OurStory';
import Cart from './Pages/Cart';
import MenuItem from './Pages/MenuItem';
import TimeAndDate from './Pages/TimeAndDate';
import Payment from './Pages/Payment';
import Confirmation from './Pages/Confirmation';

function App() {
    const [order, setOrder] = useState([]);
    const [information, setInformation] = useState({});
    const [cart, setCart] = useState([
        {
            section: 'Miscellaneous',
            name: 'paper bag',
            price: 0.3,
            image: './public/sushi_icon.png',
            id: 0,
            quantity: 1,
            cartNumber: 0,
        },
    ]);
    const [currentItem, setCurrentItem] = useState(null);
    const addToCart = (currentItem) => {
        setCart([...cart, currentItem]);
        setOrder([cart]);
        setCartNumber(cartNumber + 1);
        setQuantity(1);
        console.log(cart);
    };

    const [quantity, setQuantity] = useState(1);
    const [cartNumber, setCartNumber] = useState(1);
    let cartItem = {
        ...currentItem,
        quantity: quantity,
        cartNumber: cartNumber,
    };

    useEffect(() => {
        console.log('Order:', order);
    }, [order]);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                currentItem={currentItem}
                                setCurrentItem={setCurrentItem}
                            />
                        }
                    />
                    <Route path="/our-story" element={<OurStory />} />
                    <Route
                        path="/hours-and-location"
                        element={<HoursAndLocation />}
                    />
                    <Route
                        path="/menu-item"
                        element={
                            <MenuItem
                                addToCart={addToCart}
                                cart={cart}
                                setCart={setCart}
                                currentItem={currentItem}
                                cartItem={cartItem}
                                quantity={quantity}
                                setQuantity={setQuantity}
                            />
                        }
                    />
                    <Route
                        path="/cart"
                        element={<Cart cart={cart} cartNumber={cartNumber} />}
                    />
                    <Route
                        path="/time-and-date"
                        element={
                            <TimeAndDate
                                order={order}
                                setOrder={setOrder}
                                information={information}
                                setInformation={setInformation}
                            />
                        }
                    />
                    <Route
                        path="/payment"
                        element={<Payment order={order} />}
                    />
                    <Route path="/confirmation" element={<Confirmation />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
