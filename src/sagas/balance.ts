import { call, put, takeLatest } from 'redux-saga/effects';
import * as BigNumber from 'bignumber.js';
import * as request from 'superagent';
import { TOKEN_CONTRACT } from '../constants/crowdsale';
import { BALANCE_REQUEST } from '../constants/actions';
import { getBalance } from '../actions/balance';

function fetchBalance(address) {
  return request.get(
    'https://api.etherscan.io/api?module=account&action=tokenbalance&' +
    `contractaddress=${TOKEN_CONTRACT}&address=${address}` +
    '&tag=latest').then(({ body }) => body);
}

function isSuccess(response) {
  return response && response.message === 'OK';
}

function* getAddressBalance(action) {
  try {
    const response = yield call(fetchBalance, action.data);
    if (!isSuccess(response)) {
      throw new Error('server error');
    }

    const balance = new BigNumber(response.result);
    yield put(getBalance.success(balance));

  } catch (error) {
    yield put(getBalance.error(error.message));
  }
}

export function* getAddressBalanceSaga() {
  yield takeLatest(BALANCE_REQUEST, getAddressBalance);
}

export default getAddressBalanceSaga;
