import { useContext } from 'react';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';

import { ProductCardContainer, FooterStyles, NameStyles, PriceStyles } from './product-card.styles';


const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);
  
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <FooterStyles>
        <NameStyles>{name}</NameStyles>
        <PriceStyles>{price}</PriceStyles>
      </FooterStyles>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to Cart</Button>
    </ProductCardContainer>
  );
};

export default ProductCard;