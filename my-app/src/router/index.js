import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Admin from '../views/Admin.vue'
import Create from '../views/Create.vue'
import View from '../views/View.vue'
import Boss from '../views/Boss.vue'
import Project from '../views/Project.vue'
import BossStaff from '../views/BossStaff.vue'
import Staff from '../views/Staff.vue'
import StaffProject from '../views/StaffProject.vue'
import FellowStaff from '../views/FellowStaff.vue'
import Task from '../views/Task.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component: Login
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/create',
    name: 'create_user',
    component: Create
  },
  {
    path: '/view',
    name: 'view_user',
    component: View
  },
  {
    path: '/boss',
    name: 'boss',
    component: Boss
  },
  {
    path: '/bossprojects',
    name: 'boss_project',
    component: Project
  },
  {
    path: '/view/staff',
    name: 'view_staff',
    component: BossStaff
  },
  {
    path: '/staff',
    name: 'staff_dashboard',
    component: Staff
  },
  {
    path: '/staffprojects',
    name: 'staff_projects',
    component: StaffProject
  },
  {
    path: '/view/fellowstaff',
    name: 'fellow_staff',
    component: FellowStaff
  },
  {
    path: '/tasks',
    name: 'view-tasks',
    component: Task
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
