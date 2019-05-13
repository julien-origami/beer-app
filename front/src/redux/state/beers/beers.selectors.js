export const beerItemsSelector = state => state.beers.items;
export const beerNewItemsSelector = state => state.beers.newItems;

export const allBeersSelector = state => [
  ...beerItemsSelector(state),
  ...beerNewItemsSelector(state)
];
