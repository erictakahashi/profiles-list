import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import paths from './constants/paths';
import List from './containers/List/List';

/**
 * Default `App` container.
 */
const App: FC = () => (
  <Switch>
    <Route exact strict path={paths.list} component={List} />
  </Switch>
);

export default App;
