<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex v-for="ship in starships" :key="ship.model" xs3>
        <transition name="flip" mode="opt-in">
      <v-card height="225px">
        <v-card-title primary-title>
        <div>
          <h3 class="headline nb-9">{{ ship.name |allCaps }}</h3>
          <div>{{ ship.model | allCaps }}</div>
          <span>{{ ship.manufacturer }}</span>
        </div>
        </v-card-title>
        <v-card-action>
          <v-btn @click="showing = false"  color="blue">Search</v-btn>
        </v-card-action>
      </v-card>
        </transition>
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
import { aboutMixin } from "./aboutMixins.js"

export default {
  mixins: [aboutMixin]
  // data: function(){
  //   return {
  //     allFilms: films,
  //     starships,
  //     planets
  //   }   
  // },
  // filters: {
  //   allCaps(value) {
  //     return value.toUpperCase()
  //   }
  // },
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
.flip-enter {

}
.flip-enter-active {
  animation: flip-in 0.5s ease-out forwards
}
.flip-leave {

}
.flip-leave-active {
  animation: flip-out 0.5s ease-out forwards
}

@keyframes flip-in {
  from {
    transform: rotateY(90deg)
  }
  to {
    transform: rotateY(0deg)
  }
}
@keyframes flip-out {
  from {
    transform: rotateY(0deg)
  }
  to {
    transform: rotateY(90deg)
  }
}

</style>


