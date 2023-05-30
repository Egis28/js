import React from 'react'
import styles from './Category_list.module.css'

function Category_list(props) {
  console.log(props.products);
  const uniqueCategorys = [...new Set(props.products.map((oneCategory) => oneCategory.category)), 'all']

  console.log(uniqueCategorys);

    



  return (
    <div className={styles.container}>
{


  uniqueCategorys.map((newCategory, index) => (
    <button className={styles.buttons} key={index}>{newCategory}</button>

  ))

}

    </div>
  )
}

export default Category_list