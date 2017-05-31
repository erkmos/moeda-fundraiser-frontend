import * as BigNumber from 'bignumber.js';
import {
  BALANCE_SUCCESS, BALANCE_REQUEST, BALANCE_ERROR,
} from '../constants/actions';

export interface BalanceState {
  readonly balance: BigNumber.BigNumber;
  readonly balanceLoaded: boolean;
  readonly loading: boolean;
  readonly error: string;
}

const initialState: BalanceState = {
  balance: new BigNumber(0),
  balanceLoaded: false,
  loading: false,
  error: '',
};

export default (state = initialState, action): BalanceState => {
  switch (action.type) {
    case BALANCE_REQUEST:
      return Object.assign({}, state, { loading: true, error: '' });
    case BALANCE_SUCCESS:
      return Object.assign({}, state, {
        balance: new BigNumber(action.data), loading: false, balanceLoaded: true });
    case BALANCE_ERROR:
      return Object.assign({}, state, { loading: false, error: action.data });
    default:
      return state;
  }
};
