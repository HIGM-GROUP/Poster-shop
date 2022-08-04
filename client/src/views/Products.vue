<template>
<div class="products">
    <Header />
    <div class="products-container">
        <div class="small" v-if="smallProducts.length>0">
            <!-- id vi ska ta från data för att koppla till data vi använder v: bind om vi vill göra id som variabel jämför med react key={small.id} key=
            `${small.id}-->
            <div class="small-item" v-for="small in smallProducts" :key="small.id"> 
            <figure>
                <img :src="small.img">
            </figure>
            <h1>{{small.title}}</h1>
            <!-- vi kan använda text oxkså om vi vill -->
            <p v-text="small.desc"></p>
            <button>Oh, Take my money!</button>
        </div>
         </div> 
        <div class="no-smallArray" v-else>
            <h1>Unfortunately, there is nothing left!</h1>
        </div>
        <!-- jämför med react {smallproducts.map(small=>{
            return(
        <div className="small-item" key={small.id}>
         <figure>
         <img src={small.img} />
        </figure>
       <h1>{small.title }</h1>
       <p>{small.desc}</p>
         <button>Oh, Take my money!</button>
        </div>
         )
          })} -->
           <div class="large" v-if="largeProducts.length>0">
              <div class="large-item" v-for="large in largeProducts" :key="large.id"> 
            <figure>
                <img :src="large.img">
            </figure>
            <div class="large-info">
            <h1>{{large.title}}</h1>
            <p>{{large.desc}}</p>
            <button>Oh, take my money </button>
            </div>
            
        </div>
        </div>
         <div class="no-largArray" v-else>
            <h1>Unfortunately, there is nothing left!</h1>
        </div>
    
    </div>
</div>
</template>

<script>

import {mapGetters} from 'vuex';
import Header from "@/components/Header.vue"
export default {
    name:"ProductsView",
    /*mapGetters att vi ska nvända stste att vi hämta varibler
      att hämta all state en gån bara vi använder de i state bara*/
    computed:{
        //... att kopiera de state som finns redan
        ...mapGetters(["smallProducts","largeProducts"]), 

    },
    components:{
        Header,
    }
};
</script>
