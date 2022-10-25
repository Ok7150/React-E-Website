import React from 'react'
import './Offers.css'

function Offers() {
  return (
    <div className='offers-container'>
        <div className='footewar-offers'>
            <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Jupiter22/GW/Phase3/PC-QC/MF/Footwear-186-116._SY116_CB607270360_.jpg' />
        </div>

        <div className='wearable-offers'>
            <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Jupiter22/GW/Phase3/PC-QC/MF/Watch-186-116._SY116_CB607270360_.jpg' />
        </div>

        <div className='fashion-offers'>
            <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Jupiter22/GW/Phase3/PC-QC/MF/jeans-186-116._SY116_CB607270360_.jpg' />
        </div>
    </div>
  )
}

export default Offers;