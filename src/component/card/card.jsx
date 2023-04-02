import { Field, Form, Formik } from 'formik';
import { itemMap } from '../../data';
import { addToCartAction } from '../../util/reducer';
import { formatNumber } from '../../util/total';

const Card = ({ dispatch, state }) => {
  const handleAddToCart = ({ sku, quantity }) => {
    if (quantity > 0) {
      dispatch(addToCartAction(sku, quantity));
    }
  };

  return (
    <div>
      {itemMap.list.map((sku) => (
        <div key={sku}>
          <h2>{sku}</h2>
          <p>Price: {itemMap.data[sku].unitPrice} £</p>
          <Formik
            initialValues={{
              sku,
              quantity: 0,
            }}
            onSubmit={handleAddToCart}
          >
            <Form>
              <Field name='id' type='hidden' value={sku} />
              <Field name='quantity' type='number' min={0} />
              <button type='submit'>Add To Cart</button>
              <p>Item Total: {formatNumber(state.data[sku]?.total || 0)}</p>
            </Form>
          </Formik>
        </div>
      ))}
    </div>
  );
};

export default Card;
