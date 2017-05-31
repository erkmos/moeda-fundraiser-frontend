import { combineReducers, Reducer } from 'redux';
import websocket, { FundraiserState } from './websocket';
import balance, { BalanceState } from './balance';

export interface RootState {
  readonly websocket: FundraiserState;
  readonly balance: BalanceState;
}

export default combineReducers<RootState>({
  websocket,
  balance,
});
