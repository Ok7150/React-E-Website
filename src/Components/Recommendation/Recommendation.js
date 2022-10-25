import React from 'react'
import './Recommendation.css'
import RecommendationItem from './RecommendationItem';

const recommendationData = [
    {
        id: 1,
        title: 'Apple iPhone 12 Black',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies ipsum commodo, auctor enim sed, ultricies risus. ',
        price: 54900, 
        img: 'https://m.media-amazon.com/images/I/71fVoqRC0wL._AC_UY327_FMwebp_QL65_.jpg'
    },
    {
        id: 2,
        title: 'Apple iPhone 13 Red',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies ipsum commodo, auctor enim sed, ultricies risus. ',
        price: 65900, 
        img: 'https://m.media-amazon.com/images/I/71gm8v4uPBL._AC_UY327_FMwebp_QL65_.jpg'
    },
    {
        id: 3,
        title: 'Apple iPhone 12 Red',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies ipsum commodo, auctor enim sed, ultricies risus. ',
        price: 49900, 
        img: 'https://m.media-amazon.com/images/I/71E5zB1qbIL._AC_UY327_FMwebp_QL65_.jpg'
    },
    {
        id: 4,
        title: 'Apple iPhone 14 Red',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies ipsum commodo, auctor enim sed, ultricies risus. ',
        price: 119900, 
        img: 'https://m.media-amazon.com/images/I/716fAVud8PL._AC_UY327_FMwebp_QL65_.jpg'
    },
    {
        id: 5,
        title: 'Apple iPhone 12 Purple',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies ipsum commodo, auctor enim sed, ultricies risus. ',
        price:  49900, 
        img: 'https://m.media-amazon.com/images/I/71hIfcIPyxS._AC_UY327_QL65_.jpg'
    },
    {
        id: 6,
        title: 'Apple iPhone 13 Mini  ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies ipsum commodo, auctor enim sed, ultricies risus. ',
        price: 64900, 
        img: 'https://m.media-amazon.com/images/I/61F7Xcyux0L._AC_UY327_QL65_.jpg'
    }
]

function Recommendation() {
  return (
    <div className='recommendation-container'>
        <div className='recommendation-header'>
            Recommendation
        </div>

        <div className='recommendation-list'>
            {
                recommendationData.map(item => 
                   <RecommendationItem 
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

export default Recommendation;