import React from 'react'
import Products from './Products'

const ProductsList = ({data}) => {
    return (
        <>
        {
            data?.map((item, index) => (
                <Products item={item} key={index} />
            ))
        }
        </>
    )
}

export default ProductsList