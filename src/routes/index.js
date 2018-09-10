import App from '../pages/App';

import { Public } from '../HOC';

const indexRoutes = [
  {
    name: 'App',
    path: '/',
    component: Public(App),
  }
]

export default indexRoutes;
