import { Actions, State } from '../types/store';
import { ActionType } from './actions';

const initialState: State = {
  isNavbarShown: false,
};

const reducer = (state = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SHOW_NAVBAR:
      return { ...state, isNavbarShown: true };
    case ActionType.HIDE_NAVBAR:
      return { ...state, isNavbarShown: false };
    default:
      return state;
  }
};

export default reducer;
