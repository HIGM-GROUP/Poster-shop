import { createStore } from 'vuex'
import products from "./modules/products"
import users from "./modules/users";

export default createStore({
 
  modules: {
    products,
    users,
  }
})
