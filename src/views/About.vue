<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <li v-for="film in allFilms" :key="film.episode_id">
        {{ film.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { films } from "../assets/films";
export default {
  data: function(){
    return {
      allFilms: films
    }   
  },
}
</script>

<style scoped>
ul{
  list-style-type: none;
  text-align: left;
  color:brown;
}

</style>


