import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import HoursAndLocation from './Pages/HoursAndLocation';
import OurStory from './Pages/OurStory';

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
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
