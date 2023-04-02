export const basketInitialState = {
  list: [],
  data: {}
}

export const basketReducer = (state, action) => {
  switch (action.type) {

    case 'ADD_TO_BASKET':
      return {
        //LOGIC
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
