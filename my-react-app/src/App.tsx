import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import HoursAndLocation from './Pages/HoursAndLocation';
import OurStory from './Pages/OurStory';
import Cart from './Pages/Cart';
import MenuItem from './Pages/MenuItem';
import Reservation from './Pages/Reservation';
import Payment from './Pages/Payment';
import Confirmation from './Pages/Confirmation';

function App() {
    const [cart, setCart] = useState([{ name: 'paper bag' }]);
    const [currentItem, setCurrentItem] = useState(null);
    const addToCart = (currentItem) => {
        setCart([...cart, currentItem]);
        console.log(cart);
        setQuantity(1);
    };

    const [quantity, setQuantity] = useState(1);
    let cartItem = { ...currentItem, quantity: quantity };

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
                        path="/cart"
                        element={<Cart cartItem={cartItem} />}
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
                    <Route path="/reservation" element={<Reservation />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/confirmation" element={<Confirmation />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
