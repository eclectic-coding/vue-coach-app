import { createRouter, createWebHistory } from 'vue-router';

import CoachesList from '@/views/CoachesList';
import NotFound from '@/views/NotFound';

function lazyload(view) {
  return () => import(`@/views/${view}.vue`);
}

const routes = [
  { path: '/', redirect: '/coaches' },
  { path: '/coaches', name: 'Coaches', component: CoachesList },
  {
    path: '/coaches/:id', name: 'Coach', component: lazyload('CoachesDetail'),
    children: [
      {
        path: 'contact', component: lazyload('ContactCoaches')
      }
    ]
  },
  { path: '/register', name: 'Register', component: lazyload('RequestsReceived') },
  { path: '/requests', name: 'Requests', component: lazyload('RequestsReceived') },
  { path: '/:notFound(.*)', component: NotFound }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
