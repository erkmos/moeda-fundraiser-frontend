import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Box } from '../Box';
import { StatisticsFooter } from '../StatisticsFooter';
import { ProgressBar } from '../ProgressBar';
import { amountToFiat, fromWei } from '../../utils/ethereum';
import {
  SALE_END_BLOCK, SALE_START_BLOCK, CrowdsaleState,
} from '../../constants/crowdsale';
import * as styles from '../../styles/style.css';

function renderFooter(displayFooter, totalReceived, tokensSold, purchases) {
  if (displayFooter) {
    return (<StatisticsFooter
      totalReceived={totalReceived}
      tokensSold={tokensSold}
      purchases={purchases}
    />);
  }

  return null;
}

function showSaleStatus(currentBlock, saleState) {
  if (saleState === CrowdsaleState.ACTIVE) {
    const blocksRemaining = Math.max(0, SALE_END_BLOCK - currentBlock);
    return (<FormattedMessage id="fundraiser.components.Statistics.blocksleft" values={{
      blocks: blocksRemaining,
    }} />);
  } else if (saleState === CrowdsaleState.COMPLETED || saleState === CrowdsaleState.FINALISED) {
    return (<FormattedMessage id="fundraiser.components.Statistics.completed" />);
  } else if (saleState === CrowdsaleState.NOT_STARTED) {
    return (<FormattedMessage id="fundraiser.components.Statistics.not_started1" />);
  }
}

export const Statistics = ({
  totalReceived, exchangeRate, purchases, tokensSold, currentBlock,
  displayFooter, saleState,
}: any) => {
  return (
  <div className={styles.takepartWrap}>
    <div className="takepart title">
      <h1 className="heading">
        <FormattedMessage id="fundraiser.components.Statistics.title" />
      </h1>
    </div>
    <div className="results takepart title">
      <ProgressBar
        tokensSold={tokensSold}
        exchangeRate={exchangeRate}
        currentBlock={currentBlock}
      />
      <h1 className="heading sale">
        {amountToFiat(totalReceived, exchangeRate)}
      </h1>
      <h4 className="heading smaller sale">
        {showSaleStatus(currentBlock, saleState)}
      </h4>
    </div>
    {renderFooter(displayFooter, totalReceived, tokensSold, purchases)}
  </div>);
};
