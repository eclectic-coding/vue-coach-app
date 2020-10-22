import { createRouter, createWebHistory } from 'vue-router';

import CoachesList from '@/pages/coaches/CoachesList';
import CoachesDetail from '@/pages/coaches/CoachesDetail';
import ContactCoaches from '@/pages/requests/ContactCoaches';
import CoachesRegistration from '@/pages/coaches/CoachesRegistration';
import RequestsReceived from '@/pages/requests/RequestsReceived';
import NotFound from '@/pages/NotFound';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id', component: CoachesDetail,
      children: [
        {
          path: 'contact', component: ContactCoaches
        }
      ]
    },
    { path: '/register', component: CoachesRegistration },
    { path: '/requests', component: RequestsReceived },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;
