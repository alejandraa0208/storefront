import React from 'react';
import Header from './Components/Header/index';
import Footer from './Components/Footer/index';
import Categories from './Components/Categories/index';
import Products from './Components/Products/index';

const App = () => (
    <div>
        <Header />
        <main>
            <Categories />
            <Products />
        </main>
        <Footer />
    </div>
);

export default App;
