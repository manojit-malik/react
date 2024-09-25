import { throttle } from 'lodash';
import { useCallback, useEffect } from 'react';

const LoadashThrottledComponent = () => {
    const handleResize = useCallback(
      throttle(() => {
        console.log('Window resized');
      }, 1000),
      []
    );
  
    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);
  
    return <div>Resize the window to see throttling in action.</div>;
  };
  

  export default LoadashThrottledComponent;