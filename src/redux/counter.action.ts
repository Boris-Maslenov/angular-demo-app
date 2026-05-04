import { Action, props } from '@ngrx/store';
import { createAction } from '@ngrx/store';

// старый стиль
// export namespace CAR_ACTION {
//   export const ADD_CAR = 'ADD_CAR';
// }

// export class AddCar implements Action {
//   readonly type = CAR_ACTION.ADD_CAR;

//   constructor(public payload: string) {}
// }

export const increment = createAction('COUNTER_INCREMENT');
export const decrement = createAction('COUNTER_DECREMENT');
export const reset = createAction('COUNTER_RESET');
export const setValue = createAction('SET_VALUE', props<{ value: number }>());
