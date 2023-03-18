<template>
  <div v-if="loading">loading...</div>
  <div v-else>
    <div v-for="repo in slicedPage" :key="repo.id">
      <RouterLink :to="`/repo/${repo.name}`">
        <h2 class="title">
          {{ repo.name }} <span>{{ repo.visibility }}</span>
        </h2>
      </RouterLink>
    </div>
    <div class="btn-container">
      <button :disabled="page == 1" @click="prev" class="btn">Prev</button>

       <div>
        <button
          @click="handleRepos(btn)"
          v-for="btn in Math.ceil(repos.length / reposPerPage)"
          :key="btn"
        >
          {{ btn }}
        </button>
      </div> 

      <button
        :disabled="page == Math.ceil(repos.length / reposPerPage)"
        @click="next"
        class="btn"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>

import { ref, onMounted, computed } from 'vue'

export default {
  setup() {
    const loading = ref(true)
    const repos = ref({})

const page = ref(1)

    onMounted(async () => {
      const response = await fetch('https://api.github.com/users/just-talis/repos')
      const data = await response.json()
      repos.value = data
      console.log(loading, repos.value)
      setTimeout(() => (loading.value = false), 2000)
    })
    const reposPerPage = 5
    const slicedPage = computed(() => {
      return repos.value.slice((page.value - 1) * reposPerPage, reposPerPage * page.value)
    })
    const handleRepos = (num) => {
      page.value = num
    }
    const next = () => {
      page.value++
    }
    const prev = () => {
      page.value--
    }
    return { loading, repos, slicedPage, page, reposPerPage,  handleRepos, next, prev }
  }
}
</script>
