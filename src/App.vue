<template>
  <div id="app">
   <Navbar></Navbar>
   <Navbar1></Navbar1>
    <router-view/>
  </div>
</template>

<script>

import Navbar from '../src/components/Navbar'
import Navbar1 from '../src/components/Navbar1'
import Footer from '../src/components/Footer'
export default {
  name: 'App',
   components: {
    Navbar,Navbar1,Footer
    
  },
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
</style>
