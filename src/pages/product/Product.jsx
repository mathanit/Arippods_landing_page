import React from 'react'
import './product.css'
import Aripodscas1 from '../../assets/img/AirPods-case.png'
import Aripodscas2 from '../../assets/img/aripods.png'
import Aripodscas3 from '../../assets/img/subremovebg-preview.png'
import Aripodscas4 from '../../assets/img/product/airpodsheadset.png'



function Product() {
  const Products=[
    {
      name: "AirPods 4",
      description: "The next evolution of sound and comfort.",
      price: "₹12900.00*",
      image:Aripodscas1
    },
    {
      name: "AirPods 4",
      description: "Active Noise Cancellation. The next evolution of sound, comfort and noise control.",
      price: "₹17900.00*",
      image:Aripodscas2
    },
    {
      name: "AirPods Pro 2",
      description: "Pro-level Active Noise Cancellation and advancements in hearing health.",
      price: "₹24900.00*",
      image:Aripodscas3
    },
    {
      name: "AirPods Max",
      description: "The ultimate over-ear listening experience.",
      price: "₹59900.00*",
      image: Aripodscas4
      
    }
  ]


  return (
    <div className='product-section' id='product'>
        <div className="product">

             <div className="product-title">
                <p>Which AirPods are
                    right for you?</p>
            </div>
            <div className="products-menu">
              {Products.map((product,index)=>(

                <div key={index} className="product-card">
                    <img src={product.image} alt=""/>
                    <div className="product-content">
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                        <span>{product.price}</span>
                        <button onClick={()=>{
                          alert("thaking for visit our page")
                        }}>Buy</button>
                        <h2>Learn More</h2>
                    </div>
                </div>
              ))}
        </div>
        </div>
    </div>
  )
}

export default Product