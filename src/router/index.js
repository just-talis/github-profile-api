import { createRouter, createWebHistory } from 'vue-router'
import ReposList from '../components/ReposList.vue'
import Repo from '../components/Repo.vue'
import HomeView from '../components/HomeView.vue'
import NoMatch from '../components/NoMatch.vue'


const routes = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    
    {
      path: '/list',
      component: ReposList
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