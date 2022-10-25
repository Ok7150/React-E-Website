import React from 'react'
import ElectronicsItem from './ElectronicsItem'
import './Electronics.css'

const ElectronicsData = [
  {
      id: 1,
      title: 'Zodo 8. 5 inch LCD E-Writer Electronic Writing Pad/Tablet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies ipsum commodo, auctor enim sed, ultricies risus. ',
      price: 235, 
      img: 'https://m.media-amazon.com/images/I/61Pg1H7U15L._AC_UL480_FMwebp_QL65_.jpg'
  },
  {
      id: 2,
      title: ' Neckband with Up to 30 Hours Playtime',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies ipsum commodo, auctor enim sed, ultricies risus.Ut enim ad minim veniam Ut enim',
      price: 609, 
      img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR7VeIXmPdLHp9Dd46q7FECaVJJ30IK686RpU6OLkc4sMZ3E73BxmJZbKqxepqmEkb0VgyilT-mnA&usqp=CAc'
  },
  {
      id: 3,
      title: 'Tizum Portable Electronic Travel Gadgets ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies ipsum',
      price: 999, 
      img: 'https://m.media-amazon.com/images/I/71Sk7ltFiRL._AC_UL480_FMwebp_QL65_.jpg'
  },
  {
      id: 4,
      title: 'Multi Angle Tablet Stand.',
      description: 'Lorem ipsum dolor sit amet, consectetu adipiscing elit.',
      price: 349, 
      img: 'https://m.media-amazon.com/images/I/41UjHo1QW3L._AC_UL480_FMwebp_QL65_.jpg'
  },
  {
      id: 5,
      title: 'Portronics MODESK POR-122 Universal Mobile Holder (Black)',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies ipsum commodo, auctor enim sed, ultricies risus. ',
      price:  219, 
      img: 'https://m.media-amazon.com/images/I/31mbyi7ocJL._AC_UL480_FMwebp_QL65_.jpg'
  },
  {
      id: 6,
      title: 'FLiX USB to Type C PVC Data Sync & 2A Smartphone Fast Charging Cable',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies ipsum commodo, auctor enim sed, ultricies risus. ',
      price: 99, 
      img: 'https://m.media-amazon.com/images/I/514i6w1GLxL._AC_UL480_FMwebp_QL65_.jpg'
  }
]


function Electronics() {
  return (
    <div className='electronics-container'>
      <div className='electronics-header'> Electronics Products</div>

      <div className='electronics-list'>
            {
                ElectronicsData.map(item => 
                   <ElectronicsItem 
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

export default Electronics