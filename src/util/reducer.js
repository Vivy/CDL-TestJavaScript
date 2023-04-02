import { itemMap } from '../data'

export const basketInitialState = {
  list: [],
  data: {}
}

export const addToCartAction = (sku, quantity) => ({
  type: 'ADD_TO_BASKET',
  item: {
    ...itemMap.data[sku],
    quantity
  },
  sku
})

export const basketReducer = (state, action) => {
  switch (action.type) {

    case 'ADD_TO_BASKET':
      return {
        list: [...new Set([...state.list, action.sku])],
        data: {
          ...state.data,
          [action.sku]: {
            ...state.data[action.sku],
            quantity: +action.item.quantity + (+state.data[action.sku]?.quantity || 0)
          }
        }
      }

    case 'UPDATE_BASKET':
      return {
        //LOGIC
      }
    case 'REMOVE_FROM_BASKET':
      return {
        //LOGIC
      }

    default:
      state
  }
}
