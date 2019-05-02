<template>
  <div id="app">
    <Header></Header>
    <Router-View></Router-View>
    <Footer></Footer>
    
  </div>

</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StateList from '@/components/StateList'

export default {
  name: 'app',
  components: {
    Header, Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
