import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { formatAmount } from '../../utils/ethereum';

export const StatisticsFooter = ({ tokensSold, purchases, totalReceived }) => (
  <div className="_3figures">
    <div className="_1 holder1">
      <h1 className="claimsheading">
        <FormattedMessage id= "fundraiser.components.Statistics.tokensclaimed" />
      </h1>
      <h1 className="claimsheading total">{formatAmount(tokensSold)}</h1>
    </div>
    <div className="_2 holder1">
      <h1 className="claimsheading">
        <FormattedMessage id= "fundraiser.components.Statistics.contributors" />
      </h1>
      <h1 className="claimsheading total">{purchases}</h1>
    </div>
    <div className="_3 holder1">
      <h1 className="claimsheading">
        <FormattedMessage id= "fundraiser.components.Statistics.raised" />
      </h1>
      <h1 className="claimsheading total">{formatAmount(totalReceived)}</h1>
    </div>
  </div>
);
