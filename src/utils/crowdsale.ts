import * as BigNumber from 'bignumber.js';
import { fromWei } from '../utils/ethereum';
import {
  SALE_START_BLOCK, SALE_END_BLOCK, CrowdsaleState, TOTAL_CAP,
} from '../constants/crowdsale';

export function soldOut(tokensSold) {
  return tokensSold.eq(TOTAL_CAP);
}

export function getSaleState({ isPaused, isFinalised, currentBlock, tokensSold }) {
  if (isPaused) {
    return CrowdsaleState.PAUSED;
  }

  if (isFinalised) {
    return CrowdsaleState.FINALISED;
  }

  if (currentBlock < SALE_START_BLOCK) {
    return CrowdsaleState.NOT_STARTED;
  }

  if (currentBlock >= SALE_START_BLOCK &&
    currentBlock < SALE_END_BLOCK && soldOut(tokensSold)
  ) {
    return CrowdsaleState.ACTIVE;
  }

  return CrowdsaleState.COMPLETED;
}


export function stateToString(state): string {
  switch (state) {
    case CrowdsaleState.NOT_STARTED:
      return 'not_started';
    case CrowdsaleState.ACTIVE:
      return 'active';
    case CrowdsaleState.PAUSED:
      return 'paused';
    case CrowdsaleState.COMPLETED:
      return 'completed';
    case CrowdsaleState.FINALISED:
      return 'finalised';
    default:
      throw new Error('unknown state');
  }
}
