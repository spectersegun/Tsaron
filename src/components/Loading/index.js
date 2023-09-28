import React from 'react';
import { withRouter } from 'next/router';
import { useNProgress } from '@tanem/react-nprogress';

const Loading = ({ isRouteChanging }) => {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating: isRouteChanging,
  });

  return (
    <>
      <style jsx>{`
        .frame {
          opacity: ${isFinished ? 0 : 1};
          pointerevents: none;
          transition: opacity ${animationDuration}ms linear;
        }

        .bar {
          background: #81af00;
          box-shadow: 0px 2px 3px 2px #81af0057;
          height: 2px;
          left: 0;
          margin-left: ${(-1 + progress) * 100}%;
          position: fixed;
          top: 0;
          transition: margin-left ${animationDuration}ms linear;
          width: 100%;
          z-index: 3000;
        }

        .spinner {
          box-shadow: 0 0 10px #81af00, 0 0 5px #81af00;
          display: block;
          height: 100%;
          opacity: 1;
          position: absolute;
          right: 0;
          transform: rotate(3deg) translate(0px, -4px);
          width: 100px;
        }
      `}</style>
      <div className='frame'>
        <div className='bar'>
          <div className='spinner' />
        </div>
      </div>
    </>
  );
};

export default withRouter(Loading);
