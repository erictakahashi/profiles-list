import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import paths from './constants/paths';
import List from './containers/List/List';
import Profile from './containers/Profile/Profile';

/**
 * Default `App` container.
 */
const App: FC = () => (
  <Switch>
    <Route exact strict path={paths.list} component={List} />
    <Route exact strict path={paths.profile} component={Profile} />
  </Switch>
);

export default App;
