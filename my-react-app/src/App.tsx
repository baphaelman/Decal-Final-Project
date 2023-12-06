import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

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
            category: 'Miscellaneous',
            name: 'Paper Bag',
            price: 0.3,
            path: './public/sushi_icon.png',
            id: 0,
            quantity: 1,
            cartNumber: 0,
        },
    ]);
    const [currentItem, setCurrentItem] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [cartNumber, setCartNumber] = useState(1);

    const addToCart = (currentItem) => {
        setCart([...cart, currentItem]);
        setOrder([cart]);
        setCartNumber(cartNumber + 1);
        setQuantity(1);

        handleOrderSubmit();
    };

    // Fetch all books on initial render
    useEffect(() => {
        fetchOrders()
    }, [])

    // Fetch all books
    const fetchOrders = async () => {
        // Send GET request to 'books/all' endpoint
        axios
        .get('http://localhost:4001/orders/all')
        .then(response => {
            // Update the books state
            setOrder(response.data)

        })
        .catch(error => console.error(`There was an error retrieving the order list: ${error}`))
    }

    // Reset all input fields
    const handleInputsReset = () => {
        setOrder([]);
        setInformation({});
        setCart([
            {
                category: 'Miscellaneous',
                name: 'Paper Bag',
                price: 0.3,
                path: './public/sushi_icon.png',
                id: 0,
                quantity: 1,
                cartNumber: 0,
            },
        ]);
        setCurrentItem(null);
        setQuantity(1);
        setCartNumber(1);
    }

    // Create new book
    const handleOrderCreate = () => {
        // Send POST request to 'books/create' endpoint
        axios
        .post('http://localhost:4001/orders/create', {
            order: order,
            information: information,
            cart: cart,
            cartNumber: cartNumber,
            currentItem: currentItem,
            quantity: quantity
        })
        .then(res => {
            console.log(res.data)

            // Fetch all books to refresh
            // the books on the bookshelf list
            fetchOrders()
        })
        .catch(error => console.error(`There was an error creating the ${order} order: ${error}`))
    }

    // Submit new book
    const handleOrderSubmit = () => {
        // Check if all fields are filled
        if (order.length > 0 && information && cart.length > 0) {
        // Create new book
        handleOrderCreate()

        console.info(`Order ${order} with ${cart} added.`)

        // Reset all input fields
        handleInputsReset()
        }
    }



    const cartItem = {
        ...currentItem,
        quantity: quantity,
        cartNumber: cartNumber,
    };

    function countDecimalDigits(number) {
        const decimalPart = number.toString().split('.')[1];
        return decimalPart.length;
    }

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
                                cartNumber={cartNumber}
                                countDecimalDigits={countDecimalDigits}
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
                                cartNumber={cartNumber}
                                countDecimalDigits={countDecimalDigits}
                            />
                        }
                    />
                    <Route
                        path="/cart"
                        element={
                            <Cart
                                cart={cart}
                                cartNumber={cartNumber}
                                countDecimalDigits={countDecimalDigits}
                            />
                        }
                    />
                    <Route
                        path="/time-and-date"
                        element={
                            <TimeAndDate
                                information={information}
                                setInformation={setInformation}
                            />
                        }
                    />
                    <Route
                        path="/payment"
                        element={
                            <Payment
                                cart={cart}
                                order={order}
                                setOrder={setOrder}
                                information={information}
                                setInformation={setInformation}
                            />
                        }
                    />
                    <Route
                        path="/confirmation"
                        element={<Confirmation information={information} />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
