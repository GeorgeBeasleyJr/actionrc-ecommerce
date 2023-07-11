import { CartItemContainer, ItemDetails, CartDetails } from './cart-item.styles';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <CartDetails>{name}</CartDetails>
        <CartDetails>
          {quantity} * ${price}
        </CartDetails>
      </ItemDetails>
    </CartItemContainer>
  )
}

export default CartItem;