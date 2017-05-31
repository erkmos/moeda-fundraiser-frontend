import * as BigNumber from 'bignumber.js';
import { FUNDRAISER_UPDATE, NEW_PURCHASE } from '../constants/actions';

export interface FundraiserState {
  readonly totalReceived: BigNumber.BigNumber;
  readonly exchangeRate: number;
  readonly currentBlock: number;
  readonly purchases: number;
  readonly tokensSold: BigNumber.BigNumber;
  readonly isPaused: boolean;
  readonly isFinalised: boolean;
}

const initialState = {
  totalReceived: new BigNumber(0),
  exchangeRate: 0,
  currentBlock: 0,
  purchases: 0,
  tokensSold: new BigNumber(0),
  isPaused: false,
  isFinalised: false,
};

function parseAction({ data }) {
  const result = {};

  if (data.totalReceived) {
    result['totalReceived'] = new BigNumber(data.totalReceived);
  }
  if (data.exchangeRate) {
    result['exchangeRate'] = parseFloat(data.exchangeRate) / 100;
  }
  if (data.currentBlock) {
    result['currentBlock'] = parseInt(data.currentBlock, 10);
  }
  if (data.purchases) {
    result['purchases'] = parseInt(data.purchases, 10);
  }
  if (data.tokensSold) {
    result['tokensSold'] = new BigNumber(data.tokensSold);
  }
  if (data.isFinalised) {
    result['isFinalised'] = true;
  }
  if (data.isPaused !== undefined) {
    result['isPaused'] = data.isPaused;
  }

  return result;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FUNDRAISER_UPDATE:
      return Object.assign({}, state, parseAction(action));
    case NEW_PURCHASE:
      return state;
    default:
      return state;
  }
};
