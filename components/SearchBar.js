import React, { useState } from 'react';
import styles from '../styles/Store.module.css';

const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState('');

    const handInputChange = (event) => {
        setSearchValue(event.target.value);
    }

    const handleClearClick = () => {
        setSearchValue('');
    }

    const filteredProducts = props.products.filter((product) => {
        return product.title.toLowerCase().includes(searchValue.toLowerCase());
    })

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={searchValue}
                    onChange={handInputChange}
                    placeholder="Search products..."
                />
                {searchValue.length > 0 &&
                    <button onClick={handleClearClick}>Clear</button>
                }
            </div>

            <table>
                <thead>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {filteredProducts.map((product) => (
                    <tr key={product.id}>
                        <td>
                            <img
                                src={product.image}
                                alt={product.title}
                                style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                            />
                        </td>
                        <td>{product.title}</td>
                        <td>${product.price}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default SearchBar;