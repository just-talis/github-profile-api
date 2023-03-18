import { createRouter, createWebHistory } from 'vue-router'
import EstherSimon from '../components/EstherSimon.vue'
import Repo from '../components/Repo.vue'
import HomeView from '../components/HomeView.vue'
import NoMatch from '../components/NoMatch.vue'


const routes = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/homeview'
    },
    {
      path: '/esther',
      component: EstherSimon
    },

    {
      path: '/homeview',
      component: HomeView
    },

    {
      path: '/repo/:id',
      component: Repo
    },

    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NoMatch
    },
  ]
})

export default routes