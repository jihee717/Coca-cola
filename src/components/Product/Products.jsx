import React from 'react'
// import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice'

import { Col } from 'reactstrap'
import { motion } from 'framer-motion'

import './products.css'

const Products = ({ item }) => {
    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(
            cartActions.addItem({
            id: item.id,
            productName: item.productName,
            price: item.price,
            imgUrl: item.imgUrl
            })
        )
    }

    return (
        <Col lg='3' md='4' className='mb-2'>
            <div className="product_item">
                <div className="product_img">
                    <motion.img whileHover={{ scale: 1 }} src={item.imgUrl} alt={item.productName} />
                </div>
                <div className='p-2 product_info'>
                    <p className="product_name">
                        {item.productName}
                    </p>
                </div>
                <div className="product_bottom p-2">
                    <span>{item.category}</span>
                    <span className="price">${item.price}</span>
                </div>
                    <motion.span whileTap={{ scale: .8 }} onClick={addToCart}>
                        <div className='product-btn'>
                            <p>Add to Cart</p>
                        </div>
                    </motion.span>
            </div>
        </Col>
    )
}

export default Products
