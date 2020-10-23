import { createRouter, createWebHashHistory } from 'vue-router';

import CoachesList from '@/views/CoachesList';
import NotFound from '@/views/NotFound';

function lazyload(view) {
  return () => import(`@/views/${view}.vue`);
}

const routes = [
  { path: '/', redirect: '/coaches' },
  { path: '/coaches', name: 'Coaches', component: CoachesList },
  {
    path: '/coaches:id', name: 'Coach', component: lazyload('CoachesList'),
    children: [
      {
        path: 'contact', component: lazyload('ContactCoaches')
      }
    ]
  },
  { path: '/register', name: 'Register', component: lazyload('RequestsReceived') },
  { path: '/requests', name: 'Register', component: lazyload('RequestsReceived') },
  { path: '/:notFound(.*)', component: NotFound }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
