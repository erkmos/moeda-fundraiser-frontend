import * as React from 'react';
import * as classNames from 'classnames';
import * as style from '../../styles/style.css';
import { FormattedMessage } from 'react-intl';

export interface BoxProps {
  readonly children: any;
  readonly title: string;
  readonly extraCss?: string;
}

function getStyle(a, b) {
  if (b) {
    return `${a} ${b}`;
  }

  return a;
}

export const Box = ({ children, title, extraCss }: BoxProps) => (
  <div className={style.takepartWrap}>
    <div className="takepart title">
      <h1 className="heading">
        <FormattedMessage id={title} />
      </h1>
    </div>
    <div className={getStyle('takepart', extraCss)}>{children}</div>
  </div>
);

export default Box;
