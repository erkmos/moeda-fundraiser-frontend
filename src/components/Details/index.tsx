import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import Box from '../Box';
import {
  CROWDSALE_CONTRACT, CrowdsaleState, DUST_LIMIT,
} from '../../constants/crowdsale';
import { stateToString } from '../../utils/crowdsale';
import * as style from './style.css';

function showAddress(state, rate) {
  switch (state) {
    case CrowdsaleState.ACTIVE:
      return (
        <div className="div-block">
          <h1 className="heading raised title">
            <FormattedMessage id="fundraiser.components.Details.active.title"/>
            </h1>
          <h1 className="raisedtitles">
            <FormattedMessage id="fundraiser.components.Details.active.address" />
          </h1>
          <h1 className="address claimsheading">
            {CROWDSALE_CONTRACT}
          </h1>
          <h1 className="claimsheading gas">
            <FormattedMessage id="fundraiser.components.Details.active.gas" />
          </h1>
          <h1 className="claimsheading">
            <FormattedMessage
              id="fundraiser.components.Details.active.rate"
              values={{ rate, dust: DUST_LIMIT }}
            />
          </h1>
        </div>
      );
    case CrowdsaleState.COMPLETED:
      return (
        <div className="div-block">
          <h1 className="heading raised title">
            <FormattedMessage id="fundraiser.components.Details.completed.info" />
          </h1>
        </div>
      );
    case CrowdsaleState.FINALISED:
      return (
        <div className="div-block">
          <h1 className="heading raised title">
            <FormattedMessage id="fundraiser.components.Details.finalised.info" />
          </h1>
        </div>
      );
    case CrowdsaleState.NOT_STARTED:
      return (
        <div className="text-block">
          <p>
            <FormattedMessage id="fundraiser.components.Details.not_started.info1" />
          </p>

          <p>
            <FormattedMessage id="fundraiser.components.Details.not_started.info2" />
          </p>

          <p>
            <FormattedMessage id="fundraiser.components.Details.not_started.info3" />
          </p>

          <div className={style.logoWrap}>
            <img
              className={style.btcSuisseLogo}
              src="images/word_banner_logofirst.png" />
          </div>

        </div>
      );
    case CrowdsaleState.PAUSED:
      return (
        <div className="div-block">
          <h1 className="heading raised title">
            <FormattedMessage id="fundraiser.components.Details.paused.info" />
          </h1>
        </div>
      );
  }
}

function getExtraCss(state) {
  if (state === CrowdsaleState.NOT_STARTED) {
    return 'check info';
  }

  return '';
}

function getHeader(state) {
  return `fundraiser.components.Details.${stateToString(state)}.title`;
}

export const Details = ({ saleState, rate }) => (
  <Box title={getHeader(saleState)} extraCss={getExtraCss(saleState)}>
    {showAddress(saleState, rate)}
  </Box>
);
