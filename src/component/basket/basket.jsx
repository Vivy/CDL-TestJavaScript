import { updateBasketAction } from '../../util/reducer';

const Basket = ({ state, dispatch }) => {
  const handleUpdate = (e) =>
    dispatch(updateBasketAction(e.target.name, e.target.value));

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
        </div>
      ))}
    </div>
  );
};

export default Basket;
