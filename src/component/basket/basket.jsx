import { updateBasketAction } from '../../util/reducer';
import { getBasketTotal } from '../../util/total';

const Basket = ({ state, dispatch }) => {
  const handleUpdate = (e) =>
    dispatch(updateBasketAction(e.target.name, e.target.value));

  const total = getBasketTotal(state);
  return (
    <div>
      {state.list.map((sku) => (
        <div key={sku}>
          <h2>{sku}</h2>
          <input
            type='number'
            name={sku}
            value={state.data[sku].quantity}
            onChange={handleUpdate}
            min={0}
          />
          <p>Total: {state.data[sku]?.total}</p>
        </div>
      ))}
      <p>Basket Total: {total}</p>
    </div>
  );
};

export default Basket;
