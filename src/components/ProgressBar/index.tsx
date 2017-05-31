import * as React from 'react';
import * as classNames from 'classnames';
import { amountToFiat, fromWei } from '../../utils/ethereum';
import {
  SALE_END_BLOCK, PUBLIC_CAP,
} from '../../constants/crowdsale';

function getPercentage(totalTokensSold) {
  const amount = fromWei(totalTokensSold);
  const percentage = amount.div(PUBLIC_CAP).mul(100).round(0).toNumber();
  return `${percentage}%`;
}

export const ProgressBar = ({
  tokensSold, exchangeRate, currentBlock, invertColor,
}: any) => {
  const width = getPercentage(tokensSold);
  return (
    <div className="progressbar-wrapper">
      <div className="total-indicators">
        <h1 className={classNames('raisedtitles', { sale: !invertColor })}>
          Total Amount Raised
        </h1>
      </div>
      <div className="total-indicators">
        <div className={classNames('progress-container', { sale: !invertColor })}>
          <div
            className={classNames('progress', { sale: !invertColor })}
            style={{ width }}>
          </div>
        </div>
      </div>
    </div>);
};
