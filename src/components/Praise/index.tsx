import * as React from 'react';
import { ThumbsUpAni } from './canvas';

interface IPraiseProps {
  test: string;
}

let thumbsUpAni;

const Praise: React.FunctionComponent<IPraiseProps> = (props) => {
  const { test } = props;
  console.log(test);

  return (
    <>
      22
      <canvas
        id="thumsCanvas"
        width="200"
        height="400"
        // style="width:100px;height:200px"
      />
      <button
        type="button"
        onClick={() => {
          thumbsUpAni = new ThumbsUpAni();
          // setInterval(() => {
          //   thumbsUpAni.start();
          // }, 300);
        }}
      >
        test
      </button>
      <button
        type="button"
        onClick={() => {
          thumbsUpAni.start();
        }}
      >
        start
      </button>
    </>
  );
};

export default Praise;
