<template>
  <div class="app">
    <header class="container-fluid bg-primary text-light">
      <div class="row">
        <div class="col-12">
          <h1><img alt="Vue logo" src="./assets/logo.png"></h1>
        </div>
      </div>
    </header>
    <body class="container">
      <div class="row">
        <div class="col">
          <form @submit.prevent="search">
            <input type="text" placeholder="yyyy-mm-dd" v-model="state.query">
            <button type="submit" class="btn btn-success">Search</button>
          </form>
        </div>
        <div class="col-8">
          <img :src="state.pictures" alt="">
        </div>
      </div>
    </body>
    <footer>
      
    </footer>
  </div>
</template>

<script>
import {pictureService} from './services/pictureService'
import { reactive, computed } from 'vue'
import {AppState} from './AppState'

export default {
  name: 'App',
  setup() {
    const state = reactive({
      query: '',
      pictures: computed(()=> AppState.pictures)
    })
    return {
      state,
      async search(){
        try {
          await pictureService.searchPictures(state.query)
          state.query = ''
        } catch (error){
          console.error(error)
        }
      }}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 img {
  height: 2em;
}
</style>
