import React from 'react';

import {
  CartItemContainer,
  ItemDetailsContainer,
  CarItemImage,
} from './cartItem.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <CarItemImage src={imageUrl} alt='item' />
      <ItemDetailsContainer>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
