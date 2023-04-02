import { useReducer } from 'react';
import Basket from '../basket/basket';
import Card from '../card/card';
import { basketInitialState, basketReducer } from '../../util/reducer';
import './product.css';

const Product = () => {
  const [state, dispatch] = useReducer(basketReducer, basketInitialState);

  return (
    <div className='product'>
      <Card dispatch={dispatch} state={state} />
      <Basket state={state} dispatch={dispatch} />
    </div>
  );
};

export default Product;
