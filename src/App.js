//@flow
import * as React from 'react';
import Root from './pages/Root';
import { hot } from 'react-hot-loader/root';

const App: React.AbstractComponent<{}> = () => <Root />;

export default (hot(App): React.AbstractComponent<{||}>);
