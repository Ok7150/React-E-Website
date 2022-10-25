import React from 'react'
import GroceriesItem from './GroceriesItem'
import './Groceries.css'

const GroceriesData = [
    {
        id: 1,
        title: 'Cadbury Dairy Milk Chocolate Bar',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies ',
        price: 690, 
        img: 'https://m.media-amazon.com/images/I/71vs4TGjtBL._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
        id: 2,
        title: 'Himalayan Natives Unpolished Toor Dal',
        description: 'Lorem ipsum dolor sit amet, consectetur',
        price: 129, 
        img: 'https://m.media-amazon.com/images/I/61BNhh4rM4L._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
        id: 3,
        title: 'Tata Sampann 6 Grain Khichdi Mix',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies ',
        price: 99, 
        img: 'https://m.media-amazon.com/images/I/71rk3rEXO4S._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
        id: 4,
        title: 'Tata Sampann Unpolished Urad Whole Dal',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies dolor sit amet adipiscing elit ',
        price: 99, 
        img: 'https://m.media-amazon.com/images/I/7173DB-K3eL._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
        id: 5,
        title: 'Tata Sampann 100% Chana Dal Fine Besan',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies ipsum commodo, auctor enim sed. ',
        price: 175, 
        img: 'https://m.media-amazon.com/images/I/61ZN167KRRL._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
        id: 6,
        title: 'Tata Sampann Masoor Dal, Whole',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies ipsum commodo, auctor enim sed. ',
        price: 165, 
        img: 'https://m.media-amazon.com/images/I/71anyGuENLL._AC_UL480_FMwebp_QL65_.jpg'
    }
  ]

function Groceries() {
  return (
    <div className='groceries-container'>
      <div className='groceries-header'> Groceries Products</div>

      <div className='groceries-list'>
            {
                GroceriesData.map(item => 
                   <GroceriesItem 
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    img={item.img}
                   />
                )
            }
        </div>
    </div>
  )
}

export default Groceries