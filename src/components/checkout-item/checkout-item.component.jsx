import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import { 
  ArrowComponent, 
  CheckoutItemContainer, 
  ImageContainer, 
  NamePriceComponents, 
  QuantityComponent, 
  ValueComponent, 
  RemoveButton 
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <NamePriceComponents> {name} </NamePriceComponents>
      <QuantityComponent>
        <ArrowComponent onClick={removeItemHandler}>
          &#10094;
        </ArrowComponent>
        <ValueComponent>{quantity}</ValueComponent>
        <ArrowComponent onClick={addItemHandler}>
          &#10095;
        </ArrowComponent>
      </QuantityComponent>
      <NamePriceComponents> {price}</NamePriceComponents>
      <RemoveButton onClick={clearItemHandler}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;