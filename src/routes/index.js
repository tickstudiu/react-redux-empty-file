import App from '../pages/App';
import NotPage from '../pages/404';

import {Public} from '../HOC';

const indexRoutes = [
    {
        name: 'App',
        path: '/',
        component: Public(App),
    },
    {
        name: '404',
        path: '*',
        component: NotPage,
    },
];

export default indexRoutes;
