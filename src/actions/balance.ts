import * as BigNumber from 'bignumber.js';
import { createAction } from 'redux-actions';
import {
  BALANCE_REQUEST, BALANCE_ERROR, BALANCE_SUCCESS,
} from '../constants/actions';

export const getBalance = {
  request: (address: string) => ({ type: BALANCE_REQUEST, data: address }),
  success: (balance: BigNumber.BigNumber) => ({ type: BALANCE_SUCCESS, data: balance }),
  error: (message: string) => ({ type: BALANCE_ERROR, data: message }),
};
