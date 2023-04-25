import React, { useRef, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'

import logo from "../../assets/images/logo.svg"
import './header.css'


const nav_links = [
    {
        path:'home',
        display: 'Home'
    },
    {
        path:'shop',
        display: 'Shop'
    },
    {
        path:'reward',
        display: 'Reward'
    },
    // {
    //     path:'creations',
    //     display: 'Creations'
    // },
    {
        path:'cart',
        display: 'Cart'
    },
]

const Header = () => {
    const headerRef = useRef(null)

    const totalQuantity = useSelector(state => state.cart.totalQuantity)

    const menuRef = useRef(null)
    const navigate = useNavigate()

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky_header')
            } else {
                headerRef.current.classList.remove('sticky_header')
            }
        })
    }
    useEffect(() => {
        stickyHeaderFunc()

        return () => window.removeEventListener('scroll', stickyHeaderFunc)
    })

    const menuToggle = () => menuRef.current.classList.toggle('active_menu')

    const navigateToCart = () => {
        navigate('/cart')
    }

    return (
        <header className='header' ref={headerRef}>
                    <div className="nav_wrap">
                        <Link to='/home'>
                            <div className="logo-wrap">
                                <img src={logo} className="logo" />
                            </div>
                        </Link>
                        <div className="navigation" ref={menuRef} onClick={menuToggle}>
                            <ul className="menu p-0">
                                {
                                    nav_links.map((item, index) => (
                                        <li className="nav_item" key={index}>
                                            <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav_active' : ''}>{item.display}</NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className="nav_icons">
                            <Link to='/login'>
                                <li><FontAwesomeIcon icon={faRightToBracket} />SignIn</li>
                            </Link>
                            <Link to='/login'>
                                <li><FontAwesomeIcon icon={faUser} />User</li>
                            </Link>
                                <span className='cart_icon' onClick={navigateToCart}>
                                    <Link to='/cart'>
                                    <li>
                                    <FontAwesomeIcon icon={faCartShopping} /> Cart
                                    <span className='badge'>{totalQuantity}</span>
                                    </li>
                                     </Link>
                                     </span>
                            <div className="mobile_menu">
                            <span onClick={menuToggle}>
                            <FontAwesomeIcon icon={faBars}/>
                            </span>
                        </div>
                        </div>
                    </div>
        </header>
    )
}

export default Header


