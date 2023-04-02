import { itemMap, specialPrice } from '../data'
import { itemTotal } from './total'

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

export const updateBasketAction = (sku, quantity) => ({
  type: 'UPDATE_BASKET',
  sku,
  quantity
})

export const removeFromBasketAction = (sku) => ({
  type: 'REMOVE_FROM_BASKET',
  sku
})

const removeObjectProperty = (object, key) => {
  delete object[key]
  return object
}

export const basketReducer = (state, action) => {
  switch (action.type) {

    case 'ADD_TO_BASKET':
      return {
        list: [...new Set([...state.list, action.sku])],
        data: {
          ...state.data,
          [action.sku]: {
            ...state.data[action.sku],
            quantity: +action.item.quantity + (+state.data[action.sku]?.quantity || 0),
            total: itemTotal(
              +action.item.quantity + (+state.data[action.sku]?.quantity || 0),
              specialPrice[action.sku]?.price,
              specialPrice[action.sku]?.quantity,
              itemMap.data[action.sku].unitPrice
            ).toFixed(2)
          }
        }
      }

    case 'UPDATE_BASKET':
      return {
        ...state,
        data: {
          ...state.data,
          [action.sku]: {
            ...state.data[action.sku],
            quantity: +action.quantity,
            total: itemTotal(
              +action.quantity,
              specialPrice[action.sku]?.price,
              specialPrice[action.sku]?.quantity,
              itemMap.data[action.sku].unitPrice
            ).toFixed(2)
          }
        }
      }

    case 'REMOVE_FROM_BASKET':
      return {
        list: state.list.filter(a => a !== action.sku),
        data: removeObjectProperty(
          state.data, action.sku
        )
      }

    default:
      state
  }
}
