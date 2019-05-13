import { combineReducers } from "redux";
import { fork } from "redux-saga/effects";

import { beersReducer } from "./beers";
import * as BeersSagas from "./beers/beers.sagas";

export const rootReducer = combineReducers({
  beers: beersReducer
});

export default function* rootSaga() {
  yield fork(BeersSagas.fetchBeersIfNotWatcher);
  yield fork(BeersSagas.fetchBeersWatcher);
  yield fork(BeersSagas.createBeersWatcher);
  yield fork(BeersSagas.rateBeersWatcher);
}
