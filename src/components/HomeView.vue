<template>
  <section class="container">
    <div class="avatar">
      <img :src= "profile.avatar_url" />
    </div>

    <div class="about">
      <h2>{{ profile.name }}</h2>
      <p>
        {{ profile.bio }}
      </p>
      <p>Repos: {{ profile.public_repos }} | Following: {{ profile.following }} | Followers: {{ profile.followers }}</p>
      <!-- <a href="/list"><button>View Repos</button></a> -->
      <router-link to="/list">View Repos</router-link>
    </div>
  </section>
</template>

<style scoped>
.container {
  margin: 90px auto;
  display: flex;
  align-items: center;
  max-width: 900px;
  gap: 50px;
}

p,
span {
  color: rgba(128, 124, 124, 0.775);
}

img {
  border-radius: 140px;
  border: solid 15px white;
  overflow: hidden;
  box-shadow: 0 0 20px 10px #ddd;
  height: 250px;
  width: 250px;
}

button {
  background-color: white;
  color: rgb(84, 84, 84);
  border-radius: 50px;
  padding: 10px 15px;
  border: solid 1px rgb(97, 147, 97);
  transition: 0.5s;
  cursor: pointer;
}

button:hover {
  background-color: rgb(97, 147, 97);
  color: white;
}
/* .avatar {
  border-radius: 140px;
  border: solid 15px white;
  overflow: hidden;
  box-shadow: 0 0 20px 20px #ddd;
} */
</style>

<script>
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const profile = ref({})
    onMounted(async () => {
      const response = await fetch(`https://api.github.com/users/just-talis`)
      const data = await response.json()
      profile.value = data
    })
    return { profile }
  }
}
</script>
