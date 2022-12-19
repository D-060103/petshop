<template>
  <div id="app">
  <div class="wrapper">
  <header class="main-head"><Header /></header>
  <Navigation />
  <router-view></router-view>
  <footer class="main-footer"><Footer /></footer>
  </div>
  </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import Navbar from '@/components/Navbar.vue'
  import Product from '@/components/Product.vue'
  import DogsItem from '@/components/DogsItem.vue'
  import CatsItem from '@/components/CatsItem.vue'
 // import ShopBasket from '@/components/ShopBasket.vue'
 // import Footer from '@/components/Footer.vue'
 // import Header from '@/components/Header.vue'
  
  export default {
    name: 'App',
    components: {
      Navbar,
      Product,
      DogsItem,
      CatsItem
    //  ShopBasket,
     // Footer,
     // Header
    },
  
  }
  
  </script>
  
