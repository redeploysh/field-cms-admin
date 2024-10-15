import { createRouter, createWebHistory } from 'vue-router'
import FieldsView from '@/components/FieldsView.vue'
import CreateView from '@/components/CreateView.vue'
import EditView from '@/components/EditView.vue'
import RecordsComponent from '@/components/RecordsComponent.vue'
import AccountsComponent from '@/components/AccountsComponent.vue'
import AccountsCreateComponent from '@/components/AccountsCreateComponent.vue'
import AccountsEditComponent from '@/components/AccountsEditComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'fields',
      component: FieldsView
    },
    {
      path: '/create',
      name: 'create',
      component: CreateView
    },
    {
      path: '/edit',
      name: 'edit',
      component: EditView
    },
    {
      path: '/records',
      name: 'records',
      component: RecordsComponent
    },
    {
      path: '/accounts',
      name: 'accounts',
      component: AccountsComponent
    },
    {
      path: '/accounts/create',
      name: 'create account',
      component: AccountsCreateComponent
    },
    {
      path: '/accounts/:id/edit',
      name: 'edit account',
      component: AccountsEditComponent
    }
  ]
})

export default router
