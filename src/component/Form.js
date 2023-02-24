// import React, { useState } from 'react';

// const NewProduct = (props) => {
//   const [product, setProduct] = useState({
//     title: '',
//     price: 0,
//     category: 'men',
//     description: ''
//   });

//   const handleChange = (e) => {
//     // setProduct({...product, [e.target.name]: e.target.value})
//     // update the product state with the recent input value
//     setProduct((prevState)=> {
//       return{
//         ...prevState,[e.target.name]: e.target.value}
      
//     })
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // pass the new product data to App.js from here
//     props.handleAddProduct(product)
//     setProduct({
//       title: '',
//       price: 0,
//       category: 'men',
//       description: ''
//     });
//   };

//   return (
//     <div className="card">
//       <h2 className="title">Add Product</h2>
//       <form action="" onSubmit={handleSubmit}>
//         <div className="field-group">
//           <label htmlFor="title">Title: </label>
//           <input type="text" 
//           name="title"
//            id="title" 
//            value={product.title}
//            onChange={handleChange}
//            required />
//         </div>
//         <div className="field-group">
//           <label htmlFor="price">Price: </label>
//           <input type="number" name="price" id="price" 
//           value={product.price}
//             onChange={handleChange }
//           required />
//         </div>

//         <div className="field-group">
//           <label htmlFor="category">Category: </label>
//           <select name="category" id="category"  
//           value={product.category}
//            onChange={handleChange }>
//             <option value="men">Men</option>
//             <option value="women">Women</option>
//             <option value="kids">Kids</option>
//             <option value="all">All</option>
//           </select>
//         </div>

//         <div className="field-group">
//           <label htmlFor="description">Description: </label>
//           <textarea name="description" id="description" 
//           value={product.description}
//             onChange={handleChange } required></textarea>
//         </div>
//         <div className="field-group">
//           <button className="btn" type="submit">
//             Add Product
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default NewProduct;
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


const dummyMeal =[
    {id: uuidv4(),
    mealName : 'Ingredients',
    instructions : '  Lorem ipsum dolor sit amet consectetur adipisicing '} ,
    {id: uuidv4(),
        mealName : 'Ingredients',
        instructions : '  Lorem ipsum dolor sit amet consectetur adipisicing '} ,
        
    

]

const Form = () => {
    const [meals, setmeals] = useState(dummyMeal)

  return (
    <div>
  <h2> Add Your Meal Here</h2>
  <section className='meals'>
      {meals.map((meal) => {
          const {id, mealName, instructions} = meal
          return <article key ={id}>
              <h3> {id}</h3>
              <h4>{mealName}</h4>
              <p>{instructions}</p>
          </article>

      })}
  </section>

    </div>
  )
}

export default Form