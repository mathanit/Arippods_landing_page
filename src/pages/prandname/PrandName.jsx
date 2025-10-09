import React from 'react'
import './PrandName.css'
import headset from '../../assets/img/product/airpodsheadset.png'
function PrandName() {
    
  return (
        <div className="PrandName">
            <div className='content'>
                <div className="name">
                <h1>AriPodsMax</h1>
                </div>
                <div className='headset'>
                    <img src={headset} alt="" />
                </div>
            </div>
        </div>
  )
}

export default PrandName