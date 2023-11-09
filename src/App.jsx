import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './store/products';
import Header from './Components/Header/index';
import SimpleCart from './Components/SimpleCart/index';
import Categories from './Components/Categories/index';
import Products from './Components/Products/index';
import Footer from './Components/Footer/index';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    
    return (
        <div>
            <Header />
            <main>
                <SimpleCart />
                <Categories />
                <Products />
            </main>
            <Footer />
        </div>
    );
};

export default App;
