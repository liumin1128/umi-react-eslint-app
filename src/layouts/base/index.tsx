import * as React from 'react';
import { IRoute } from 'umi';

const BaseLayout: React.FunctionComponent<IRoute> = (props) => {
  const {
    children,
    // location, history
  } = props;

  // function navigateTo(path: string) {
  //   history.push(path);
  // }

  // function comparePath(p1: string, p2: string, deep = 1) {
  //   return p1.split('/')[deep] === p2.split('/')[deep];
  // }

  return <div>{children}</div>;
};

export default BaseLayout;
