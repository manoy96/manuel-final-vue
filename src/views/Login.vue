<template>
  <v-containter grid-list-md>
    <v-layout justify-center="">
      <v-flex xs6>
        <v-card>
          <v-form @submit.prevent="onSubmit">
              <div class="input" :class="{invalid: $v.email.$error}">
            <v-text-field
              label="email"
              v-model="email"
              @input="$v.email.$touch()"
              placeholder="youremail@mail.com">
            </v-text-field>
            <p v-if="!$v.email.email">Please provide a valid email address</p>
              </div>
            <v-text-field
              label="password"
              v-model="password"
              :type="show1 ? 'text' : 'password'"
              :class="{invalid: $v.password.$error}"
              @input="$v.password.$touch()">
            </v-text-field>
             <p v-if="!$v.password.required">Please provide a password</p>
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
import { required, email, minLength } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      show1: false,
      password: 'password',
      email: 'email'
    }
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLen: minLength(6),
      password
    }
  },
  methods: {
    onSubmit() {
      console.log('thanks for submitting!')
    }
  }
}
</script>

<style scoped>
.input.invalid div{

}
</style>
