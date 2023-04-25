import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Helmet from '../Helmet/Helmet'
import { cartActions } from '../../redux/slices/cartSlice'

import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash} from "@fortawesome/free-solid-svg-icons";

import './cart.css'

const Cart = () => {
    const cartItems =useSelector((state) => state.cart.cartItems)

    const totalAmount = useSelector((state) => state.cart.totalAmount)

    return (
        <Helmet title='Cart'>
            <div className='cart-bg'>
                <h2>Your Shopping Cart</h2>
            </div>
            <section>
                <Container>
                    <Row className='cart-row'>
                        <Col lg='9'>
                            {
                                cartItems.length === 0 ? (
                                    <div className='emty'>
                                        <h2 className='fs-4 text-center'>You have no items in your shopping cart.</h2>
                                        <button className='shop_btn'>
                                        <Link to='/shop'>
                                            <p>Continue Shopping</p>
                                        </Link>
                                </button>
                                    </div>
                                    
                                ) : (
                                    <table className='table bordered'>
                                        <thead>
                                            <tr>
                                                <th>Item</th>
                                                <th></th>
                                                <th>Pirce</th>
                                                <th>Qty</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {
                                                cartItems.map((item, index) => (
                                                    <Tr item={item} key={index} />
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                )
                            }
                        </Col>
                        <Col lg='3'>
                            <div className='total'>
                                <p className='fs-6 mt-2'>In Stock Free Shipping!</p>
                                <h6> Oder total
                                    <span className='fs-4 fw-bold'>${totalAmount}</span>
                                </h6>
                            </div>
                            <div>
                                <button className='cart_btn w-100'>
                                <Link to='/login'>
                                <p>Proceed to Checkout</p>
                                </Link>
                                    {/* <Link to='/checkout'>
                                    <p>Proceed to Checkout</p>
                                    </Link> */}
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

const Tr = ({item}) => {
    const dispatch = useDispatch()

    const deletProduct = () => {
        dispatch(cartActions.deleteItem(item.id))
    }

    return (
        <>
            <tr>
                <td><img src={item.imgUrl} alt="" /></td>
                <td>{item.productName}</td>
                <td>${item.price}</td>
                <td>{item.quantity}px</td>
                <td>
                    <motion.i 
                        whileTap={{scale: 0.9}} 
                        onClick={deletProduct}
                        class="icon">
                            <FontAwesomeIcon icon={faTrash} />
                    </motion.i>
                </td>
            </tr>
        </>
    )
}

export default Cart
