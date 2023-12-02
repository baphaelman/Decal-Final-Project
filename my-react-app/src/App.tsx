import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import HoursAndLocation from './Pages/HoursAndLocation';
import OurStory from './Pages/OurStory';
import Cart from './Pages/Cart';
import MenuItem from './Pages/MenuItem';
import Reservation from './Pages/Reservation';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/our-story" element={<OurStory />} />
                    <Route
                        path="/hours-and-location"
                        element={<HoursAndLocation />}
                    />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/menu-item" element={<MenuItem />} />
                    <Route path="/reservation" element={<Reservation />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/confirmation" element={<Confirmation />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
