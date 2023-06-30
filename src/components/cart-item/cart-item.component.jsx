import { CartItemContainer, ItemDetails, CartDetails } from './cart-item.styles.jsx';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} style={{width: "30%"}} />
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