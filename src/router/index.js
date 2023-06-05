import { createRouter, createWebHistory } from 'vue-router'
import { canNavigate } from '@/plugins/acl/routeProtection'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/dashboard' },
    {
      path: '/',
      component: () => import('../layouts/default.vue'),
      children: [
        {
          path: 'dashboard',
          component: () => import('../pages/dashboard.vue'),
          meta: {
            resource: 'Dashboard',
            action: 'read',
          },
        },
        {
          path: 'account-settings',
          component: () => import('../pages/account-settings.vue'),
          meta: {
            resource: 'Dashboard',
            action: 'read',
          },
        },
        {
          path: 'typography',
          component: () => import('../pages/typography.vue'),
          meta: {
            resource: 'Dashboard',
            action: 'read',
          },
        },
        {
          path: 'icons',
          component: () => import('../pages/icons.vue'),
          meta: {
            resource: 'Dashboard',
            action: 'read',
          },
        },
        {
          path: 'cards',
          component: () => import('../pages/cards.vue'),
          meta: {
            resource: 'Dashboard',
            action: 'read',
          },
        },
        {
          path: 'tables',
          component: () => import('../pages/tables.vue'),
          meta: {
            resource: 'Tables',
            action: 'read',
          },
        },
        {
          path: 'form-layouts',
          component: () => import('../pages/form-layouts.vue'),
          meta: {
            resource: 'Dashboard',
            action: 'read',
          },
        },
      ],
    },
    {
      path: '/',
      component: () => import('../layouts/blank.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('../pages/login.vue'),
          meta: {
            resource: 'Public',
          },
        },
        {
          path: 'register',
          component: () => import('../pages/register.vue'),
          meta: {
            resource: 'Public',
          },
        },
        {
          path: '/:pathMatch(.*)*',
          name: 'error',
          component: () => import('../pages/[...all].vue'),
          meta: {
            resource: 'Public',
          },
        },
      ],
    },
  ],
})


router.beforeEach((to, _, next) => {
  const userData = true//localStorage.getItem('userData')
  const isLoggedIn = true//userData && localStorage.getItem('accessToken') && localStorage.getItem('userAbility')

  if (!canNavigate(to)) {
    // Redirect to log in if not logged in
    if (!isLoggedIn) return next({ name: 'login', query: { marketplace: to.query.marketplace } })

    // If logged in => not authorized
    return next({ name: 'error' })

    // return next({ name: 'misc-not-authorized' })
  }

  // Redirect if logged in
  if (to.meta.redirectIfLoggedIn && isLoggedIn) {
    next('/')
  }

  return next()
})
export default router
