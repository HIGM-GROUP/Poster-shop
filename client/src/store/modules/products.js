const state ={
  smallProducts:[
      {
          id:1,
          img:require("@/assets/char-1.png"),
          title:"Austronat",
          desc:"Marfa artisan pok pok, coloring book shaman intelligentsia meh kinfolk affogato raw denim direct trade subway tile kombucha."
      },
      {
          id:2,
          img:require("@/assets/char-2.png"),
          title:"Ninja",
          desc:"Marfa artisan pok pok, coloring book shaman intelligentsia meh kinfolk affogato raw denim direct trade subway tile kombucha."
      },
      {
          id:3,
          img:require("@/assets/char-3.png"),
          title:"Nerd",
          desc:"Marfa artisan pok pok, coloring book shaman intelligentsia meh kinfolk affogato raw denim direct trade subway tile kombucha."
      },
      {
          id:4,
          img:require("@/assets/char-11.png"),
          title:"Läkare",
          desc:"Marfa artisan pok pok, coloring book shaman intelligentsia meh kinfolk affogato raw denim direct trade subway tile kombucha."
      },
      {
          id:5,
          img:require("@/assets/char-12.png"),
          title:"Gitarrrknäppare",
          desc:"Marfa artisan pok pok, coloring book shaman intelligentsia meh kinfolk affogato raw denim direct trade subway tile kombucha."
      },
      {
          id:6,
          img:require("@/assets/char-4.png"),
          title:"Snorklare",
          desc:"Marfa artisan pok pok, coloring book shaman intelligentsia meh kinfolk affogato raw denim direct trade subway tile kombucha."
      },
      {
          id:7,
          img:require("@/assets/char-5.png"),
          title:"Clown",
          desc:"Marfa artisan pok pok, coloring book shaman intelligentsia meh kinfolk affogato raw denim direct trade subway tile kombucha."
      },
      {
          id:8,
          img:require("@/assets/char-6.png"),
          title:"Polis",
          desc:"Marfa artisan pok pok, coloring book shaman intelligentsia meh kinfolk affogato raw denim direct trade subway tile kombucha."
      },
      {
          id:9,
          img:require("@/assets/char-8.png"),
          title:"Fe",
          desc:"Marfa artisan pok pok, coloring book shaman intelligentsia meh kinfolk affogato raw denim direct trade subway tile kombucha."
      },
    ],
      
  largeProducts:[
{
    id:1,
    img:require("@/assets/char-7.png"),
    title:"Fotograf",
    desc:"Marfa artisan pok pok, coloring book shaman intelligentsia meh kinfolk affogato raw denim direct trade subway tile kombucha."
},
{
    id:2,
    img:require("@/assets/char-9.png"),
    title:"Personlig tränare",
    desc:"Marfa artisan pok pok, coloring book shaman intelligentsia meh kinfolk affogato raw denim direct trade subway tile kombucha."
},

],
};
//för att använda state som vi har lagt i state
const getters={
    smallProducts:(state)=>state.smallProducts,
    largeProducts:(state)=>state.largeProducts,
};
/*mapGetters att vi ska nvända stste att vi hämta varibler
mapAction
mapMoutation//vi använder i backend
*/
 export default{state,getters};