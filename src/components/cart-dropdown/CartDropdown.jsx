import React from 'react';

import CustomBtn from '../custom-button/CustomBtn';

import './CartDropdown.scss';

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items'></div>
    <CustomBtn>GO TO CHECKOUT</CustomBtn>
  </div>
);

export default CartDropdown;
