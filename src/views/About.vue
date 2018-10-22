<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex v-for="ship in starships" :key="ship.model" xs3>
      <v-card height="225px">
        <v-card-title primary-title>
        <div>
          <h3 class="headline nb-9">{{ ship.name }}</h3>
          <div>{{ ship.model }}</div>
          <span>{{ ship.manufacturer }}</span>
        </div>
        </v-card-title>
        <v-card-action>
          <v-btn flat color="blue">Search</v-btn>
        </v-card-action>
      </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  
  
  <!-- <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <li v-for="film in allFilms" :key="film.episode_id">
        {{ film.title }}
      </li>
    </ul>
  </div> -->
</template>

<script>
import { films } from "../assets/films";
import { starships } from "../assets/starships";
import { planets } from "../assets/planets";
export default {
  data: function(){
    return {
      allFilms: films,
      starships,
      planets
    }   
  },
}
</script>

// how to make boxes all the same size and line up correctly

<style scoped>
ul{
  list-style-type: none;
  text-align: left;
  color:brown;
}
span{
  color: #0000ff;
}

</style>


