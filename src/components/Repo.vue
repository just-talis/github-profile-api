<template>
  <div v-if="loading">Loading...</div>

  <div v-else>
    <h2 className="repo-head">Repository Data</h2>

    <h3>Name:</h3>
    {{ repo.name }}

    <h3>ID:</h3>
    {{ repo.id }}

    <h3>Date of Creation:</h3>
    {{ repo.created_at }}

    <h3>Forks:</h3>
    {{ repo.forks_count }}

    <h3>Watchers:</h3>
    {{ repo.watchers_count }}

    <h3>Language:</h3>
    {{ repo.language }}

    <h3>Size:</h3>
    {{ repo.size }}

    <h3>Stars:</h3>
    {{ repo.stargazers_count }}
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const loading = ref(true)
    const repo = ref({})
    const params = useRoute().params
    onMounted(async () => {
      const response = await fetch(`https://api.github.com/repos/just-talis/${params.id}`)
      const data = await response.json()
      repo.value = data
      console.log(loading, repo.value)
      setTimeout(() => (loading.value = false), 2000)
    })
    return { loading, repo }
  }
}
</script>