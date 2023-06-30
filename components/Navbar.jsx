import React from 'react'

import link from  'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import Link from 'next/link'


const NavBar = () => {
  return (
    <div className='navbar-container '>
      <p className='logo'>
        <Link href='/'>Mad Tech</Link>
      </p>
      <button type='button' className='cart-icon' onClick=''>
        <AiOutlineShopping />
        <span className='cart-item-qty'>1</span>
      </button>
    </div>
  )
}

export default NavBar