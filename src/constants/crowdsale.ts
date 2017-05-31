import * as BigNumber from 'bignumber.js';

export const SALE_START_BLOCK = 5000000;
export const SALE_END_BLOCK = 5111557;
export const PUBLIC_CAP = new BigNumber('5000000000000000000000000');
export const ISSUER_CAP = new BigNumber('9000000000000000000000000');
export const TOTAL_CAP = PUBLIC_CAP.plus(ISSUER_CAP);
export const DUST_LIMIT = 0.001;
export const CROWDSALE_CONTRACT = 'TBD';
export const TOKEN_CONTRACT = 'TBD';

export const CrowdsaleState = {
  NOT_STARTED: 'NOT_STARTED',
  ACTIVE: 'ACTIVE',
  PAUSED: 'PAUSED',
  COMPLETED: 'COMPLETED',
  FINALISED: 'FINALISED',
};
