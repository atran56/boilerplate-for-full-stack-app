import React from 'react';
import {
    BrowserRouter, Router, Route, Routes
} from 'react-router-dom';
import Home from './components/Home';

class Root extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
    </BrowserRouter>
        )
    }
}


export default Root