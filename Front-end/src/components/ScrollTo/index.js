import { DownCircleTwoTone, UpCircleTwoTone } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import './index.scss';

function ScrollTo() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const _y = window.pageYOffset;
    if (_y >= 350) {
      setIsTop(false);
    }
    return () => {};
  }, []);

  const onScroll = () => {
    const height = document.getElementById('root').clientHeight;
    document.querySelector('body').scroll({
      top: isTop ? height : 0,
      left: 0,
      behavior: 'smooth',
    });
    setIsTop(!isTop);
  };

  return (
    <div className="Scroll-To" style={{ opacity: 0.8 }}>
      {isTop ? (
        <DownCircleTwoTone onClick={onScroll} className="Scroll-To-arrow" />
      ) : (
        <UpCircleTwoTone onClick={onScroll} className="Scroll-To-arrow" />
      )}
    </div>
  );
}

export default ScrollTo;
