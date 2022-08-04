<template>
  <div class="app">
     <!-- <Header/> -->
     <Navbar/>
    <router-view/>
         <Footer/>


  </div>
</template>
<script>
//import Header from './components/Header.vue';
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue';
export default{
    name: "appaComp",
    components: {
   //Header,
    Footer,
    Navbar
},
}
</script>


<style lang="scss">

</style>
