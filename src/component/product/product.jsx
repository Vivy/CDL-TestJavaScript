import { useReducer } from 'react';
import Basket from '../basket/basket';
import Card from '../card/card';
import { basketInitialState, basketReducer } from '../../util/reducer';

const Product = () => {
  const [state, dispatch] = useReducer(basketReducer, basketInitialState);

  return (
    <div>
      <Card />
      <Basket />
    </div>
  );
};

export default Product;
