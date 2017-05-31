import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import { ProgressBar as Component } from '../../components';

function mapStateToProps(state: RootState) {
  return {
    totalReceived: state.websocket.totalReceived,
    exchangeRate: state.websocket.exchangeRate,
    currentBlock: state.websocket.currentBlock,
    tokensSold: state.websocket.tokensSold,
  };
}

const mapDispatchToProps = () => ({});

export const ProgressBar = connect(
  mapStateToProps, mapDispatchToProps)(Component);
