import React from 'react'

const MenuCard = ({ menuData }) => {
//    console.log(menuData);
  return (
    <>
        <section className="main-card--cointainer">     
          {menuData.map((curlElem) => {
            const {id,name,category,image,description} = curlElem;
          return (
            <>
            <div className="card-container" key={id}>
            <div className="card">
                <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle">{category}</span>
                    <h2 className="card-title">{curlElem.name}</h2>
                     <span className="card-description subtle">{curlElem.description}</span>
                      <div className="card-read">Read</div>
                </div>
                 <img src={curlElem.image} alt="images" className="card-media"/>
                 <span className="card-price subtle">{curlElem.price}</span>
                 <span className="card-tag subtle">Order Now</span> 
            </div>
         </div>
         </>
          );  
       })}
       </section>

    </>
  )
}

export default MenuCard