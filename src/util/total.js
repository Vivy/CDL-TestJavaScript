export const itemTotal = (totalQuantity, specialPrice, specialQuantity, unitPrice) => {
  if (specialPrice) {
    if (totalQuantity < specialQuantity) { return totalQuantity * unitPrice } else {
      return (Math.floor(totalQuantity / specialQuantity)) * specialPrice + (totalQuantity % specialQuantity) * unitPrice
    }
  }
  return totalQuantity * unitPrice
}


export const getBasketTotal = (state) => state.list.map(sku => state.data[sku]?.total).reduce((acc, curr) => acc + +curr, 0)
