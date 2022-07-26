import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/global-view/login/Login.vue';
import Dashboard from '@/global-view/dashboard/Dashboard.vue';
import NotFound from '@/global-view/not-found/NotFound.vue';
import Home from '@/global-view/dashboard/pages/home/Home.vue';
import Profile from '@/global-view/dashboard/pages/profile/Profile.vue';
import Teams from '@/global-view/dashboard/pages/teams/Teams.vue';
import Courses from '@/global-view/dashboard/pages/courses/Courses.vue';

const routes = [
  // {
  //   path: '/',
  //   redirect: '/login',
  // },
  // {
  //   path: '/splash',
  //   name: 'splash',
  //   component: Splash,
  // },
  {
    path: '/login',
    name: 'login-page',
    component: LoginPage,
  },
  {
    path: '/not-found',
    name: 'not-found',
    component: NotFound,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    redirect: '/home',
    component: Dashboard,
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home,
      },
      {
        path: '/my-profile',
        name: 'profile',
        component: Profile,
      },
      {
        path: '/my-teams',
        name: 'teams',
        component: Teams,
      },
      {
        path: '/courses',
        name: 'courses',
        component: Courses,
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/not-found',
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
