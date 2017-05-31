import * as React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { RootState } from '../../reducers';
import { FundraiserState } from '../../reducers/websocket';
import { getBalance } from '../../actions/balance';
import { Header, Box, Details } from '../../components';
import {
  CROWDSALE_CONTRACT, SALE_START_BLOCK,
} from '../../constants/crowdsale';
import { Statistics } from '../Statistics';
import { Balance } from '../Balance';
import { getSaleState } from '../../utils/crowdsale';
import * as style from './style.css';

export interface State {
  /* empty */
}

function mapStateToProps(state: RootState) {
  return {
    currentBlock: state.websocket.currentBlock,
    crowdsaleState: getSaleState(state.websocket),
    rate: state.websocket.exchangeRate,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const Component = ({ currentBlock, crowdsaleState, rate }: any) => (
  <div className="contribute section">
    <div className="container fund w-container">
      <Details saleState={crowdsaleState} rate={rate} />
      <Statistics displayFooter />
      <Balance />
      <Box title={'fundraiser.containers.App.title'} extraCss={'check info'}>
         <div className="text-block">
          <p>
            <FormattedMessage id="fundraiser.containers.App.section1.paragraph1" />
          </p>

          <p>
            <FormattedMessage id="fundraiser.containers.App.section1.paragraph2" />
          </p>
        </div>

        <h1 className="claimsheading">
          <FormattedMessage id="fundraiser.containers.App.section2.heading" />
        </h1>
        <div className="text-block">
          <ul>
            <li><FormattedMessage id="fundraiser.containers.App.section2.list.item1" /></li>
            <li><FormattedMessage id="fundraiser.containers.App.section2.list.item2" /></li>
            <li><FormattedMessage id="fundraiser.containers.App.section2.list.item3" /></li>
          </ul>
        </div>

        <h1 className="claimsheading">
          <FormattedMessage id="fundraiser.containers.App.section3.heading" />
        </h1>
        <div className="text-block">
          <p>
            <FormattedMessage id="fundraiser.containers.App.section3.paragraph" />
          </p>
        </div>

        <div className="text-block">
          <h1 className="claimsheading">
            <FormattedMessage id="fundraiser.containers.App.section4.heading" />
          </h1>
          <p>
            <FormattedMessage id="fundraiser.containers.App.section4.paragraph" />
          </p>
        </div>

        <div className="text-block">
          <h1 className="claimsheading">
            <FormattedMessage id="fundraiser.containers.App.section5.heading" />
          </h1>
          <p>
            <FormattedMessage id="fundraiser.containers.App.section5.paragraph1" />
          </p>
            <div className={style.cta}>
              <a className={style.link} href="https://www.bitcoinsuisse.ch/moeda">
                <img className={style.ctaImage} src="images/btcsuisse_cta.png" />
              </a>
            </div>
          <p><FormattedMessage id="fundraiser.containers.App.section5.paragraph2" /></p>
          <p><FormattedMessage id="fundraiser.containers.App.section5.disclaimer" /></p>
        </div>

        <div className="text-block">
          <h1 className="claimsheading">
            <FormattedMessage id="fundraiser.containers.App.section6.heading" />
          </h1>
          <p>
            <FormattedMessage id="fundraiser.containers.App.section6.paragraph1" />
          </p>
          <p>
            <FormattedMessage id="fundraiser.containers.App.section6.paragraph2" />
          </p>
          <p>
            <FormattedMessage id="fundraiser.containers.App.section6.paragraph3" />
          </p>
          <p>
            <FormattedMessage id="fundraiser.containers.App.section6.paragraph4" />
          </p>
        </div>
      </Box>
    </div>
  </div>
);

export const App = connect(mapStateToProps, mapDispatchToProps)(Component);
