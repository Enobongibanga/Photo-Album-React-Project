// import React, { useState } from 'react';

// import { getUniqueId } from './utility/uniqueId';
// import NewProduct from './components/products/NewProduct';
// import Products from './components/products/Products';

// const productsDummyData = [
//     {
//         id: getUniqueId(),
//         title: 'product a',
//         price: 32.5,
//         category: 'men',
//         description: 'dummy description goes here'
//     }
// ];

// const App = () => {
//     const [products, setProducts] = useState(productsDummyData);

//     const handleAddProduct = (value) => {
//         const newProduct = { id: getUniqueId(), ...value };
//         // update the products state with the newProduct
//         newProduct.price = +newProduct.price
//         const existingProducts = [...products]
//         existingProducts.push(newProduct)
//         setProducts(existingProducts)
//     };

//     return (
//         <div className="container">
//             <NewProduct handleAddProduct={handleAddProduct}  />
//             <Products products={products} />
//         </div>
        
//     );
// };

// export default App;
import React from 'react'


import Form from './component/Form'

const App = () => {
  return (
    <div>
     <Form />
    </div>
  )
}

export default App