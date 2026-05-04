// import { Action } from '@ngrx/store';
// import { AddCar, CAR_ACTION } from './cars.action';

// const initialState = {
//   cars: [],
// };

// export function carsReducer(state = initialState, action: AddCar) {
//   switch (action.type) {
//     case CAR_ACTION.ADD_CAR: {
//       return { ...state, cars: [...state.cars, action.payload] };
//     }
//     default: {
//       return state;
//     }
//   }
// }

import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, setValue } from './counter.action';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(setValue, (_, action) => action.value),
  on(reset, () => 0),
);
