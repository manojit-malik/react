import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));

function LazyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}

export default LazyComponent;