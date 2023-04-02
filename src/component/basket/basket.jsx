const Basket = ({ state }) => {
  return (
    <div>
      {state.list.map((sku) => (
        <div key={sku}>
          <h2>{sku}</h2>
          <input type='number' name={sku} value={state.data[sku].quantity} />
        </div>
      ))}
    </div>
  );
};

export default Basket;
