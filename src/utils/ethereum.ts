import * as BigNumber from 'bignumber.js';

export type Amount = string | number | BigNumber.BigNumber;

const ETH_SCALE = new BigNumber('1e18');

export function amountToFiat(amount: Amount, fiatExchangeRate: number) {
  return '$' + fromWei(amount).mul(fiatExchangeRate).round(2).toString(10);
}

export function formatAmount(amount: Amount): string {
  return fromWei(amount).round(2).toString(10);
}

// adapted from web3.js
export function isBigNumber(object: any): boolean {
  return object instanceof BigNumber ||
      (object && object.constructor &&
      object.constructor.name === 'BigNumber');
}

export function fromWei(amount: Amount): BigNumber.BigNumber {
  const result = new BigNumber(amount).dividedBy(ETH_SCALE);

  return result;
}

export function isAddress(address: string): boolean {
  return /^(0x)?[0-9a-f]{40}$/i.test(address);
}
