import * as React from 'react';
import { Box } from '../Box';
import { fromWei, isAddress } from '../../utils/ethereum';
import * as classNames from 'classnames';
import { BalanceState } from '../../reducers/balance';

function handleSubmit(onSubmit, onError) {
  return (event) => {
    event.preventDefault();
    const elem = document.getElementById('eth-address');
    const address = elem['value'];

    if (isAddress(address)) {
      onSubmit(address.toLowerCase());
      return true;
    }
    onError('invalid address');
    return false;
  };
}

export interface BalancePropsT extends BalanceState {
  readonly onSubmit: (string) => null;
  readonly onError: (string) => null;
}

function displayBalance(balance, loading, balanceLoaded, error) {
  if (error) {
    return (<h1 className="claimsheading balance error">{error}</h1>);
  }
  if (loading) {
    return (<div className="sk-three-bounce">
        <div className="sk-child sk-bounce1"></div>
        <div className="sk-child sk-bounce2"></div>
        <div className="sk-child sk-bounce3"></div>
      </div>);
  }
  if (balanceLoaded) {
    return (
      <h1 className="claimsheading balance">{fromWei(balance).toString(10)} MDA</h1>
    );
  }
  return null;
}

export const Balance = ({
  balance, loading, onSubmit, error, balanceLoaded, onError, intl,
}: any) => (
  <Box title={'fundraiser.components.Balance.title'} extraCss={'check'}>
    <div className="div-block">
      <div>
        <div className="form-wrapper">
          <form
            className={classNames('form', {
              'extra-padding': (!balanceLoaded && !error) })}
            id="email-form"
            name="email-form"
            onSubmit={handleSubmit(onSubmit, onError)}
          >
            <input
              className="w-input"
              id="eth-address"
              name="name"
              placeholder="Enter your moeda address"
              type="text" />
            <input
              className="submit-button w-button"
              type="submit"
              value="Check" />
          </form>
        </div>
      </div>
      {displayBalance(balance, loading, balanceLoaded, error)}
    </div>

  </Box>
);
