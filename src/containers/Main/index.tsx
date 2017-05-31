import * as React from 'react';
import { connect } from 'react-redux';
import { ProgressBar } from '../ProgressBar';
import { amountToFiat } from '../../utils/ethereum';
import { RootState } from '../../reducers';
import { getSaleState } from '../../utils/crowdsale';
import {
  SALE_START_BLOCK, CrowdsaleState } from '../../constants/crowdsale';

function mapStateToProps(state: RootState) {
  return {
    totalReceived: state.websocket.totalReceived,
    exchangeRate: state.websocket.exchangeRate,
    saleState: getSaleState(state.websocket),
  };
}

const mapDispatchToProps = () => ({});

export function component({ totalReceived, exchangeRate, saleState }: any) {
  switch (saleState) {
    case CrowdsaleState.NOT_STARTED:
      return (
        <div className="full-width-container">
          <h1 className="heading">Crowdsale starts on 28/7/2017.</h1>
          <a className="button w-button" href="fundraiser.html">Learn more</a>
        </div>
      );
    case CrowdsaleState.ACTIVE:
      return (<div className="full-width-container">
        <h1 className="heading live">Crowdsale is now live.</h1>
        <ProgressBar invertColor />
        <h1 className="heading total">
          {amountToFiat(totalReceived, exchangeRate)}
        </h1>
        <h1 className="heading raised">Currently raised.</h1>
        <a className="button w-button" href="fundraiser.html">Contribute now</a>
      </div>);
    case CrowdsaleState.COMPLETED:
    case CrowdsaleState.FINALISED:
      return (
        <div className="full-width-container">
          <h1>
          The crowdsale has completed. {amountToFiat(totalReceived, exchangeRate)} was raised.
        </h1></div>);
  }
}

export const Main = connect(
  mapStateToProps, mapDispatchToProps)(component);
