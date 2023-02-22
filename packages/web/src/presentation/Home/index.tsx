import { withTransaction } from '@elastic/apm-rum-react';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default withTransaction('/', 'route-change')(Home);
