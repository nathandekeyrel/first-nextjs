import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import styles from '../styles/Store.module.css';
import SearchBar from "../components/SearchBar";

export default function Store() {
    const [productsState, setProductsState] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(productsArray => {
                setProductsState(productsArray);
            })
    }, []);

    return (
        <div className={styles.fakestore}>
            <h1>Fake Store</h1>
            <p>Welcome to the Fake Store</p>
            <p>Here you'll find a variety of products from the fakestore API</p>
            {productsState.length > 0 ? <SearchBar products={productsState} /> : 'loading...'}
        </div>
    );
}