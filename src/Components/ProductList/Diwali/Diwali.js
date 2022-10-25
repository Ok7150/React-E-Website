import React from 'react'
import DiwaliItem from './DiwaliItem'
import './Diwali.css'

const DiwaliData = [
  {
      id: 1,
      title: '12 Stars Led Diwali Lights',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies ipsum commodo, auctor enim sed, ultricies risus. ',
      price: 525, 
      img: 'https://m.media-amazon.com/images/I/515jA106Y7L._AC_UL480_FMwebp_QL65_.jpg'
  },
  {
      id: 2,
      title: 'The Purple Tree Glass Mosaic Tealight Candle Holder',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies ipsum commodo, auctor enim sed. ',
      price: 299, 
      img: 'https://m.media-amazon.com/images/I/71KMp5+N9ML._AC_UL480_FMwebp_QL65_.jpg'
  },
  {
      id: 3,
      title: 'SATYAM KRAFT 12 Pcs Acrylic Flameless',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies ipsum commodo, auctor enim sed. ',
      price: 319, 
      img: 'https://m.media-amazon.com/images/I/41fRjtkwD6L._AC_UL480_FMwebp_QL65_.jpg'
  },
  {
      id: 4,
      title: 'JAGMOOLYA Products Colorful Floating Nights',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies ipsum commodo, auctor enim sed, ultricies risus. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.  ',
      price: 329, 
      img: 'https://m.media-amazon.com/images/I/61LhS6GK9tL._AC_UL480_FMwebp_QL65_.jpg'
  },
  {
      id: 5,
      title: 'TIED RIBBONS Set of 2 Mosaic Glass Votive Tealight Candle Holders ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies ipsum commodo, auctor enim sed, ultricies risus. Ut enim ad minim veniam.',
      price:  275, 
      img: 'https://m.media-amazon.com/images/I/71oLW8YxdEL._AC_UL480_FMwebp_QL65_.jpg'
  },
  {
      id: 6,
      title: 'eCraftIndia Cotton Door Hanging  ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies. ',
      price: 64900, 
      img: 'https://m.media-amazon.com/images/I/516DxtsFw2S._AC_UL480_FMwebp_QL65_.jpg'
  }
]

function Diwali() {
  return (
    <div className='diwali-container'>
      <div className='diwali-header'> Diwali Special Products</div>

      <div className='diwali-list'>
            {
                DiwaliData.map(item => 
                   <DiwaliItem 
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

export default Diwali