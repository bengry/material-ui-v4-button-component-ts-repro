import * as React from 'react';
import { Link, Router, LinkProps } from '@reach/router';
import { Button } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button';

const Hello: React.FC<{ path: string }> = () => <h1>Hello!</h1>;
const Dashboard: React.FC<{ path: string }> = () => <h1>Dashboard</h1>;

type ComponentWorkaroundProps<P extends {}> = P & {
  component?: React.ComponentType<P>;
};

const MyButton = React.forwardRef<
  HTMLButtonElement,
  Omit<ButtonProps, 'component'> & ComponentWorkaroundProps<LinkProps<void>>
>((props, ref) => {
  return <Button variant="contained" {...props} ref={ref} />;
});

export const App = () => (
  <div>
    <nav>
      <MyButton component={Link} to="/">
        Home
      </MyButton>
      {' | '}
      <MyButton component={Link} to="dashboard">
        Dashboard
      </MyButton>
    </nav>
    <Router>
      <Hello path="/" />
      <Dashboard path="dashboard" />
    </Router>
  </div>
);
