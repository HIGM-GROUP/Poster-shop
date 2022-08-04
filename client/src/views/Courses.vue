<template>
<div class="container">
  <video src="@/assets/video.mp4" className='home-video' autoPlay loop muted ></video>
  <div class="content">
  <h1 >Welcome </h1>
  <p className='home-desc'> Here you can see our courses and can participate in them. <br /> Contact us for more info or if you need help.</p>
  <!-- <NavLink className='home-contact' to="/courses">Connect</NavLink> -->
  </div>
  
</div>
 </template>
               
               
<script>
export default{
name:'CoursesView'}
</script>

<style scoped>
.container{
  position: relative;
    height: 100vh;
    width: 100%;
}
.content{
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0,0,0,0.8);
  padding: 20px;
  border-radius: 10px;
  color: #eee;
  text-align: center;
  
}
.home-video{
    height: 100%;
   width: 100%;
   object-fit: cover;
}
</style>