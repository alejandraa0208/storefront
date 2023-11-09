import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Products from '../Components/Products/index';
import { initialState as productsInitialState } from '../store/products';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Products Component', () => {
  it('renders Products component with filtered products based on active category', () => {
    const testProducts = [
      { name: 'Product 1', category: 'category1', price: '9.99', description: 'Description 1', image: '/image1.jpg' },
      { name: 'Product 2', category: 'category2', price: '19.99', description: 'Description 2', image: '/image2.jpg' },
    ];
    const store = mockStore({
      products: { ...productsInitialState, products: testProducts },
      categories: { activeCategory: 'category1' }
    });

    render(
      <Provider store={store}>
        <Products />
      </Provider>
    );

    // Check if Product 1 is rendered based on the active category
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    // Check if Product 2 is not rendered because it's a different category
    expect(screen.queryByText('Product 2')).not.toBeInTheDocument();
  });

  it('dispatches handleAddToCart action when "Add to Cart" button is clicked', () => {
    const testProduct = { name: 'Product 1', category: 'category1', price: '9.99', description: 'Description 1', image: '/image1.jpg' };
    const store = mockStore({
      products: { ...productsInitialState, products: [testProduct] },
      categories: { activeCategory: 'category1' }
    });

    render(
      <Provider store={store}>
        <Products />
      </Provider>
    );

    // Click the "Add to Cart" button
    userEvent.click(screen.getByText('Add to Cart'));

    // Assert that the handleAddToCart action was dispatched
    const actions = store.getActions();
    expect(actions).toEqual([
      { type: 'cart/handleAddToCart', payload: testProduct }
    ]);
  });
});