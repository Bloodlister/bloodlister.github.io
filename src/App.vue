<template>
  <div id="app">
    <HeaderCmp></HeaderCmp>
    <MainCmp></MainCmp>
  </div>
</template>

<script>
import HeaderCmp from './components/HeaderCmp';
import MainCmp from './components/MainCmp';

export default {
  name: 'app',
  components: {
    HeaderCmp,
    MainCmp
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
