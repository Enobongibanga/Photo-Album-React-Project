import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Pages from './pages/Pages';
import Footer from './components/SiteLayout/Footer';
import Header from './components/SiteLayout/Header';

const App = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans pt-8">
            <BrowserRouter>
                <Header />
                <main className="flex-grow p-8 text-2xl">
                    <Pages />
                </main>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
