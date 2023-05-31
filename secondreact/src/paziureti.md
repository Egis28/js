
Sure! I can help you create a filtering system with categories using React.js. Here's an example implementation:

First, you'll need to set up your project with React.js and create the necessary components and files. Let's assume you have a component called ProductList that renders the list of products, and a component called Filter that handles the category filtering.

In your Filter component, you can create a dropdown select menu to choose the category. Here's an example code snippet:

import React from 'react';

const Filter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div>
      <label htmlFor="category">Filter by Category:</label>
      <select id="category" value={selectedCategory} onChange={onCategoryChange}>
        <option value="all">All</option>
        <option value="man-tshirt">Man T-Shirt</option>
        <option value="woman-tshirt">Woman T-Shirt</option>
        <option value="jewelers">Jewelers</option>
      </select>
    </div>
  );
};

export default Filter;







In the above code, we have a <select> element with options for each category. The selectedCategory prop represents the currently selected category, and the onCategoryChange prop is a callback function that will be called when the selected value changes.

Now, in your ProductList component, you can use the selected category to filter the products and display only the ones that match the selected category. Here's an example code snippet:





import React, { useState } from 'react';
import Filter from './Filter';

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  // Assuming you have a list of products as an array
  const products = [
    { name: 'Man T-Shirt 1', category: 'man-tshirt' },
    { name: 'Woman T-Shirt 1', category: 'woman-tshirt' },
    { name: 'Jeweler 1', category: 'jewelers' },
    // ... more products
  ];

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filter the products based on the selected category
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div>
      <Filter selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
      <ul>
        {filteredProducts.map(product => (
          <li key={product.name}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;






In the ProductList component, we initialize the selectedCategory state to "all" and define the products array as an example dataset. The handleCategoryChange function is passed as a prop to the Filter component and updates the selectedCategory state when the category selection changes.

Based on the selectedCategory, we filter the products array and store the filtered products in the filteredProducts variable.

Finally, we render the Filter component along with the filtered product list.

This is a basic example of how you can implement category filtering in an e-shop using React.js. You can further expand upon this code by integrating it with your actual e-shop data and UI.
