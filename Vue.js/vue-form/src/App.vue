<template>
  <form v-on:submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username">
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="password" v-model="password">
    </div>
    <button type="submit">login</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  // 컴포넌트간의 데이터가 공유되지 않도록 하기 위해서
  data: function(){
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    submitForm: function(){ // 데이터를 서버에 보냄
      // event.preventDefault(); // 일반적인 바닐라 js나 jquery에서 새로고침 막는 법
      console.log(this.username, this.password);
      var url = 'https://jsonplaceholder.typicode.com/users'
      var data = {
        username: this.username,
        password: this.password
      }
      axios.post(url, data)
        .then(function(response){
          console.log(response);
        })
        .catch(function(error){
          console.log(error);
        })
    }
  }
}
</script>

<style>

</style>