import React, { useState } from 'react'
import Helmet from '../Helmet/Helmet'
import ProductsList from '../Product/ProductsList'

import products from '../../assets/data/products'

import { Container, Row, } from 'reactstrap'
// import banner from "../../assets/images/banner.jpg"
import './shop.css'

const Shop = () => {
    const [productsData, setProducstsData] = useState(products)

    const handleFilter = (e) => {
        const filterValue = e.target.value
        if(filterValue === 'All'){
            const filteredProducts = products.filter(item => item.category)

            setProducstsData(filteredProducts)
        }
        if(filterValue === 'Bottle'){
            const filteredProducts = products.filter(item => item.category === 'Bottle')

            setProducstsData(filteredProducts)
        }
        if(filterValue === 'Apparel'){
            const filteredProducts = products.filter(item => item.category === 'Apparel')

            setProducstsData(filteredProducts)
        }
        if(filterValue === 'Drinkware'){
            const filteredProducts = products.filter(item => item.category === 'Drinkware')

            setProducstsData(filteredProducts)
        }
        if(filterValue === 'Collectibles'){
            const filteredProducts = products.filter(item => item.category === 'Collectibles')

            setProducstsData(filteredProducts)
        }
        if(filterValue === 'Gifts'){
            const filteredProducts = products.filter(item => item.category === 'Gifts')

            setProducstsData(filteredProducts)
        }
    }

    // const handleSearch = (e) => {
    //     const searchTerm = e.target.value

    //     const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
    //     setProducstsData(searchedProducts)
    // }

    return (
        <Helmet title='Shop'>
            <div className='shop-bg'>
                <h2>Trending at Coca-Cola Store</h2>
            </div>
            <section className='container'>
                <Container>
                    <Row>
                            {/* <div className="filter_widget">
                                <select onClick={handleFilter}>
                                    <option value="All">ALL</option>
                                    <option value="Bottle">BOTTLE</option>
                                    <option value="Apparel">APPAREL</option>
                                    <option value="Drinkware">DRINKWARE</option>
                                    <option value="Collectibles">COLLECTIBLES</option>
                                    <option value="Gifts">GIFTS</option>
                                </select>
                            </div> */}
                        <div className='filer-buttn' onClick={handleFilter} >
                            <button value="All">ALL</button>
                            <button value="Bottle">BOTTLE</button>
                            <button value="Apparel">APPAREL</button>
                            <button value="Drinkware">DRINKWARE</button>
                            <button value="Collectibles">COLLECTIBLES</button>
                            <button value="Gifts">GIFTS</button>
                        </div>
                        {/* <Col lg='6' md='12'>
                            <div className="search_box">
                                <input 
                                    type="text" 
                                    placeholder='검색하세요.' 
                                    onChange={handleSearch}
                                    autofocus="autofocus"
                                />
                                <span>
                                    <i class="ri-search-2-line"></i>
                                </span>
                            </div>
                        </Col> */}
                    </Row>
                </Container>
            </section>

            <section className='all-products'>
                <Container>
                    <Row>
                        {
                            productsData.length === 0? <h1 className='text-center fs-4'>No products are found!</h1> : <ProductsList data={productsData} />
                        }
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Shop;

