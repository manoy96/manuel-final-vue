<template>
  <v-containter grid-list-md>
    <v-layout justify-center="">
      <v-flex xs6>
        <v-card>
          <v-form>
            <v-text-field
              label="email"
              placeholder="email"
              v-model="email">
            </v-text-field>

            <v-text-field
              label="password"
              v-model="password"
              :type="show1 ? 'text' : 'password'">
            </v-text-field>
          </v-form>
        </v-card>
      </v-flex>
      <div>
        <p>{{ email }}</p>
        <p>{{ password }}</p>
      </div>
    </v-layout>
  </v-containter>
</template>

<script>
export default {
  data() {
    return{
      show1: false,
      password: 'password',
      email: 'email',
    }
  }
}
</script>

<style scoped>

</style>
