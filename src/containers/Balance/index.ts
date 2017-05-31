import { connect } from 'react-redux';
import { BalancePropsT } from '../../components/Balance';
import { Balance as Component } from '../../components';
import { getBalance } from '../../actions/balance';
import { RootState } from '../../reducers';
import { BalanceState } from '../../reducers/balance';

export interface Props {
  readonly onSubmit: (string) => null;
  readonly onError: (string) => null;
}

export function mapStateToProps(state: RootState): BalanceState {
  return state.balance;
}

export function mapDispatchToProps(dispatch): Props {
  return {
    onSubmit(address) {
      return dispatch(getBalance.request(address));
    },
    onError(message) {
      return dispatch(getBalance.error(message));
    },
  };
}

export const Balance = connect(
  mapStateToProps,
  mapDispatchToProps)(Component);
