import * as React from 'react';
import { connect } from 'react-redux';
import { Statistics as Component } from '../../components/Statistics';
import { RootState } from '../../reducers';
import { FundraiserState } from '../../reducers/websocket';
import { getSaleState } from '../../utils/crowdsale';

export function mapStateToProps(state: RootState) {
  return {
    totalReceived: state.websocket.totalReceived,
    tokensSold: state.websocket.tokensSold,
    purchases: state.websocket.purchases,
    exchangeRate: state.websocket.exchangeRate,
    currentBlock: state.websocket.currentBlock,
    saleState: getSaleState(state.websocket),
  };
}

export function mapDispatchToProps() {
  return {};
}


export const Statistics = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
