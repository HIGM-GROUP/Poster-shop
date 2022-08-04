<template>
    <div class="navbar">
        <h1 class="logo">HIGM</h1>
      <nav>
         <li><router-link to="/">Home</router-link></li>     
         <li><router-link to="/about">Courses</router-link></li>
         <li><router-link to="/contact">Course Information</router-link></li>
         <li><router-link to="/poster">Poster Shop</router-link></li>              
      </nav>
    </div>
</template>
<script>

export default{
      name:"NavbarComp",  
}
</script>
