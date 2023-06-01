# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


app.js

import React, { useState } from 'react'
import Product_list from './components/products_list/Products_list'
import CategoryFilter from './CategoryFilter';


const App = () => {

  const App = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
  
    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
    };
  
    // Render products based on the selected category
    const renderProducts = () => {
      // Replace this with your actual product data retrieval logic
      const products = [
        { id: 1, name: 'Product 1', category: "Men's Clothing" },
        { id: 2, name: 'Product 2', category: 'Jewelry' },
        { id: 3, name: 'Product 3', category: 'Electronics' },
        { id: 4, name: 'Product 4', category: "Women's Clothing" },
        { id: 5, name: 'Product 5', category: 'All' },
      ];
  
      if (selectedCategory === 'All') {
        return products.map((product) => (
          <div key={product.id}>{product.name}</div>
        ));
      } else {
        const filteredProducts = products.filter(
          (product) => product.category === selectedCategory
        );
        return filteredProducts.map((product) => (
          <div key={product.id}>{product.name}</div>
        ));
      }
    };


  return (
    <div>
    
      <Product_list/>

      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      {renderProducts()}
    
    </div>
  )
}
}

    
export default App;


CategoryFilter.jsx

import React from 'react';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  const categories = ['Men\'s Clothing', 'Jewelry', 'Electronics', 'Women\'s Clothing', 'All'];

  return (
    <div>
      <label htmlFor="category">Filter by category: </label>
      <select
        id="category"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;


